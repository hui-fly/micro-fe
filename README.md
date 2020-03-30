# micro-fe
微前端框架

[详情参考](https://juejin.im/post/5e7b72e3f265da42eb57f970)

[子项目demo](https://github.com/hui-fly/micro-module-demo)

### 推荐使用脚手架快速生成子项目
#### 安装
npm i rv-cli -g

#### 执行命令
rv create

### 子项目接入配置项
```
"projectName": {  // 模块名，即项目名
  "name": "测试模块", // 中文名称-菜单展示
  "path": "http://localhost:8080",  // 发布路径
  "main": "/js/app.js", // 主js文件访问路径 /app.js 或者 /js/app.js
  "permission": "", // 鉴权权限列表
  "router": "/template",  // 渲染响应路由
  "root": "#container", // 渲染根组件
  "base": true  // 是否基础组件（基础组件忽略渲染响应路由）
}
```
