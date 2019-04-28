## Nightwatch.js 配置
  - 以前一篇创建的test_project_sample项目为例，配置文件在test_project_sample\test\e2e目录下
  - 详情可参考 http://nightwatchjs.org/gettingstarted#settings-file


# 　
### 01.在Nigthwatch测试代码中使用ES6语法<br />
> 很奇妙的是，使用默认配置，在编写测试代码时，发现improt语法并不支持<br />
> 因此，我们需要做一些配置，首先需要安装babel-preset-es2015<br />
> 详细内容可参考 http://www.ruanyifeng.com/blog/2016/01/babel.html

```bash
npm install --save-dev babel-preset-es2015
```

> 安装完babel-preset-es2015后，修改项目根目录下的.babelrc文件（如果没有，就新建一个）<br />
> 在presets节下增加"es2015"，修改后效果如下：

```javascript
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": { "browsers": ["> 1%", "last 2 versions", "not ie <= 8"] }
    }],
    "es2015",
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"],
  "env": {
    "test": {
      "presets": ["env", "stage-2"],
      "plugins": ["transform-vue-jsx", "transform-es2015-modules-commonjs", "dynamic-import-node"]
    }
  }
}
```


# 　
### 02.浏览器配置
- Nightwatch官方文档中提到Chrome、Firefox、IE三个浏览器，需要使用它们分别要下载不同的驱动<br />
- 参考文档1：http://blog.csdn.net/five3/article/details/19085303 <br />
- 参考文档2：http://nightwatchjs.org/gettingstarted#browser-drivers-setup


# 　
### 03.完整配置示例

```javascript
require('babel-register')
var config = require('../../config')

// http://nightwatchjs.org/gettingstarted#settings-file
module.exports = {
  //测试用例存放位置
  src_folders: ['test/e2e/specs'],
  //报告输出位置
  output_folder: 'test/e2e/reports',
  //自定义断言存放位置
  custom_assertions_path: ['test/e2e/custom-assertions'],
  //自定义命令存放位置
  custom_commands_path: ['test/e2e/custom-commands'],

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.dev.port),
        //userInfo是自定义的一段登陆状态信息，用于测试代码中模拟用户登陆状态
        userInfo: { uid: 2793122, authtoken: 'JLU-212-KHYC-11' }
        //你还可以在这里添加一些自定义参数，编写测试代码时可以通过browser.globals读取
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        //谷歌浏览器参数，详见 http://nightwatchjs.org/gettingstarted#chromedriver
        chromeOptions: {
          "args": [
            //设置UA（例如，模拟微信内置浏览器的UA）
            "--user-agent=AppleWebKit/537.36 Chrome/63.0.3239.84",
            //设置窗口大小
            "--window-size=320,640",
            //设置用户数据目录
            "--user-data-dir=C:\\MyChromeDevUserData",
            //禁用跨域安全（需要配合--user-data-dir使用）
            "--disable-web-security"
          ]
        },
      }
    },

    edge : {
      "desiredCapabilities": {
        "browserName": "MicrosoftEdge"
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}
```

# 　
### 04.Vue-cli配置的Nightwatch启动过程
- 在Vue-cli创建的项目中，可以通过 `npm run e2e来执行e2e测试` <br />
- 而实际上，在package.json中，可以看到e2e命令的定义是 `node test/e2e/runner.js` <br />
- 用Node去运行了一段代码！下面我们看看runner.js里都写了什么

```javascript
// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'

const webpack = require('webpack')
const DevServer = require('webpack-dev-server')

const webpackConfig = require('../../build/webpack.prod.conf')
const devConfigPromise = require('../../build/webpack.dev.conf')

let server

devConfigPromise.then(devConfig => {
  const devServerOptions = devConfig.devServer
  const compiler = webpack(webpackConfig)
  server = new DevServer(compiler, devServerOptions)
  const port = devServerOptions.port
  const host = devServerOptions.host
  return server.listen(port, host)
})
.then(() => {
  // 2. run the nightwatch test suite against it
  // to run in additional browsers:
  //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
  //    2. add it to the --env flag below
  // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
  // For more information on Nightwatch's config file, see
  // http://nightwatchjs.org/guide#settings-file
  let opts = process.argv.slice(2)
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js'])
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome'])
  }

  const spawn = require('cross-spawn')
  const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })

  runner.on('exit', function (code) {
    server.close()
    process.exit(code)
  })

  runner.on('error', function (err) {
    server.close()
    throw err
  })
})
```

- 看了这代码，简直豁然开朗
- 开头就require来了一个`webpack-dev-server`，分明就是要做一个类似`npm run dev`的操作！
- 再往下看，就发现在启动完webpackDevServer之后，又从test/e2e/nightwatch.conf.js读取了一系列的参数
- 接着通过cross-spawn运行nightwatch，并将参数传入
- 接着监听nightwatch进程的exit和error事件来指定webpackDevServer的退出
- 由此可将，在这里其实是两个独立的进程