<template>
  <div class="lobby">
    <div class="searchgame">
      <mu-raised-button label="开始游戏" primary fullWidth/>
    </div>
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
.lobby
  height: 100%
.searchgame
    width:80%;
    margin: 0 auto;
</style>
