import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Lobby from '@/components/Lobby'

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
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'lobby',
          component: Lobby
        }
      ]
    }
  ]
})
