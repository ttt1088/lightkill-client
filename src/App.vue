<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'app',
  data() {
    return{
    }
  },
  computed: {

  },
  methods: {
    
  },
  created() {
    this.socket = io.connect('http://localhost:8081');
    this.socket.on('welcome', function(obj){
      console.log(obj);
    })
    this.$store.commit('initsocket', this.socket);
    this.$router.replace('reg');
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
    width:100%
    min-height:100%
</style>
