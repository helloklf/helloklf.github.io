<template>
  <div class="markdown-online-editer" :class='{ preview: preview }'>
    <markdown-edit v-model="markdownContent"></markdown-edit>
    <markdown-view :content='markdownContent' />
    <span class="toggle-preview" @click="togglePreview">H</span>
  </div>
</template>
<style lang='scss'>
.markdown-online-editer {
  height: 100%;
  .markdown-view,
  .markdown-edit{
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  @media screen and (max-width: 1023px) {
    .markdown-view,
    .markdown-edit{
      width: 100%;
    }
    &:not(.preview) {
      .markdown-view{
        display: none;
      }
    }
    &.preview {
      .markdown-edit{
        display: none;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .markdown-view,
    .markdown-edit{
      box-sizing: border-box;
      width: 50%;
      float: left;
    }
    .markdown-edit {
      border: 1px solid #eee;
      border-width: 0 1px 0 1em;
    }
    .toggle-preview{
      display: none;
    }
  }
  .toggle-preview {
    position: fixed;
    bottom: 1em;
    right: 2em;
    height: 2em;
    width: 2em;
    display: inline-block;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0 0 1px #888;
    background: #fff;
    text-align: center;
    line-height: 2em;
    z-index: 5;
  }
}
</style>

<script>
import MarkdownView from '../components/MarkdownView/MarkdownView.vue'
import MarkdownEdit from '../components/MarkdownEdit.vue'
export default {
  data () {
    return {
      preview: false,
      markdownContent: ''
    }
  },
  methods: {
    togglePreview () {
      this.preview = !this.preview
    }
  },
  components: {
    'markdown-view': MarkdownView,
    'markdown-edit': MarkdownEdit
  }
}
</script>
