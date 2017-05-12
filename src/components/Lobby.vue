<template>
  <div class="lobby">
    <mu-raised-button label="开始游戏" primary/>
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
      
    },
    handleChange: function(val){
      this.bottomNav = val
    }
  },
  created() {
    this.socket = this.$store.getters.getsocket;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
