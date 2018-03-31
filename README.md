# thomas-blog
- 目前仅实现博客的首页部分功能，后续会不断完善
> A Vue.js project
>## 技术栈
>
> ##### Sass / Vue / vue-axis / vue-route

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
>## 这是一个个人博客的前端界面，做了响应式处理，适配手机端和pc端

- #### 移动端

![image](https://github.com/thomaszhou63/thomas-blog/blob/master/static/mobile-ex1.gif)
- #### pc端
![image](https://github.com/thomaszhou63/thomas-blog/blob/master/static/pc-ex1.gif)


>**注1:** 项目是vue-cli搭建，利用json-server创建mock服务器，利用axios进行模拟前后端分离

>#### 部署github注意事项: 
>
> 1. 将项目中config/index.js文件中的build数据中的```assetsPublicPath: '/'```改成```assetsPublicPath: './'```
>
> 2. 现在本地通过 npm run build 打包项目，生成dist文件
>
> 3. 如果要使得github可以预览网页（项目是mock数据的情况下），要将json文件的数据复制粘贴到vue文件中，因为github不支持mock数据的操作



