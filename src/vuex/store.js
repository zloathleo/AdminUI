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
        serverhost: 'http://192.168.1.142:80',
        serverConnected: false,
        isLogin: true,

        lastRouteName: '/',
        currentRouteName: '/',

        currentProduct: undefined,
        currentDeviceName: undefined,
        apiLoading: {
            status: 0,//0=noloading ,1=loading ,-1=error
            loadingMessage: undefined,
            url: undefined,
        },
    },
    mutations: {
        changeServerhost(state, value) {
            state.serverhost = value;
        },
        changeServerConnected(state, value) {
            state.serverConnected = value;
        },
        changeLogin(state, value) {
            state.isLogin = value;
        },

        changeRouteName(state, routeNames) { 
            state.lastRouteName = routeNames[0];
            state.currentRouteName = routeNames[1];
        },

        changeCurrentProduct(state, value) {
            state.currentProduct = value;
        },
        changeDeviceName(state, value) {
            state.currentDeviceName = value;
        },
        changeApiLoading(state, value) {
            state.apiLoading = value;
        },
    }
})

// export default store