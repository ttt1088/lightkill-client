import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    socket: {}
  },
  getters: {
    getsocket: state => state.socket
  },
  mutations: {
    initsocket(state, data) {
        state.socket = data;
    }
  },
  actions: {

  }
})
export default store