<template>
  <div class="main">
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="bottom">
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
          <mu-bottom-nav-item value="lobby" title="大厅" icon="home" to="lobby"/>
          <mu-bottom-nav-item value="watch" title="观战" icon="videocam" to="watch"/>
          <mu-bottom-nav-item value="setting" title="我的" icon="face" to="setting"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'app',
  data() {
    return{
      bottomNav: 'lobby'
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
    this.$router.replace('main/lobby');
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.main
  height:100%
  width:100%
  position:absolute
.main-content
  width:100%
  height:100%
  position:fiexd
.bottom
  position:fixed
  bottom:0
  width:100%
</style>
