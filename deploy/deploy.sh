#!/bin/bash
# 本地执行：打包并部署到 EC2
# 用法：./deploy/deploy.sh <EC2_PUBLIC_IP> <KEY_FILE_PATH>
# 示例：./deploy/deploy.sh 54.123.45.67 ~/.ssh/video2gif.pem

set -e

EC2_IP=$1
KEY_FILE=$2

if [ -z "$EC2_IP" ] || [ -z "$KEY_FILE" ]; then
  echo "用法: $0 <EC2_PUBLIC_IP> <KEY_FILE_PATH>"
  exit 1
fi

SSH_OPTS="-i $KEY_FILE -o StrictHostKeyChecking=no"
REMOTE="ec2-user@$EC2_IP"

echo "=== 构建前端 ==="
cd "$(dirname "$0")/.."
npm run build --prefix client

echo "=== 打包项目 ==="
tar --exclude='node_modules' \
    --exclude='client/dist' \
    --exclude='.git' \
    --exclude='server/uploads/*' \
    --exclude='server/output/*' \
    -czf /tmp/video2gif.tar.gz .

echo "=== 上传到 EC2 ==="
scp $SSH_OPTS /tmp/video2gif.tar.gz $REMOTE:/tmp/
scp $SSH_OPTS client/dist $REMOTE:/tmp/dist -r

echo "=== 解压并部署 ==="
ssh $SSH_OPTS $REMOTE << 'ENDSSH'
  sudo mkdir -p /var/www/video2gif
  sudo tar -xzf /tmp/video2gif.tar.gz -C /var/www/video2gif
  sudo cp -r /tmp/dist /var/www/video2gif/client/dist
  sudo chown -R ec2-user:ec2-user /var/www/video2gif
ENDSSH

echo "=== 首次部署：运行初始化脚本 ==="
ssh $SSH_OPTS $REMOTE "sudo bash /var/www/video2gif/deploy/setup.sh"

echo ""
echo "✅ 部署完成！访问 http://$EC2_IP"
