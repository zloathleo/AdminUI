import Vue from 'vue';
import Vuex from 'vuex';

import mem from './vuex/mem';
import store from './vuex/store';
import MyFetch from './common/MyFetch';
import Tools from './common/Tools';
import router from './router';

import Root from './Root.vue';
import './assets/css/custom.css';

Vue.config.productionTip = false;

toastr.options.closeButton = true;
toastr.options.positionClass = "toast-top-center";
toastr.options.timeOut = 3000;
toastr.options.extendedTimeOut = 1000;

MyFetch.store = store;

store.state.serverConnected = false;

// 全局钩子
router.afterEach((to, from) => {
  store.commit('changeRouteName', [from.name, to.name]);
});

Vue.prototype.$myfetch = MyFetch;
Vue.prototype.$tools = Tools;
Vue.prototype.$mem = mem;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue();

new Vue({
  el: '#root',
  router,
  store,
  components: { 'root': Root }
});
