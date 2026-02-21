#!/bin/bash
# 自动在 AWS 创建 EC2 实例并部署 video2gif
# 执行前确保 aws configure 已完成
set -e

APP_NAME="video2gif"
REGION=$(aws configure get region 2>/dev/null || echo "ap-northeast-1")
KEY_NAME="${APP_NAME}-key"
SG_NAME="${APP_NAME}-sg"
INSTANCE_TYPE="t3.small"

echo "=== 区域: $REGION ==="

# 1. 创建密钥对
echo "=== 创建 SSH 密钥对 ==="
KEY_FILE="$HOME/.ssh/${KEY_NAME}.pem"
if [ ! -f "$KEY_FILE" ]; then
  aws ec2 create-key-pair \
    --key-name $KEY_NAME \
    --query 'KeyMaterial' \
    --output text \
    --region $REGION > "$KEY_FILE"
  chmod 400 "$KEY_FILE"
  echo "密钥已保存到 $KEY_FILE"
else
  echo "密钥文件已存在: $KEY_FILE"
fi

# 2. 创建安全组
echo "=== 创建安全组 ==="
SG_ID=$(aws ec2 describe-security-groups \
  --filters "Name=group-name,Values=$SG_NAME" \
  --query 'SecurityGroups[0].GroupId' \
  --output text \
  --region $REGION 2>/dev/null || echo "None")

if [ "$SG_ID" = "None" ] || [ -z "$SG_ID" ]; then
  SG_ID=$(aws ec2 create-security-group \
    --group-name $SG_NAME \
    --description "Security group for $APP_NAME" \
    --region $REGION \
    --query 'GroupId' \
    --output text)
  echo "安全组已创建: $SG_ID"

  # 开放端口
  aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 22 --cidr 0.0.0.0/0 --region $REGION
  aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 80 --cidr 0.0.0.0/0 --region $REGION
  aws ec2 authorize-security-group-ingress --group-id $SG_ID --protocol tcp --port 443 --cidr 0.0.0.0/0 --region $REGION
  echo "已开放 22/80/443 端口"
else
  echo "安全组已存在: $SG_ID"
fi

# 3. 获取最新 Amazon Linux 2023 AMI
echo "=== 获取最新 Amazon Linux 2023 AMI ==="
AMI_ID=$(aws ec2 describe-images \
  --owners amazon \
  --filters \
    "Name=name,Values=al2023-ami-2023*-x86_64" \
    "Name=state,Values=available" \
  --query 'sort_by(Images, &CreationDate)[-1].ImageId' \
  --output text \
  --region $REGION)
echo "AMI: $AMI_ID"

# 4. 启动 EC2 实例
echo "=== 启动 EC2 实例 ($INSTANCE_TYPE) ==="
INSTANCE_ID=$(aws ec2 run-instances \
  --image-id $AMI_ID \
  --instance-type $INSTANCE_TYPE \
  --key-name $KEY_NAME \
  --security-group-ids $SG_ID \
  --block-device-mappings '[{"DeviceName":"/dev/xvda","Ebs":{"VolumeSize":20,"VolumeType":"gp3"}}]' \
  --tag-specifications "ResourceType=instance,Tags=[{Key=Name,Value=$APP_NAME}]" \
  --region $REGION \
  --query 'Instances[0].InstanceId' \
  --output text)
echo "实例 ID: $INSTANCE_ID"

# 5. 等待实例运行
echo "=== 等待实例启动（约 60 秒）==="
aws ec2 wait instance-running --instance-ids $INSTANCE_ID --region $REGION

# 6. 获取公网 IP
PUBLIC_IP=$(aws ec2 describe-instances \
  --instance-ids $INSTANCE_ID \
  --query 'Reservations[0].Instances[0].PublicIpAddress' \
  --output text \
  --region $REGION)

echo ""
echo "=============================="
echo "✅ EC2 实例已启动！"
echo "实例 ID : $INSTANCE_ID"
echo "公网 IP : $PUBLIC_IP"
echo "密钥文件: $KEY_FILE"
echo "=============================="
echo ""
echo "等待 SSH 服务就绪（约 30 秒）..."
sleep 30

echo ""
echo "下一步：运行部署脚本"
echo "  ./deploy/deploy.sh $PUBLIC_IP $KEY_FILE"
echo ""
echo "或手动 SSH 连接："
echo "  ssh -i $KEY_FILE ec2-user@$PUBLIC_IP"
