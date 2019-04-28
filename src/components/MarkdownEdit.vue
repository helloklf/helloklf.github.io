<template>
  <div class="markdown-edit">
    <div class="toolsbar">
      <span>H</span>
      <span>I</span>
      <span>B</span>
      <span>U</span>
      <span></span>
      <span></span>
    </div>
    <textarea v-model="markdownContent" placeholder="输入内容..."></textarea>
    <div class="online-edit">
      <a href="https://dillinger.io/" target="_blank">推荐使用在线编辑器：https://dillinger.io/</a>
    </div>
  </div>
</template>
<style lang='scss'>
.markdown-edit {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .toolsbar {
    height: 3em;
    border-bottom: 1px solid #eee;
    display: none;
    >* {
      display: block;
      float: left;
      width: 3em;
      line-height: 3em;
      text-align: center;
      cursor: pointer;
    }
    >*:active {
      background: #ddd;
    }
    >*:not(:last-child) {
      border-right: 1px solid #eee;
    }
  }
  textarea {
    border: none;
    resize: none;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
    display: block;
    width: 100%;
    padding: 0.5em 1em 0.5em 0.2em;
    font-size: 14px;
    line-height: 1.4em;
    flex: 1;
    color: #444;
  }
  .online-edit {
    border-top: 1px solid #eee;
    padding: 0.5em;
    font-size: 0.8em;
    a {
      text-decoration: none;
      color: darkcyan;
    }
  }
}
</style>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    created () {
      if (localStorage['markdownContent'] != null) {
        this.markdownContent = localStorage['markdownContent']
      }
    },
    data () {
      return {
        markdownContent: this.content
      }
    },
    watch: {
      content () {
        this.markdownContent = this.content
      },
      markdownContent (content) {
        localStorage['markdownContent'] = content
        this.$emit('input', this.markdownContent)
      }
    }
  }
</script>
