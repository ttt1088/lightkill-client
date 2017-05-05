<template>
  <div id="app">
    <mu-appbar title="Title">
    </mu-appbar>
    <mu-text-field label="名字" labelFloat v-model="username" /><br/>
    <mu-text-field label="密码" type="password" labelFloat v-model="password"/><br/>
    <mu-raised-button label="注册"  fullWidth @click="reg" primary />
    <!--<input placeholder="username" v-model="username"></br></br>
    <input placeholder="password" v-model="password"></br></br>
    <button v-on:click="login">submit</button>-->
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'app',
  data() {
    return{
      numbers: [ 1, 2, 3, 4, 5 ],
      username:null,
      password:null
  }},
  computed: {

  },
  methods: {
    reg: function(){
      this.socket.emit('reg', { name: this.username, password: this.password });
    }
  },
  created() {
    const that = this;
    this.socket = io.connect('http://localhost:8081');
    this.socket.on('welcome', function(obj){
      console.log(obj);
      that.socket.emit('my other event', { hello: 'world from client' }, function(data) {
        console.log(data);
      });
    })
  }
}
</script>

<style>
#app {
  width:100%;
}
</style>
