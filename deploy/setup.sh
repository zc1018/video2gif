#!/bin/bash
# EC2 服务器初始化脚本（Amazon Linux 2023）
set -e

echo "=== 安装 Node.js 20 ==="
curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
dnf install -y nodejs

echo "=== 安装 FFmpeg ==="
dnf install -y ffmpeg

echo "=== 安装 nginx ==="
dnf install -y nginx

echo "=== 安装 PM2 ==="
npm install -g pm2 tsx

echo "=== 创建目录 ==="
mkdir -p /var/www/video2gif
mkdir -p /var/log/video2gif

echo "=== 配置 nginx ==="
cp /var/www/video2gif/deploy/nginx.conf /etc/nginx/conf.d/video2gif.conf
# 移除默认配置
rm -f /etc/nginx/conf.d/default.conf

echo "=== 安装后端依赖 ==="
cd /var/www/video2gif/server && npm install --production

echo "=== 启动服务 ==="
cd /var/www/video2gif
pm2 start deploy/ecosystem.config.js
pm2 save
pm2 startup systemd -u ec2-user --hp /home/ec2-user | tail -1 | bash

echo "=== 启动 nginx ==="
systemctl enable nginx
systemctl start nginx

echo "=== 完成！==="
echo "服务已启动，访问 http://$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)"
