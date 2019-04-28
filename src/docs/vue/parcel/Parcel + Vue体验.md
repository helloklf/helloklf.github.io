### 1.安装parcel
```npm install parcel -g```

### 2.初始化项目
```npm init -y```

### 3.开始编码
> 添加 **index.html**
```
<html>
  <head></head>
  <body>
    测试Parcel
  </body>
</html>
```

### 4.启动服务器
> 默认启动的服务是1234端口，也可通过 -p 参数自定义端口号，如 **parcel index.html -p 2048**
```
parcel index.html
```
> 在浏览器中查看 **http://localhost:1234**


### 5.Vue的尝试
> 沿用以前的编码风格，先添加 main.js
```
import Vue from 'vue'
new Vue({
  el: 'body',
  render (r) {
    return r('h2', '测试Vue')
  }
})
```
> 在HTML中引用main.js
```
<html>
  <head></head>
  <body></body>
  <script src="./main.js"></script>
</html>
```
> parcel会自动监听文件的改版并重新编译，刷新浏览器即可查看效果


### 6.在vue中使用jsx语法
> 首先需要安装额外的依赖
```npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props babel-preset-env --save-dev```
> 在项目根目录下添加.babelrc，添加**transform-vue-jsx**使用
```
{
  "presets": ["env"],
  "plugins": ["transform-vue-jsx"]
}
```
> 现在修改main.js
```
import Vue from 'vue'
new Vue({
  el: 'body',
  render (h) {
    return (<input />)
  }
})
```
> 重启服务，刷新浏览器查看效果

