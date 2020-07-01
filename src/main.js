import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { dateFormat } from '@/util'

Vue.config.productionTip = false

Vue.filter('dateFormat', (value, pattern = 'yyyy-MM-dd HH:mm:ss') => dateFormat(value, pattern))
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
