#!/bin/bash

set -e

cd admin/
pnpm build
cd ..

cd chat/
pnpm build
cd ..

cd service/
pnpm build
cd ..

rm -rf dist/dist/* dist/public/* dist/templates/*

mkdir -p dist/dist dist/public/admin dist/templates

cp service/pm2.conf.json dist/pm2.conf.json
cp service/package.json dist/package.json
cp service/README.md dist/README.md
cp service/.env.example dist/.env.example

cp -r service/templates/* dist/templates
cp -r service/dist/* dist/dist
cp -r admin/dist/* dist/public/admin
cp -r chat/dist/* dist/public

echo "打包完成"
