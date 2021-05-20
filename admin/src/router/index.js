import Vue from 'vue'
import VueRouter from 'vue-router'
import Context from "utils/Context.js";

Vue.use(VueRouter)

const router = new VueRouter({
  routes:require('./route').routes
  //mode: 'history'
})

//afterEach进入组件之后
router.afterEach((to, from) => {
  if (to.meta.title) {
    //当进入了组件后，如果meta里有title就设置title(注意，这个位置document前面需要加上window才能访问)
    window.document.title = to.meta.title;
    //console.log(from)
  }else {
    window.document.title = 'PersonalBlog'
  }
})

router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requireAuth)) { //判断该路由是否有登录权限
    if(Context.getSession("token")) { //判断是否存在token
      next(); //存在 next
    }else {
      next({
        path:'/',
        query:{
          redirect:to.fullPath
        }
      })
    }
  }else {
    next();
  }
})

//导出
export default router