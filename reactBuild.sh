npm ci
rm -rf build
npm run build
scp -r build/* limitless:/home/projects/limitless/limitlessco-landing
