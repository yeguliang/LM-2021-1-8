<template>
  <div class="page">
    <div class="input-box">
      <div class="title">登录</div>
      <el-input
        v-model="ObjInput.email"
        type="text"
        :class="{ borred:true }"
        placeholder="请输入您的邮箱"
      ></el-input>
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="密码"
      ></el-input>
      <el-button type="primary" @click="submit" class="register">{{getStatusButton}}</el-button>
      <div class="bottom">
        <el-button type="info" @click="switchModel(1)">注册</el-button>
        <el-button type="info" @click="switchModel(2)">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import RegExp_ from "@/utils/RegExp_";
import { register, login, getEmailCode } from "@/server/userApi";
import tools from '@/utils/tools';
import Storage from '@/utils/storage';
export default {
  components: {
  },
  data() {
    return {
      ObjInput: {
        email: "",
        emailreg: false,
        pas: "",
      },
      status: 0,
    };
  },
  methods: {
    async submit() {
      if (!this.ObjInput.email || !this.ObjInput.pas ||!this.ObjInput.emailreg ) {
        this.$message({
          message: "请确认您的邮箱、密码",
          type: "warning",
        });
        return
      } 
      let password = tools.time33Hash(this.ObjInput.pas)
      let userInfo = await login({data:{username:this.ObjInput.email,password}})
      if(userInfo.ok === 1){
        Storage.setStorage('token',userInfo.data.token)
        this.$router.push('/home')
      }
      // console.log(userInfo)
    },
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push('/register')
          break;
        case 2:
          this.$router.push('/pas')
          break;
      }
    },
  },
  mounted() {
    // let toke = Storage.getStorage('token')
    // console.log("=>login",toke)
  },
  updated() {
    // this.status = this.$router.history.current.params.id
    // console.log("=>",this.$router.history.current.params.id)
  },
  watch: {
    ObjInput: {
      // 数据变化时执行的逻辑代码
      handler(newData, oldData) {
        if (RegExp_.regEmale.test(this.ObjInput.email)) {
          this.ObjInput.emailreg = true;
        } else {
          this.ObjInput.emailreg = false;
        }
      },
      deep: true,
    },
  },
  computed: {
    // 计算属性的 getter
    getStatusButton: function () {
      let button = "";
      switch (this.status) {
        case 0:
          button = "登录";
          break;
        case 1:
          button = !this.ObjInput.code ? "获取邮件码" : "注册";
          break;
        case 2:
          button = !this.ObjInput.code ? "获取邮件码" : "修改密码";
          break;
      }
      return button;
    },
  },
};
</script>

<style lang='less'>
.el-input {
  margin-top: 20px;
}
@import "./index.less";
</style>