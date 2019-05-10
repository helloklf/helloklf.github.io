<template>
  <div class="markdown-edit">
    <div class="toolsbar">
      <span class="icon-save" title="保存" @click="backup"></span>
      <span class="icon-laod" title="还原" @click="restore"></span>
      <span class="icon-download" title="下载" @click="saveFile"></span>
    </div>
    <input placeholder="文件名" v-model="markdownTitle" maxlength="50" />
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
    height: 3.5em;
    border-bottom: 1px solid #eee;
    >* {
      display: block;
      float: left;
      width: 4em;
      height: 100%;
      padding: 0;
      text-align: center;
      cursor: pointer;
      background-position: center;
      background-size: 45%;
      background-repeat: no-repeat;
      &.icon-save {
        background-image: url('../assets/icons/save.png');
      }
      &.icon-laod {
        background-image: url('../assets/icons/restore.png');
      }
      &.icon-download {
        background-image: url('../assets/icons/download.png');
      }
    }
    >*:active {
      background-color: #ddd;
    }
    >*:not(:last-child) {
      border-right: 1px solid #eee;
    }
  }
  input {
    border: none;
    padding: 0.5em;
    background-color: #f8f8f8;
    text-align: center;
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
import { saveAs } from 'file-saver'
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
    if (localStorage['markdownTitle'] != null) {
      this.markdownTitle = localStorage['markdownTitle']
    }
  },
  data () {
    return {
      markdownContent: this.content || '',
      markdownTitle: ''
    }
  },
  methods: {
    backup () {
      localStorage['markdownContent_backup'] = this.markdownContent
      localStorage['markdownTitle_backup'] = this.markdownTitle
    },
    restore () {
      this.markdownContent = localStorage['markdownContent_backup'] || ''
      this.markdownTitle = localStorage['markdownTitle_backup'] || ''
    },
    saveFile () {
      const blob = new Blob([ this.markdownContent ], {type: 'text/plain;charset=utf-8'})
      /* eslint-disable */
      saveAs(blob, (this.markdownTitle || 'Markdown').replace(/[\\s\\\\/:\\*\\?\\\"<>\\|]/g, '') + '.md')
    }
  },
  watch: {
    content () {
      this.markdownContent = this.content
    },
    markdownContent (content) {
      localStorage['markdownContent'] = content
      this.$emit('input', this.markdownContent)
    },
    markdownTitle (title) {
      localStorage['markdownTitle'] = title
    }
  }
}
</script>
