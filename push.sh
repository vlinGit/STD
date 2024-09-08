#!/bin/bash

# 检查是否存在build.sh文件
if [ ! -f ./build.sh ]; then
    echo "找不到build.sh文件，退出..."
    exit 1
fi

# 运行build.sh脚本
echo "步骤 1: 运行 build.sh..."
bash ./build.sh

# 检查是否成功生成了dist目录
if [ ! -d ./dist ]; then
    echo "dist目录未生成，退出..."
    exit 1
fi

# 第 2 步: 压缩dist目录为dist.zip
echo "步骤 2: 压缩 dist 目录为 dist.zip..."
zip -r dist.zip ./dist

# 第 3 步: SCP上传dist.zip到服务器
echo "步骤 3: 上传 dist.zip 到服务器..."
scp dist.zip ppay:/home/user/ldf/node

if [ $? -ne 0 ]; then
    echo "SCP上传失败，退出..."
    exit 1
fi

# 第 4 步: 删除本地的dist.zip
echo "步骤 4: 删除本地 dist.zip..."
rm -rf dist.zip

# 第 5 步: 远程登录服务器解压并覆盖已有的dist目录
echo "步骤 5: 远程登录服务器并解压 dist.zip..."
ssh ppay <<EOF
  cd /home/user/ldf/node
  unzip -o dist.zip
  rm -rf dist.zip
  pm2 restart yiai-v2.5.0
  exit
EOF

# 第 6 步: 完成
echo "步骤 6: 完成"
