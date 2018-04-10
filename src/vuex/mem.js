import Vue from 'vue';
import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        winMax: true,
        apiLoading: {
            status: 0,//0=noloading ,1=loading ,-1=error
            loadingMessage: undefined,
            url: undefined,
        },

        serverConnected: true,
        //是否初始化完成-选择完产品和Com口 -1未完成 0正在 1已经完成
        serverInit: -1,
        //初始化配置状态 0=product 1=host
        initConfig: 0,
        products: {},
        currentProduct: undefined,
        currentCom: "",

        //当前状态
        currentStatus: new Object(),

        currentUserSettingsData: undefined,

        isLogin: true,

    },
    mutations: {
        changeWinMax(state, value) {
            state.winMax = value;
        },
        changeApiLoading(state, value) {
            state.apiLoading = value;
        },

        changeServerConnected(state, value) {
            state.serverConnected = value;
        },
        changeServerInit(state, value) {
            state.serverInit = value;
        },
        changeInitConfig(state, value) {
            state.initConfig = value;
        },

        changeProducts(state, value) {
            state.products = value;
        },

        changeCurrentProduct(state, value) {
            state.currentProduct = value;
        },
        changeCurrentCom(state, value) {
            state.currentCom = value;
        },

        changeCurrentStatus(state, value) {
            state.currentStatus = value;
        },
        changeCurrentUserSettingsData(state, value) {
            state.currentUserSettingsData = value;
        },

        changeLogin(state, value) {
            state.isLogin = value;
        },
    },

    getters: {
        getCurrentStatusValue: (state) => (_key) => {
            let currentStatus = state.currentStatus; 
            if (currentStatus && currentStatus[_key] != undefined) {
                return currentStatus[_key];
            } else {
                return "--";
            }
        }
    }
});