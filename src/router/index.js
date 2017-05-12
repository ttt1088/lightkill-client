import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
