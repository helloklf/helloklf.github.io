<template>
  <div>
    <!--<div class="markdown-textview-fullscreen">
        <span class="toggle" @click="toggleFullScreen">全屏</span>
    </div>-->
    <div class="markdown-textview" :class="{ fullscreen: fullScreen }" ref="codeview" v-html="htmlCodes"></div>
  </div>
</template>
<style lang="scss">
.markdown-textview-fullscreen {
    text-align: right;
    margin: 2em 1em;
    .toggle {
        display: inline-block;
        border: 1px solid #eee;
        color: #888;
        background: #fff;
        line-height: 2em;
        padding: 0 0.5em;
        cursor: pointer;
        border-radius: 0.3em;
        &:hover {
            background: #ddd;
        }
    }
}
.markdown-textview{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.6em;
    /*
    background-color: #fafafa;
    border: 1px solid #eee;
    */
    border-radius: 0.5em; 
    padding: 1em;
    font-size: 14px;
    box-sizing: border-box;
    word-break: break-all;
    word-wrap: normal;
    white-space: wrap;
    color: #555;

    img {
        display: inline-block;
        height: auto;
        width: auto;
    }
    * {
        max-width: 100%;
        vertical-align: middle;
        &::selection {
            background: red;
            color: #fff;
        }
    }
    hr {
        margin: 1.5em 0;
        color: #cccccc;
        background: #cccccc;
        border-color: #cccccc;
        border-width: 0 !important;
        height: 1px;
        outline: none;
        box-shadow: none;
    }
    a[href] {
        color: #0094ff;
        text-decoration: none;
    }
    blockquote {
        border-left: 0.3em solid #0094ff;
        margin-left: 0;
        padding-left: 1em;
        margin-right: 0;
        padding-right: 0.5em;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0.5em 0;
        &:not(:first-child) {
            margin-top: 15px;
        }
    }
    b {
        font-weight: 900;
    }
    cite,
    small {
        font-size: 0.7em;
        color: #888;
    }
    ul,ol {
        margin: 0;
        padding-left: 2em;
        li {
            font-size: 0.9em;
            line-height: 1.2em;
        }
        li:not(:last-child){
            margin-bottom: 0.5em;
        }
    }
    code {
        background: #f8f8f8;
        padding: 0.5em;
        border-radius: 0.5em;
        border: 1px solid #ddd; 
        display: inline-block;
        max-width: 100%;
        font-size: 13px;
        white-space: pre-wrap;
        text-align: left;
        line-height: 1.4em;
        font-family: 'SourceCode Pro';
        overflow-x: hidden;
        word-wrap: normal;
        
        * {
            vertical-align: top;
        }
    }
    p:last-child {
        margin-bottom: 0;
    }
    table {
        border-collapse: collapse;
        font-size: 0.85em;
        tr:nth-child(2n) {
            background-color: #fff; 
        }
        td {
            padding: 0.5em;
            border: 1px solid #ccc;
            border-spacing: 0;
        }
    }
}
/*
.markdown-textview::before{
    content: 'html/markdown';
    color: #888;
    font-style: italic;
    font-size: 0.75em;
    margin-top: -0.6em;
    margin-bottom: 1em;
    display: block; 
}
*/
@media screen and (max-width: 799px){
    .markdown-textview-fullscreen {
        display: none;
    }
}
@media screen and (min-width: 960px){
    .markdown-textview{
        background: #fafafa;
        border: 1px solid #eee;
        &:not(.fullscreen) {
            max-width: 960px;
            margin: 0 auto;
            /*margin: 2em auto;*/
        }
    }
}
</style>

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
      })
      return marked(this.content)
    }
  }
}
</script>