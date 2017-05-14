<template>
  <div class="watch">
    观战
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data() {
    return{
      bottomNav: 'recents'
  }},
  computed: {

  },
  methods: {
    reg: function(){
      
    }
  },
  created() {
    this.socket = this.$store.getters.getsocket;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.watch
  text-align: center;
</style>
