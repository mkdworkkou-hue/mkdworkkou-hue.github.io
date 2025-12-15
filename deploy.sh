#!/bin/bash

# GitHub Pages デプロイスクリプト
# 使用方法: ./deploy.sh

# エラーが発生したら停止
set -e

echo "🔨 Building project..."
pnpm build

echo "📁 Preparing deployment..."
# dist/public の内容をコピー
cp -r dist/public/* .

echo "✅ Build complete! Files are ready for GitHub Pages."
echo "📝 Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Deploy to GitHub Pages'"
echo "3. git push origin main"
