## 在Vue.js项目中使用测试框架
- 本示例只说明 Vue.js + Webpack架构下的测试框架安装和使用
- 因此，你首先需要在电脑上安装Node.js

***

> #### 01.安装vue-cli
> - 如果你已安装过，可跳过本步骤
> ```bash
npm install vue-cli
> ```

***

> #### 02.创建项目
> - 在空白目录下，使用命令行窗口执行执行代码
> ```bash
> vue init webpack test_project_sample
```
> - 根据提示操作
> ```bash
#项目名称
?Project name test_project_sample
#项目说明
?Project description A Vue.js project
#作者
?Author kuanglinfei <helloklf@outlook.com>
#
?Vue build standalone
#是否集成vue-router
?Install vue-router? Yes
#是否集成ESLint语法检测
?Use ESLint to lint your code? Yes
?Pick an ESLint preset Standard
#是否集成unit测试框架
?Set up unit tests Yes
#选择unit测试框架（使用键盘上下键选择）
?Pick a test runner (Use arrow keys)
  Jest
> Karma and Mocha
  none (configure it yourself)
#是否集成e2e测试框架
?Setup e2e tests with Nightwatch? Yes
# 选择依赖管理程序，推荐NPM
?Should we run `npm install` for you after the project has been created? (recommended)
>Yes, use NPM
 Yes, use Yarn
 No, I will handle that myself
```

***

> #### 03.下载依赖
  - 这个过程中，chromedriver可能会下载失败
  - chromedriver下载失败，可先挂载一个VPN，再使用```npm install chromedriver```命令单独下载，多试几次
  - 如果没有VPN，也可以用```npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver``` 命令下载
> ```bash
#跳转到项目目录
cd test_project_sample
#下载依赖
npm install
```

***

> #### 04.运行unit测试
  - 在test_project_sample项目目录下执行以下代码
> ```bash
npm run unit
```

***

> #### 05.运行e2e测试
  - 在test_project_sample项目目录下执行以下代码
  - 需要注意的是，测试框架需要捕获浏览器窗口
  - 如果遇到测试代码一直处于等待运行状态，建议关闭所有浏览器窗口，并重新启动测试
> ```bash
npm run e2e
```
