import Vue from 'vue'
import Router from 'vue-router'
import dataShow from '@/router/modules/dataShow'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'data-show'
    },
    dataShow
  ]
})

export default router
