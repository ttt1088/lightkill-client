<template>
  <div class="reg">
    <mu-appbar title="LightKill">
    </mu-appbar>
    <div class="content">
      <mu-text-field label="名字" labelFloat v-model="username" /><br/>
      <mu-text-field label="密码" type="password" labelFloat v-model="password"/><br/>
      <mu-flat-button label="已有账号？点击登录" @click="gotoLogin"/><br/><br/>
      <mu-raised-button label="注册" fullWidth @click="reg" primary />
    </div>
    <mu-dialog :open="dialog" title="提示">
      {{ dialogMessage }}
    <mu-flat-button label="确定" slot="actions" primary @click="dialogClose"/>
    </mu-dialog>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'app',
  data() {
    return{
      username:'',
      password:'',
      dialog: false,
      dialogMessage:''
  }},
  computed: {

  },
  methods: {
    reg: function(){
      const that = this;
      this.socket.emit('reg', { name: this.username, password: this.password }, function(data) {
        console.log(data);
        if(data.errno == 0){
          that.dialog = true;
          that.dialogMessage = '注册成功';
        }
        else if(data.errno == 1){
          that.dialog = true;
          that.dialogMessage = '注册失败：未知错误';
        }
        else if(data.errno == 2){
          that.dialog = true;
          that.dialogMessage = '注册失败：用户名已存在';
        }
        else if(data.errno == 3){
          that.dialog = true;
          that.dialogMessage = '注册失败：用户名或密码格式错误';
        }
      });
    },
    dialogClose: function(){
      this.dialog = false;
    },
    gotoLogin: function(){
      this.$router.replace('login');
    }
  },
  created() {
    this.socket = this.$store.getters.getsocket;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.reg
        position: absolute
        left:0
        right:0
        top:0
        bottom:0
        background:#fff
.mu-appbar
    text-align: center
.content
    width:80%;
    margin:20px auto;
    .mu-text-field
        width:100%
</style>
