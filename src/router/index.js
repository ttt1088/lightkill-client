import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Lobby from '@/components/Lobby'
import Watch from '@/components/Watch'
import Setting from '@/components/Setting'

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
        },
        {
          path: 'watch',
          component: Watch
        },
        {
          path: 'setting',
          component: Setting
        }
      ]
    }
  ]
})
