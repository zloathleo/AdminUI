import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 定义状态
    state: {
        lastRouteName: '/',
        currentRouteName: '/',
        isLogin: true,

        currentUserSettingsData: undefined,
        apiLoading: {
            status: 0,//0=noloading ,1=loading ,-1=error
            loadingMessage: undefined,
            url: undefined,
        },
    },
    mutations: {
        changeLogin(state, value) {
            state.isLogin = value;
        },
        changeApiLoading(state, value) {
            state.apiLoading = value;
        },
    }
})

export default store