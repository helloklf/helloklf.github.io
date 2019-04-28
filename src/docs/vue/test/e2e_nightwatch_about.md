## 关于E2E测试框架 Nightwatch.js
- http://nightwatchjs.org


# &nbsp;
> ### 01.说明 
- 引用官方原文：Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements.<br />
- Nightwatch.js是基于浏览器的应用程序和网站的基于Node.js的End-to-End（E2E）测试解决方案。它使用强大的W3C WebDriver API在DOM元素上执行命令和断言。

# &nbsp;
> ### 02.主要特点
- 干净的语法：简单而功能强大的语法，使用Javascript（Node.js）和CSS、Xpath选择器<br />
- 内置Xml报表<br />
- 易于拓展，可参考：http://nightwatchjs.org/guide#extending<br />


# &nbsp;
> ### 02.工作原理
- 引用原文：Nightwatch works by communicating over a restful HTTP api with a WebDriver server (typically the Selenium server). The restful API protocol is defined by the W3C WebDriver API. See below for an example workflow for browser initialization.<br />
- Most of the times, Nightwatch needs to send at least 2 requests to the WebDriver server in order to perform a command or assertion, the first one being the request to locate an element given a CSS selector (or Xpath expression) and the next to perform the actual command/assertion on the given element.
- Nightwatch通过使用WebDriver服务器（通常是Selenium服务器）通过restful HTTP API进行通信。restful API协议由W3C WebDriver API定义。<br />
- 请参阅下面的浏览器初始化示例工作流程。<br />
- 大多数情况下，Nightwatch需要向WebDriver服务器发送至少两个请求，以执行命令或断言。第一个请求是定位给定CSS选择器（或Xpath表达式）的元素，下一个执行给定元素上的实际命令/断言。

![原理图](http://nightwatchjs.org/img/operation.png)


# &nbsp;
> ### 03.WebDriver概述
- 引用原文：WebDriver is a general purpose library for automating web browsers. It was started as part of the Selenium project, which is a very popular and comprehensive set of tools for browser automation, initially written for Java but now with support for most programming languages.
Nightwatch uses the WebDriver API to perform the browser automation related tasks, like opening windows and clicking links for instance.
WebDriver is now a W3C specification, which aims to standardize browser automation. WebDriver is a remote control interface that enables introspection and control of user agents. It provides a platform and a restful HTTP api as a way for web browsers to be remotely controlled.<br />
- WebDriver是用于自动化Web浏览器的通用库。 
- 它是作为Selenium项目的一部分而开始的，该项目是一个非常流行和全面的浏览器自动化工具，最初是为Java编写的，但现在支持大多数编程语言。
- Nightwatch使用WebDriver API来执行浏览器自动化相关的任务，例如打开窗口和点击链接。
- WebDriver现在是一个W3C规范，旨在标准化浏览器自动化。 
- WebDriver提供restful HTTP API，用于远程控制Web浏览器。


# &nbsp;
> ### 04.Selenium Webdriver 原理
- Selenium2 = Selenium + Webdriver，因此也叫Selenium Webdriver <br />
- 其工作原理可参考 https://www.cnblogs.com/leeboke/p/5014058.html