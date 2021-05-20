import {
  USER_INFO,
  ALL_ARTICLES,
  LOOK_ARTICLES,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  DELETE_COLLECT_ARTICLE,
  UPDATE_ARTICLE,
  GET_ARTICLE
} from './mutationType.js'
/* 邮箱正则 */
import RegExp from "utils/RegExp.js";
import Context from "utils/Context.js";

//网络请求
import {personalArticle,deleteArticles,oneArticle,updateArticles,createArticles} from 'server/personalApi.js'
import {getAllArticle} from 'server/homeApi.js'
import {login,register,repassword,getVcode} from 'server/userApi.js';
export default {
  async userLogin({commit,state},that) {
    //console.log(that);
    let res = await login({data:{name:state.loginForm.codename,psd:state.loginForm.password}})
    //console.log(res);
      if(res == "查无此人") {
        that.$message({
          message:'请确认您输入的邮箱、密码是否正确',
          type:'success'
        })
      }else {
        //将登录信息保存
        Context.setSession("token",res.token)
        Context.setSession("userInfo",res)
        let data = Context.getSession("userInfo");
        commit(USER_INFO,data)
        // 跳转路由
        that.$router.push('/home');
    }
  },
  async registerUser({commit,state},that) {
    let res = await register({data:{name:state.loginForm.codename,psd:state.loginForm.password,code:state.loginForm.vcode}})
      //console.log(res);
      if(res == "验证码错误！") {
        that.$message({
          message:'验证码不正确',
          type:'error'
        })
      }else {
        that.$message({
          message:'注册成功',
          type:'success'
      })
    }
  },
  async forgetUser({commit,state},that) {
    let res = await repassword({data:{name:state.loginForm.codename,psd:state.loginForm.password,code:state.loginForm.vcode}})
    //console.log(res);
      if(res == "验证码错误！") {
        that.$message({
          message:'验证码不正确',
          type:'error'
        })
      }else if(res == undefined) {
        that.$message({
          message:'该用户尚未注册',
          type:'error'
      })
      }else {
        that.$message({
          message:'重置密码成功',
          type:'success'
      })
    }
  },
  async vcodeUser({commit,state},that) {
    let res = await getVcode({params:{email:state.loginForm.codename}})
    if(!RegExp.emailRight.test(that.$store.state.loginForm.codename) | !RegExp.regPassWord.test(that.$store.state.loginForm.password)) {
      that.$message({
        message: '请确认您输入的邮箱是否正确',
        type: 'warning'
      })
      return;
    } else if (!that.timer) {
      that.second = state.TIME_COUNT;
      that.flag = false;
      //验证码产生
      that.$message({
        message: '发送验证码成功',
        type: 'success'
      })
      that.timer = setInterval(() => {
        if(that.second >1 && that.second <= state.TIME_COUNT) {
          that.second--
          //console.log(that.second);
          let time = that.second.toString()
          localStorage.setItem('time',time) //刷新/删除窗口，页面保存倒计时
        }else {
          that.flag = true
          clearInterval(that.timer)
          that.timer = null
          localStorage.clear('time')
        }
      },1000)
    }
  },
  async AllArticle(context) {
    var res = await getAllArticle({params:{type:''}})
    context.commit(ALL_ARTICLES,res)
  },
  async lookArticle({commit,state},that) {
    var res = await personalArticle({params: {}})
    //console.log(state.userinfo.id);
    if(state.userinfo.user_id !== 3) {
      state.imgSrc_qr_code = require('assets/image/QRcode1.jpg')
    }
    commit(LOOK_ARTICLES,res)
  },
  async getArticle(context,payload) {
    let res = await oneArticle({params: {id: payload.blogId,type:payload.type}})
    //console.log(res);
    context.commit(GET_ARTICLE,res)
  },
  async createArticle(context,info) {
    let res = createArticles({data:{title:info.title,type:info.type,des:info.des}})
    context.commit(CREATE_ARTICLE,res)
  },
  async deleteArticle(context,id) {
    var res = await deleteArticles({data: {id: id}})
    context.commit(DELETE_ARTICLE,res)
    context.dispatch("lookArticle")  //删除后调用更新页面
  },
  async deleteCollectArticle(context,id) {
    var res = await deleteArticles({data: {id: id}})
    context.commit(DELETE_COLLECT_ARTICLE,res)
    context.dispatch("AllArticle")  //删除后调用更新页面
  },
  async updateArticle(context,info) {
    let res = updateArticles({data:{id:info.id,title:info.title,type:info.type,des:info.des}})
    context.commit(UPDATE_ARTICLE,res)
  }
}