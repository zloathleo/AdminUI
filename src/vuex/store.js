import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 定义状态
    state: {
        lastRouteName: '/',
        currentRouteName: '/',
        isLogin: false,
    },
    mutations: {
        changeLogin(state, value) {
            state.isLogin = value;
        }
    }
})

export default store