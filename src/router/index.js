import Vue from 'vue'
import Router from 'vue-router'
import MarkdownOnlineEdit from '@/pages/MarkdownOnlineEdit'
import DocumentLibrary from '@/pages/DocumentLibrary'
import Home from '@/pages/Home'
import About from '@/pages/About'
import OpenSource from '@/pages/OpenSource'
import OnlineMarkdown from '@/pages/OnlineMarkdown'
import UIDesign from '@/pages/UIDesign'
import Apps from '@/pages/Apps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/vue/test/e2e',
      name: 'OnlineMarkdown',
      component: OnlineMarkdown
    },
    {
      path: '/document-library',
      name: 'DocumentLibrary',
      component: DocumentLibrary
    },
    {
      path: '/ui-design',
      name: 'UIDesign',
      component: UIDesign
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/open-source-project',
      name: 'OpenSource',
      component: OpenSource
    },
    {
      path: '/helloklf-github-io',
      name: 'Home',
      component: Home
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/*',
      name: 'MarkdownOnlineEdit',
      component: MarkdownOnlineEdit
    }
  ]
})
