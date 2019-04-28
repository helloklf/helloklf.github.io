## Unit测试框架karma配置
- Karma的配置可参考https://karma-runner.github.io/2.0/config/configuration-file.html<br />

# &nbsp;
> ### 01.浏览器配置

- Vue-cli默认配置Karma使用PhantomJS（一个无界面的浏览器）作为测试环境<br />
- 我们可以添加自己需要测试的浏览器，Chrome、Firefox、MicrosoftEdge等<br />
- 添加浏览器时，还需要安装相关的launcher插件来启动浏览器<br />
- 配置信息格式如下(/*...*/ 表示省略了其它代码)：

```javascript
/*...*/
module.exports = function (config) {
  config.set({
    /*...*/
    //这里是个数组，可见是允许配置多个浏览器的
    browsers: ['Chrome', 'PhantomJS'],
    //并发数：指定一个时间点允许同时启动的浏览器数量，Infinity则设为无限
    concurrency: Infinity
    /*...*/
  })
}
```

- 下面列出各个浏览器所需的插件<br />
# &nbsp;

| 浏览器 | 所需插件 |
| ------ | ------ |
| Chrome | karma-chrome-launcher |
| ChromeCanary | karma-chrome-launcher |
| PhantomJS | karma-phantomjs-launcher |
| Firefox | karma-firefox-launcher |
| Opera | karma-opera-launcher |
| IE | karma-ie-launcher |
| Safari | karma-safari-launcher |


# &nbsp;
> ### 02.自动监视

- 前面在Karma的简介中，已经说到支持自动监听文件更改，并自动重新测试<br />
- 注意：旧版Vue-cli创建项目时，默认会为unit命令添加--single-run参数，去项目根目录下的package.json文件，把它去掉！

```javascript
/*...*/
module.exports = function (config) {
  config.set({
    /*...*/
    //是否自动监视
    autoWatch: true,
    //是否单次运行，需要持续运行karma并监听文件更改，必然要改成false
    singleRun: false,
    /*...*/
  })
}
```


# &nbsp;
> ### 03.浏览器跨域安全配置

- 由于我们的测试代码运行在本地，大多数情况下会遇到问题。因此我们需要进行一些配置来避免这些问题。<br />
- 这里收集了Chrome和Phantomjs的配置方式

- Phantomjs的配置方式，详情可参考：https://github.com/karma-runner/karma-phantomjs-launcher

```javascript
/*...*/
module.exports = function (config) {
  config.set({
    /*...*/
    //Phantomjs安全配置
    phantomjsLauncher: {
      settings: {
        webSecurityEnabled: false
      },
      options: {
        settings: {
          webSecurityEnabled: false
        }
      },
      flags: ['--ignore-ssl-errors=true'],
    }
    /*...*/
  })
}
```

- Chrome的配置方式，详情可参考：https://github.com/karma-runner/karma-chrome-launcher

```javascript
/*...*/
module.exports = function (config) {
  config.set({
    /*...*/
    //Chrome禁用Web安全还需要在browsers中定义一项
    browsers: ['Chrome_without_security'],
    //Chrome浏览器安全配置
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--user-data-dir=C:\\MyChromeDevUserData']
      }
    }
    /*...*/
  })
}
```

- 其它浏览器的配置，可参考https://github.com/karma-runner 的各个***-***-launcher项目中的说明



# &nbsp;
> ### 04.Mocha配置

- 大多数情况下，默认的配置满足需求<br />
- Mocha默认限制异步测试过程执行时间为2000ms，但有时我们需要进行一个长时间的等待操作<br />

> karma-mocha源码adapter.js文件中对mocha指定的默认配置，如下：

```javascript
// Default configuration
var mochaConfig = {
  reporter: createMochaReporterConstructor(window.__karma__, window.location.pathname),
  ui: 'bdd',
  globals: ['__cov*']
}
```

> 因此我们复制并修改这段配置内容，加入到karma.conf.js中，如下：

```javascript
module.exports = function (config) {
  config.set({
    /*...*/
    client: {
      mocha:{
        ui: 'bdd',
        globals: ['__cov*'],
        //这就是我们需要增加的超时时间参数
        timeout: 50000
      }
    }
    /*...*/
  })
}
```


# &nbsp;
> ### 05.完整配置示例

```javascript
// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` tipArray below.
    //browsers: ['Chrome', 'PhantomJS'],
    browsers: ['Chrome_without_security'],
    client: {
      mocha:{
        ui: 'bdd',
        globals: ['__cov*'],
        timeout: 50000
      }
    },
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--user-data-dir=C:\\MyChromeDevUserData']
      }
    },
    phantomjsLauncher: {
      settings: {
        webSecurityEnabled: false
      },
      options: {
        settings: {
          webSecurityEnabled: false
        }
      },
      flags: ['--ignore-ssl-errors=true'],
    },
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage', 'progress'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    /**
     * 日志等级
     * 可能的值：
     * config.LOG_DISABLE //不输出信息
     * config.LOG_ERROR    //只输出错误信息
     * config.LOG_WARN //只输出警告信息
     * config.LOG_INFO //输出全部信息
     * config.LOG_DEBUG //输出调试信息
     */
    logLevel: config.LOG_WARN,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    crossOriginAttribute: true,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
```
