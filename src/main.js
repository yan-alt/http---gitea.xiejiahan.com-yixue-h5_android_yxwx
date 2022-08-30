
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import http from './http/index'
import './directive' //自定义指令
import {roomPath} from './utils/room' //根
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
return originalPush.call(this, location).catch(err => err)
}

//视图导入

import memory from './view/memory.vue'
import Pi40 from './view/Pi4o/Pi40.vue'
import Pi40Test from './view/Pi4o/Pi40-test.vue'
import vocabulary25 from './view/vocabulary25/vocabulary25.vue'
import vocabulary25Test from './view/vocabulary25/vocabulary25-test.vue'

// const Pi40 = r => require.ensure([], () => r(require('./view/Pi40.vue')), 'Pi')
//引入vant组件库
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);
//使用路由
Vue.use(VueRouter);
//定义路由
//创建 router 实例
const  router = new VueRouter({
  mode: "history", //去掉地址栏的#  隐藏则为hash模式
  routes : [
    { path: `/memory`, component: memory },
    { path: `/Pi40`, component: Pi40 },
    { path: `/Pi40-test`, component: Pi40Test },
    { path: `/vocabulary25`, component: vocabulary25 },
    { path: `/vocabulary25-test`, component: vocabulary25Test },
  ]
})



Vue.config.productionTip = false
Vue.prototype.$roomPath = roomPath
Vue.prototype.$http = http.service;
Vue.prototype.$api = http.API;
Vue.prototype.$BASE = http.BASE_URL;
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
