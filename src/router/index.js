import Vue from 'vue'
import Router from 'vue-router'
import DocumentLibrary from '@/pages/DocumentLibrary'
import OnlineMarkdown from '@/pages/OnlineMarkdown'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/doc',
      name: 'OnlineMarkdown',
      component: OnlineMarkdown
    },
    {
      path: '/document-library',
      name: 'DocumentLibrary',
      component: DocumentLibrary
    },
    {
      path: '/*',
      redirect: {
        name: 'DocumentLibrary'
      }
    }
  ]
})
