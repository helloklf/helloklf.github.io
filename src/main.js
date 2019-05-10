// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TouchButton from '@/components/TouchButton'
import TouchBlock from '@/components/TouchBlock'

Vue.config.productionTip = false
Vue.component('touch-block', TouchBlock)
Vue.component('touch-button', TouchButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
