import Vue from 'vue'
import MoneyView from '../../../src/components/MoneyView.vue'

module.exports = {
  testA: function(browser) {
    const Constructor = Vue.extend(MoneyView)
    const vm = new Constructor().$mount()
    console.log(vm)
  }
}