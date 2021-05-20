<template>
  <div id="nav-bar">
    <div id="nav">
      <div class="logo">
        <span>Blog Web</span>
      </div>
      <div class="li">
        <router-link to="/home">Home</router-link>
        <router-link to="/host">Host</router-link>
        <router-link to="/current">Search</router-link>
        <router-link to="/about">About</router-link>
        <!-- <router-link to="/login" @click="logout">退出登录</router-link> -->
        <a @click="logout">退出登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavBar',
  data(){
    return{
      scrollTop:0
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods: {
    logout() {
      //退出登录，删除用户信息
      this.$store.commit("loginout")
      this.$router.push('/login')
    }
  }
}
</script>

<style>
#nav-bar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px 400px 20px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
}
.logo span{
  display: inline-block;
  margin-left: 0;
  font-weight: bold;
  color:  #42b983;
}
#nav .li{
  margin-right: 15px;
}
#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
  margin-top: 50px;
  height: 40px;
  text-align: center;
  font-size: 14px;
}
</style>