<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <span>登录</span>
      </div>
      <!-- 登录区域 -->
      <el-form ref="loginform" class="loginform" :model="loginForm">
        <!-- 用户名 -->
        <el-form-item prop="codename">
          <el-input v-model="loginForm.codename" prefix-icon="iconfont iconyouxiang"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont iconpass" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submit" class="login">登录</el-button>
          <div class="bottom">
            <el-button type="info" @click="switchModel(1)">注册</el-button>
            <el-button type="info" @click="switchModel(2)">重置密码</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Login',
  computed: {
    ...mapState(["loginForm"])
  },
  methods: {
    ...mapActions(["userLogin"]),
    //登录
    submit() {
      //使用that存this
      const that = this
      this.userLogin(that)
      //使用call\apply\bind
      // var fn = function() {
      //   this.userLogin(this)
      // }.call(this)
      // function fn() {
      //   this.userLogin(this)
      // }
      // fn.apply(this)  //apply
      // var obj = {
      //   show: function() {
      //     this.userLogin(this)
      //   }.bind(this)
      // }
      // obj.show(this)  //bind
    },
    //下方按钮选择 跳转至注册 or 忘记密码
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/register')
          break;
        case 2:
          this.$router.push('/forget')
          break;
      }
    },
  }
}
</script>
<style lang="less" scoped>
  .login_container {
    background-color: #f5f7fa;
    height: 100vh;
  }
  .login_box {
    width: 450px;
    height: 360px;
    background-color: #fff;
    border-radius: 3px;
    /* 外部白色盒子居中 */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    .avatar_box {
      font-size: 30px;
      margin: 20px 0;
      font-weight: 550;
      color: #333333;
      text-align: center;
    }
  }
  .login_box .loginform {
    position: absolute;
    bottom: 30px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .btns .login{
    width: 100%;
  }
  .btns .bottom {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>