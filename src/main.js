import Vue from 'vue'
import App from './App'
import router from './router'
import { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
