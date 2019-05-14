<template>
  <div class="markdown-view">
    <!--<div class="markdown-textview-fullscreen">
        <span class="toggle" @click="toggleFullScreen">全屏</span>
    </div>-->
    <div class="markdown-textview" :class="{ fullscreen: fullScreen }" ref="codeview" v-html="htmlCodes"></div>
  </div>
</template>
<style lang="scss" src="./MarkdownView.scss"></style>

<script>
import marked from 'marked'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      fullScreen: false
    }
  },
  methods: {
    toggleFullScreen () {
      this.fullScreen = !this.fullScreen
    },
    initNavigationTree () {
      let nodes = this.$refs.codeview.childNodes || []
      let total = nodes.length
      let nodeList = []

      // 找到所有【h1-h6】标签
      for (let i = 0; i < total; i++) {
        let node = nodes[i]
        if (node.tagName && /^H[1-6]{1}$/i.test(node.tagName)) {
          let id = encodeURIComponent(node.innerHTML)
          if (id.length < 50) {
            node.id = encodeURIComponent(node.innerHTML) // "level_" + i;
          } else {
            node.id = 'markdown_' + i
          }
          nodeList.push(node)
        }
      }

      // 遍历找到的【h1-h6】标签，生成ol
      function el (el) {
        return document.createElement(el)
      }
      function getchildNodes (currentLevel, nodeList) {
        if (nodeList.length > 0) {
          let i = 0
          while (i < nodeList.length && nodeList[i].tagName > currentLevel) {
            i++
          }
          return (nodeList).splice(0, i)
        }
        return []
      }
      function mapChilds (nodeList) {
        let rootEle = el('ul')
        while (nodeList.length > 0) {
          let hTag = nodeList[0]
          nodeList.shift()
          let item = el('li')
          let a = el('a')
          a.href = '#' + hTag.id
          a.innerHTML = hTag.innerHTML
          item.appendChild(a)

          let childs = getchildNodes(hTag.tagName, nodeList)
          if (childs && childs.length > 0) {
            item.appendChild(mapChilds(childs))
          }
          rootEle.appendChild(item)
        }
        return rootEle
      }
      let threeView = mapChilds(nodeList) // 生成具有层级结构的ol

      let navPanel = el('div')
      navPanel.className = 'markdown-nav'

      let tooglePanel = el('div')
      tooglePanel.className = 'markdown-toogle-panel'
      tooglePanel.addEventListener('click', function () {
        if (navPanel.classList.contains('hide')) {
          navPanel.classList.remove('hide')
        } else {
          navPanel.classList.add('hide')
        }
      })

      navPanel.appendChild(tooglePanel)
      navPanel.appendChild(threeView)
      this.$refs.codeview.parentElement.appendChild(navPanel)
    }
  },
  created () {
    window.hljs.initHighlightingOnLoad()
  },
  computed: {
    htmlCodes () {
      if (this.content.startsWith('<')) {
        return this.content
      }
      this.$nextTick(() => {
        /* 语法高亮 */
        let codeViews = this.$refs.codeview.getElementsByTagName('code')
        for (let i = 0; i < codeViews.length; i++) {
          window.hljs.highlightBlock(codeViews[i])
        }
        this.initNavigationTree()
      })
      // 由于目前还不支持go语言，所以将go的高亮解析先用其它的语言凑合
      return marked(this.content.replace(/\\\|/g, '&#124;').replace(/```go/g, '\n```java'))
    }
  }
}
</script>