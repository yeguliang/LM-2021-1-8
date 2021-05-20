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
import Context from "utils/Context.js";

export default {
  [USER_INFO](state,data) {
    state.userinfo = data
  },
  loginout(state) {
    Context.clear();
    state.userinfo = {};
    state.token = null
  },
  [ALL_ARTICLES](state,res) {
    state.article = res
  },
  [LOOK_ARTICLES](state,res) {
    state.personalarticle = res
  },
  [CREATE_ARTICLE](state,res) {
    if(res.data === '参数错误!') return this.$message.error('添加文章失败')
  },
  [DELETE_ARTICLE](state,id) {
    window.sessionStorage.removeItem(id);
  },
  [DELETE_COLLECT_ARTICLE](state,id) {
    window.sessionStorage.removeItem(id);
  },
  [UPDATE_ARTICLE](state,res) {
    if(res.data === '参数错误!') return this.$message.error('更新文章失败')
  },
  [GET_ARTICLE](state,res) {
    //console.log(res);
    state.ruleForm.id = res.id
    state.ruleForm.title = res.title
    state.ruleForm.des = res.des
    state.ruleForm.type = res.type
    state.ruleForm.create_at = res.create_at
    state.ruleForm.updata_at = res.updata_at
    state.ruleForm.user_id = res.user_id
    state.ruleForm.user_info = res.user_info
  }
  
}