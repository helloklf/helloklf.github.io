<template>
  <div>
    <markdown-view :content="markdownContent" />
  </div>
</template>
<script>
import axios from 'axios'
import MarkdownView from '@/components/MarkdownView/MarkdownView.vue'
export default {
  data () {
    return {
      markdownContent: '正在加载文档....'
    }
  },
  components: {
    MarkdownView
  },
  watch: {
    $route (route) {
      if (route.params.doc !== undefined || route.query.doc !== undefined) {
        this.markdownContent = '正在加载文档....'
        this.loadDoc(route.params.doc || route.query.doc)
      } else if (this.$router) {
        this.$router.back()
      }
    }
  },
  methods: {
    loadDoc (url) {
      if (url.length > 4096) {
        this.markdownContent = url
        return
      }
      axios.get(`${url}`).then((r) => {
        this.markdownContent = r.data
      }).catch((error) => {
        this.markdownContent = '## 内容加载失败： \n\n``` javascript\n' + JSON.stringify(error, null, 22) + ' \n\n```'
      })
    }
  },
  created () {
    if (this.$route.params.doc !== undefined || this.$route.query.doc !== undefined) {
      this.loadDoc(this.$route.params.doc || this.$route.query.doc)
    } else if (this.$router) {
      this.$router.back()
    }
  }
}
</script>