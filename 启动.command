#!/bin/bash
cd "$(dirname "$0")"

echo "LoveLive! 推し图鉴生成器 - 启动中..."

if [ ! -d "node_modules" ]; then
  echo "首次运行，正在安装依赖..."
  npm install
fi

if [ ! -f "public/assets/title.png" ]; then
  echo "生成占位图片..."
  node scripts/generate-placeholders.mjs
fi

echo "清理 Vite 缓存..."
rm -rf .vite node_modules/.vite 2>/dev/null

PORT=5173
if lsof -ti:$PORT > /dev/null 2>&1; then
  echo "端口 $PORT 已被占用，正在关闭..."
  kill -9 $(lsof -ti:$PORT) 2>/dev/null
  sleep 1
fi

echo "启动开发服务器..."
npm run dev &
SERVER_PID=$!

sleep 2
open "http://localhost:$PORT"

wait $SERVER_PID
