export default [
  {
    group: 'PIO(Kr-Script)3.9.1',
    type: 'PIO',
    docs: [
      {
        key: 'docs-pio-index',
        label: '目录',
        desc: 'PIO文档目录',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Index.md')
          }
        }
      }
    ]
  },
  {
    group: '功能节点',
    type: 'XML',
    docs: [
      {
        key: 'docs-pio-Action',
        label: 'Action',
        desc: 'Action是PIO里最复杂也是最强大的功能节点',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Action.md')
          }
        }
      },
      {
        key: 'docs-pio-Switch',
        label: 'Switch',
        desc: '开关组件',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Switch.md')
          }
        }
      },
      {
        key: 'docs-pio-Picker',
        label: 'Picker',
        desc: '下拉选择组件',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Picker.md')
          }
        }
      }
    ]
  },
  {
    group: '包装节点',
    type: 'XML',
    docs: [
      {
        key: 'docs-pio-Group',
        label: 'Group',
        desc: '为你的功能分组',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Group.md')
          }
        }
      },
      {
        key: 'docs-pio-Page',
        label: 'Page',
        desc: '将你的功能拆分成多个页面',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Page.md')
          }
        }
      },
      {
        key: 'docs-pio-Text',
        label: 'Text',
        desc: '显示色彩丰富的文字',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Text.md')
          }
        }
      }
    ]
  },
  {
    group: '资源文件',
    type: 'RES',
    docs: [
      {
        key: 'docs-pio-Resource',
        label: 'Resource',
        desc: '静态资源文件',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Resource.md')
          }
        }
      },
      {
        key: 'docs-pio-Script',
        label: 'Script',
        desc: '脚本文件',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Script.md')
          }
        }
      }
    ]
  },
  {
    group: '额外说明',
    type: 'EXT',
    docs: [
      {
        key: 'docs-pio-Property_Visible',
        label: 'visible属性',
        desc: '你可以通过visible配置一段脚本，用来动态设置功能是否可以在当前设备上显示',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Property_Visible.md')
          }
        }
      },
      {
        key: 'docs-pio-entrance',
        label: 'kr-script.conf',
        desc: '启动入口和基础配置',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/kr-script.conf.md')
          }
        }
      },
      {
        key: 'docs-pio-path',
        label: 'Path',
        desc: '资源文件路径和匹配逻辑',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Path.md')
          }
        }
      },
      {
        key: 'docs-pio-Extra',
        label: '额外拓展',
        desc: '这是在PIO里的一些特殊用法，它不属于Linux Shell的常规用法',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Extra.md')
          }
        }
      },
      {
        key: 'docs-pio-Other',
        label: 'Other',
        desc: '其它技巧和非必要了解的说明',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/Other.md')
          }
        }
      }
    ]
  },
  {
    group: '网页引擎',
    type: 'JS',
    docs: [
      {
        key: 'docs-pio-WebBrowser',
        label: 'KrScriptCore',
        desc: '使用网页开发和调用PIO的接口执行shell命令',
        route: {
          name: 'OnlineMarkdown',
          query: {
            doc: ('file:///android_asset/docs/js-engine/WebBrowser.md')
          }
        }
      }
    ]
  }
]
