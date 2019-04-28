export default [
  {
    group: 'Vue.js E2E测试',
    type: 'js',
    docs: [{
      key: 'docs-vue-parcel',
      label: 'Parcel + Vue体验',
      desc: '使用Parcel创建并打包Web项目',
      icon: 'icon-restart',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('./vue/parcel/Parcel + Vue体验.md')
        }
      }
    }]
  },
  {
    group: 'Vue.js E2E测试',
    type: 'vue',
    docs: [
      {
        key: 'docs-vue-test-setup',
        label: 'E2E、Unit测试框架安装',
        desc: '介绍E2E测试框架Nightwatch、Unit测试框架Karma-mocha在Vue项目中的集成安装',
        icon: 'icon-restart',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/setup.md')
          }
        }
      },
      {
        key: 'docs-vue-e2e-about',
        label: 'E2E Nightwatch.js 简介',
        icon: 'icon-info',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/e2e_nightwatch_about.md')
          }
        }
      },
      {
        key: 'docs-vue-e2e-config',
        label: 'E2E Nightwatch.js 配置',
        icon: 'icon-setup',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/e2e_nightwatch_config.md')
          }
        }
      },
      {
        key: 'docs-vue-e2e-assert',
        label: 'E2E Nightwatch.js 语法',
        icon: 'icon-code',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/e2e_nightwatch_assert.md')
          }
        }
      },
      {
        key: 'docs-vue-e2e-sample',
        label: 'E2E Nightwatch.js 示例',
        icon: 'icon-samples',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/e2e_nightwatch_sample.md')
          }
        }
      },
      {
        key: 'docs-vue-e2e-extend',
        label: 'E2E Nightwatch.js 拓展',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/e2e_nightwatch_extend.md')
          }
        }
      }
    ]
  },
  {
    group: 'Vue.js Unit测试',
    type: 'vue',
    docs: [
      {
        key: 'docs-vue-test-setup',
        label: 'E2E、Unit测试框架安装',
        desc: '介绍E2E测试框架Nightwatch、Unit测试框架Karma-mocha在Vue项目中的集成安装',
        icon: 'icon-restart',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/setup.md')
          }
        }
      },
      {
        key: 'unit_karma_mocha_about',
        label: 'Unit Karma_Mocha 简介',
        icon: 'icon-info',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/unit_karma_mocha_about.md')
          }
        }
      },
      {
        key: 'unit_karma_mocha_config',
        label: 'Unit Karma_Mocha 配置',
        icon: 'icon-setup',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/unit_karma_mocha_config.md')
          }
        }
      },
      {
        key: 'unit_karma_mocha_test',
        label: 'Unit Karma_Mocha 语法',
        icon: 'icon-code',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('./vue/test/unit_karma_mocha_test.md')
          }
        }
      },
      {
        key: 'b',
        label: 'Markdown Online Test',
        icon: 'icon-samples',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: require('@/docs/test.md')
          }
        }
      }
    ]
  },
  {
    group: 'Golang 上手',
    type: 'go',
    docs: [{
      key: 'setup',
      label: '准备开始',
      desc: '在你的Windows、Linux、Mac设备上，准备Go开发和运行环境，并创建 “Hello World!”',
      icon: 'icon-restart',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/1. 准备开始.md')
        }
      }
    }, {
      key: 'basic',
      label: '语法基础',
      desc: 'Go语言基本语法',
      icon: 'icon-code',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/2. 语法基础.md')
        }
      }
    }, {
      key: 'type',
      label: '数据类型',
      desc: '了解Go的常见数据类型，以及类型转换',
      icon: 'icon-code',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/3. 数据类型.md')
        }
      }
    }, {
      key: 'extend',
      label: '进阶技巧',
      desc: '观察和了解Go在面向对象方面，与其它高级语言的异同',
      icon: 'icon-code',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/4. 进阶技巧.md')
        }
      }
    }, {
      key: 'mongo',
      label: 'Go + MongoDB',
      desc: '在Go中使用 MongoDB Driver 连接到数据库',
      icon: 'icon-data',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/6. Go + Mongo.md')
        }
      }
    }, {
      key: 'webservice',
      label: 'Go WebService',
      desc: '使用Go创建自己的Web服务程序',
      icon: 'icon-web',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/7. Go WebService.md')
        }
      }
    }, {
      key: 'docker',
      label: 'Go + Docker',
      desc: '在Docker应用容器中，运行打包的Go Web服务程序',
      icon: 'icon-docker',
      route: {
        name: 'OnlineMarkdown',
        query: {
          doc: require('@/docs/go/8. Go + Docker.md')
        }
      }
    }]
  }
]
