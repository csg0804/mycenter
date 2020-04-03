import Vue from 'vue'
import App from './App'
import router from './router'
import rem from '@/rem/rem.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
