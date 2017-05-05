import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
//import VueWebsocket from "vue-websocket";

Vue.use(Router)
//Vue.use(VueWebsocket, "ws://localhost:80");

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
