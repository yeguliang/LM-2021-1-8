
//导入组件路由
const Login = () => import('views/login/Login.vue')
const Register = () => import('views/register/Register.vue')
const Forget = () => import('views/forget/Forget.vue')

const Home = () => import('views/home/Home.vue')
const Host = () => import('views/host/Host.vue')
const Current = () => import('views/search/Current.vue')
const About = () => import('views/about/About.vue')

//home页文章详情
const ArticleDetail = () => import('views/home/homechild/ArticleDetail.vue')
//host页文章详情
const DetailArticle = () => import('views/host/hostchild/DetailArticle.vue')
//关于个人页面管理
const First = () => import('components/content/personalarticle/First.vue')
const Detail = () => import('components/content/personalarticle/Detail.vue')
const Add = () => import('components/content/personalarticle/Add.vue')
const Edit = () => import('components/content/personalarticle/Edit.vue')
//发现页管理
const itemFirst = () => import('views/search/currentchild/itemFirst.vue')
const itemSecond = () => import('views/search/currentchild/itemSecond.vue')
const itemThree = () => import('views/search/currentchild/itemThree.vue')
const itemFour = () => import('views/search/currentchild/itemFour.vue')
const itemFive = () => import('views/search/currentchild/itemFive.vue')
const itemSix = () => import('views/search/currentchild/itemSix.vue')
const itemSeven = () => import('views/search/currentchild/itemSeven.vue')
const itemEight = () => import('views/search/currentchild/itemEight.vue')

export const routes = [
  {
    path: '/',
    redirect: '/login'
  }, 
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component:Register
  },
  {
    path: '/forget',
    component:Forget
  },
  {
    path: '/home',
    meta: {
      requireAuth:true //判断是否需要登录
    },
    component:Home,
  },
  {
    path:'/articledetail/:id',
    name:'articledetail',
    component:ArticleDetail
  },
  {
    path: '/host',
    meta: {
      requireAuth:true //判断是否需要登录
    },
    component:Host,
  },
  {
    path:'/detailarticle/:type/:id',
    name:'detailarticle',
    component:DetailArticle
  },
  {
    path: '/current',
    meta: {
      requireAuth:true //判断是否需要登录
    },
    component:Current
  },
  {
    path:'/first',
    meta: {
      requireAuth:true //判断是否需要登录
    },
    component:First
  },
  {
    path:'/add',
    component:Add
  },
  {
    path:'/detail/:type/:id',
    name:'detail',
    component:Detail
  },
  {
    path: '/about',
    meta: {
      requireAuth:true //判断是否需要登录
    },
    component:About,
  },
  {
    path:'/edit/:type/:id',
    name:'edit',
    component:Edit
  },
  {
    path:'/current/itemFirst',
    component:itemFirst
  },
  {
    path:'/current/itemSecond',
    component:itemSecond
  },
  {
    path:'/current/itemThree',
    component:itemThree
  },
  {
    path:'/current/itemFour',
    component:itemFour
  },
  {
    path:'/current/itemFive',
    component:itemFive
  },
  {
    path:'/current/itemSix',
    component:itemSix
  },
  {
    path:'/current/itemSeven',
    component:itemSeven
  },
  {
    path:'/current/itemEight',
    component:itemEight
  }
]