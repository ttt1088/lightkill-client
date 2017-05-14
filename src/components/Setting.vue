<template>
    <div>
        <div class="content">
            <mu-list>
                <mu-list-item title="个人资料">
                </mu-list-item>
                <mu-list-item title="游戏记录">
                </mu-list-item>
                <mu-list-item title="设置">
                </mu-list-item>
                <mu-list-item title="关于">
                </mu-list-item>
            </mu-list>
        </div>
        <div class="logout">
            <mu-raised-button @click="logout" label="退出" class="demo-raised-button" fullWidth/>
        </div>
        <div style="height:80px"></div>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  data() {
    return{

  }},
  computed: {

  },
  methods: {
    logout: function(){
      const that = this;
      this.socket.emit('logout', {}, function(data) {
        console.log(data);
        if(data.errno == 0){
          that.$router.replace('/login');
        }
      });
    }
  },
  created() {
    this.socket = this.$store.getters.getsocket;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.logout
    width:80%
    margin: 0 auto;
</style>
