# micro-fe

微前端框架

[详情参考](https://juejin.im/post/5e7b72e3f265da42eb57f970)

[子项目 demo](https://github.com/hui-fly/micro-fe/tree/master/apps/demo)

### 推荐使用脚手架快速生成子项目

#### 安装

npm i rv-cli -g

#### 执行命令

rv create

### 子项目接入配置项

```
"projectName": {  // 模块名，即项目名
    id: 0,      // 模块id，用于菜单排序
    parent: {
        id: 3,    // 父级菜单id，用于菜单排序
        name: 'demo管理'   // 父级菜单名
    },
    "name": "测试模块", // 中文名称-菜单展示
    "path": "http://localhost:3000/app.js",  // 发布路径，如果是线上环境则应该为：http://xxx.com/js/app.js
    "permission": "", // 鉴权相关
    "router": "/template",  // 渲染响应路由
}
```
