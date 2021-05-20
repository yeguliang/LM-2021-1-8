import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import ElementUI, { Message } from 'element-ui';; //ui组件库
import 'element-ui/lib/theme-chalk/index.css'; //同上个一起使用

//css区域
import './assets/css/fonts/iconfont.css';
import './assets/css/base.css';
//markdown
import 'mavon-editor/dist/css/index.css'
//富文本
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(ElementUI)
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

