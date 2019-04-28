## 关于Karma和Mocha
- 首先，第一个大坑：我们不能“完全参照”Mocha官方文档的语法来写测试代码<br />
- 其次，第二个大坑：我们不知道如何定义Karma_Mocha中对Mocha的配置，因为几乎没有像样的文档和案例可以参考<br />


# &nbsp;
### 01.关于Mocha
> 引用官网的说明：Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

- Mocha是个可以运行在Node.js和浏览器上的JavaScript测试框架<br />
- Mocha让一步测试变得简单有趣<br />
- 下面，可以看一段Mocha官方文档上展示的代码，关于在浏览器中使用Mocha的示例<br />
- 详情可参考 https://mochajs.org/#running-mocha-in-the-browser

```html
<html>
  <head>
    <meta charset="utf-8">
    <link href="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.css" rel="stylesheet" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="https://cdn.rawgit.com/jquery/jquery/2.1.4/dist/jquery.min.js"></script>
    <script src="https://cdn.rawgit.com/Automattic/expect.js/0.3.1/index.js"></script>
    <script src="https://cdn.rawgit.com/mochajs/mocha/2.2.5/mocha.js"></script>
    <script>mocha.setup('bdd')</script>
    <script src="test.array.js"></script>
    <script src="test.object.js"></script>
    <script src="test.xhr.js"></script>
    <script>
      mocha.checkLeaks();
      mocha.globals(['jQuery']);
      mocha.run();
    </script>
  </body>
</html>
```


# &nbsp;
### 02.关于Karma
> 引用官网的说明：A simple tool that allows you to execute JavaScript code in multiple real browsers.<br />
> Karma is essentially a tool which spawns a web server that executes source code against test code for each of the browsers connected. The results of each test against each browser are examined and displayed via the command line to the developer such that they can see which browsers and tests passed or failed.
A browser can be captured either
manually, by visiting the URL where the Karma server is listening (typically http://localhost:9876/),
or automatically by letting Karma know which browsers to start when Karma is run (see browsers).
Karma also watches all the files, specified within the configuration file, and whenever any file changes, it triggers the test run by sending a signal to the testing server to inform all of the captured browsers to run the test code again. Each browser then loads the source files inside an IFrame, executes the tests and reports the results back to the server.
The server collects the results from all of the captured browsers and presents them to the developer.
This is only a very brief overview, as the internals of how Karma works aren't entirely necessary when using Karma.
However, if you are interested in learning more, Karma itself originates from a university thesis, which goes into detail about the design and implementation, and it is available to read right here.

- Karma帮助我们在多个浏览器上运行JavaScript代码<br />
- Karma本质上是一个工具，它会创建一个Web服务器，对每个连接的浏览器执行测试代码的源代码。对每个浏览器的每个测试的结果都进行检查，并通过命令行显示给开发人员，以便他们可以看到哪些浏览器和测试通过或失败。<br />
- Karma启动时，会自动运行并捕获已配置的浏览器（自己增加浏览器，可能需要手动安装相关组件才能启动浏览器）。<br />
- 在浏览器中打开Karma监听的URL（默认是http://localhost:9876/），Karma会自动捕获浏览器。<br />
- Karma可以配置自动监视文件（可配置）更改，并自动重新运行测试代码。<br />
- Karma用于低级（Unit）测试，并不适用于E2E测试。<br />
- 如果遇到难以解决的问题，我们可以通过http://localhost:9876/debug.html来调试。<br />

