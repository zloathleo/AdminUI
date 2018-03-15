// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

import store from './vuex/store';
import Root from './Root.vue';
import router from './router';

import MyFetch from './common/MyFetch';
import Tools from './common/Tools';

import './assets/css/custom.css';

Vue.use(Vuex);
MyFetch.vuexStore = store;
Vue.prototype.$myfetch = MyFetch;
Vue.prototype.$tools = Tools;

Vue.config.productionTip = false;

toastr.options.positionClass = "toast-bottom-center";
toastr.options.timeOut = 3000;
toastr.options.extendedTimeOut = 1000;

// 全局钩子
router.beforeEach((to, from, next) => {
  store.state.lastRouteName = from.name;
  store.state.currentRouteName = to.name;
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  components: { 'root': Root }
})

