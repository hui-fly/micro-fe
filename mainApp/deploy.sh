# deploy.sh
# 错误时停止
set -e

# 打包
npm run build:prd

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:hui-fly/micro-fe.git master:gh-pages

cd -


# demo文件夹部署
npm run build:prd
cd ../apps/demo/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:hui-fly/micro-module-demo.git master:gh-pages

cd -

#react-demo
npm run build
cd ../apps/react-demo/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:hui-fly/micro-react-demo.git master:gh-pages

cd -