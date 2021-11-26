# 深圳市泰成兴电子科技有限公司官网

使用vue2搭建

## 安装依赖
```
yarn install
```

### 启动本地服务
```
yarn serve
```

### 构建
```
yarn build
```

### 部署上线

只需要把`\dist`目录里面的内容上传到服务器即可(上传到对应服务的根目录)

页面路由使用VUE的`history`模式，所以上线后需要在服务器上配置使用前端路由，具体操作请查看[VUE Router官方文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html)

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
