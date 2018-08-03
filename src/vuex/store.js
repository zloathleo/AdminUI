import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    // 定义状态
    state: {
        // serverhost: 'http://192.168.1.67:80', 
        serverhost: 'http://localhost:80', 
        lastRouteName: '/',
        currentRouteName: '/',

        currentDeviceName: undefined,

    },
    mutations: {
        changeServerHost(state, value) {
            state.serverhost = value;
        },
  

        changeRouteName(state, routeNames) {
            state.lastRouteName = routeNames[0];
            state.currentRouteName = routeNames[1];
        },

        changeDeviceName(state, value) {
            state.currentDeviceName = value;
        },
    }
}) 