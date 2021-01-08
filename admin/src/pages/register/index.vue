<template>
  <div class="page">
    <div class="input-box">
      <div class="title">注册</div>
      <el-input
        v-model="ObjInput.email"
        input="regEmail"
        type="email"
        :class="{borred:true}"
        placeholder="邮箱地址"
      ></el-input>
      <el-input
      
        v-model="ObjInput.code"
        type="text"
        :disabled="!showCode"
        :class="{borred:true}"
        placeholder="邮箱验证码"
      ></el-input>
      <!-- <el-input v-model="ObjInput.name" type="text" :class="{ borred:true }" placeholder="用户名"></el-input> -->
      <el-input
        v-model="ObjInput.pas"
        show-password
        type="password"
        :class="{ borred:true }"
        placeholder="密码"
      ></el-input>
      <div class="reg">
        <el-input
          v-model="ObjInput.reg"
          type="text"
          style="margin-top:0"
          :class="{ borred:true }"
          placeholder="验证码"
        ></el-input>
        <div class="coderight" @click="refreshCode">
          <SIdentify :identifyCode="identifyCode"></SIdentify>
        </div>
      </div>
      <el-button type="primary" @click="submit" class="register">{{getStatusButton}}</el-button>
      <div class="bottom">
        <el-button type="info" @click="switchModel(1)">登录</el-button>
        <el-button type="info" @click="switchModel(2)">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import SIdentify from "@/components/canvasCode";
import RegExp_ from "@/utils/RegExp_";
import tools from '@/utils/tools';

import { register, login, getEmailCode } from "@/server/userApi";

export default {
  components: {
    SIdentify,
  },
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      ObjInput: {
        email: "",
        emailreg: false,
        name: "",
        pas: "",
        reg: "",
        reg_: false,
        code: "",
      },
      showCode: false, //邮箱验证码输入
    };
  },

  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      // console.log(this.identifyCode);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      // console.log(this.identifyCode);
    },
    switchModel(event) {
      switch (event) {
        case 1:
          this.$router.push("/login");
          break;
        case 2:
          this.$router.push("/pas");
          break;
      }
    },
    async submit() {
      if (!this.showCode) {
        if (
          !this.ObjInput.email ||
          !this.ObjInput.emailreg ||
          !this.ObjInput.reg_ ||
          !this.ObjInput.reg
        ) {
          this.$message({
            message: "请确认您的邮箱，验证码是否正确！",
            type: "warning",
          });
          return;
        }
        let code = await getEmailCode({ data: { email: this.ObjInput.email } });
        if (code.ok === 1) {
          this.showCode = true;
        }
      }else{
        if (
          !this.ObjInput.email ||
          !this.ObjInput.emailreg ||
          !this.ObjInput.pas ||
          !this.ObjInput.code || this.ObjInput.code.length !== 6
        ) {
          this.$message({
            message: "请确认您的邮箱验证码、邮箱、密码是否正确！",
            type: "warning",
          });
          return;
        }
        // console.log('=>password',password)
        let password = tools.time33Hash(this.ObjInput.pas)
        // console.log('=>password',password)
        let userInfo = await register({data:{username:this.ObjInput.email,password,code:this.ObjInput.code}})
        if(userInfo.ok === 1){
          this.$router.push('/login')
        }
      }
    },
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  updated() {},
  watch: {
    ObjInput: {
      // 数据变化时执行的逻辑代码
      handler(newData, oldData) {
        // console.log(newData, oldData,RegExp_)
        if (RegExp_.regEmale.test(this.ObjInput.email)) {
          this.ObjInput.emailreg = true;
        } else {
          this.ObjInput.emailreg = false;
        }
        if (this.identifyCode === this.ObjInput.reg) {
          this.ObjInput.reg_ = true;
        } else {
          this.ObjInput.reg_ = false;
        }
      },
      deep: true,
    },
  },
  computed: {
    // 计算属性的 getter
    getStatusButton: function () {
      let button = "";
      button = !this.showCode ? "获取邮件码" : "注册";
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