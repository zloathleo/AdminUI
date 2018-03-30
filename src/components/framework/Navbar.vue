<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">

        <div class="collapse navbar-collapse" style="-webkit-app-region: no-drag">
            <a class="nav-link cursor-pointer" v-on:click="clickBrand" v-if="$mem.state.serverInit === 1">
                <i class="fa fa-align-left text-white"></i>
            </a>

            <ul class="navbar-nav" v-bind:class="[is_electron ? 'electronClass' : 'mr-auto']">
                <li class="nav-item">
                    <a class="nav-link cursor-pointer">RodinX</a>
                </li>
            </ul>

            <ul class="navbar-nav" v-if="$mem.state.serverInit === 1">
                <li class="nav-item dropdown cursor-pointer">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" id="download" aria-expanded="true">
                        Action
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="download">
                        <router-link :to="{name:'login'}" class="dropdown-item" v-if="isNotLogin">
                            Login
                        </router-link>
                        <a v-else class="dropdown-item" v-on:click="clickLogout">
                            Logout
                        </a>

                        <router-link class="dropdown-item" :to="{name:'set_device_address'}" v-if="!isNotLogin">
                            Config Device Addr
                        </router-link>
                        <div class="dropdown-divider" v-if="!isNotLogin" />
                        <router-link :to="{name:'set_config'}" class="dropdown-item">
                            System Config
                        </router-link>
                    </div>
                </li>

                <li class="nav-item">
                    <router-link :to="{name:'set_config'}" class="nav-link">
                        {{$mem.state.currentCom}}
                    </router-link>
                </li>
            </ul>

            <!-- electron -->
            <ul class="navbar-nav" v-if="is_electron">
                <li class="nav-item" v-if="$mem.state.winMax">
                    <a class="nav-link cursor-pointer" v-on:click="clickRestore">
                        <i class="fa fa-window-restore" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item" v-if="$mem.state.winMax == false">
                    <a class="nav-link cursor-pointer" v-on:click="clickMax">
                        <i class="fa fa-window-maximize" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer" v-on:click="clickClose">
                        <i class="fa fa-close" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
            <!-- electron -->
        </div>
    </nav>
</template>

<script>   
// const ipcRenderer = require('electron').ipcRenderer;
export default {
    name: 'Navbar',
    computed: {
        isNotLogin: function () {
            return this.$mem.state.isLogin == false;
        },
        is_electron: function () {
            return globle_is_electron;
        }
    },
    methods: {
        clickLogout: function (event) {
            this.$mem.commit('changeLogin', false);
            this.$eventHub.$emit('changeLogin', false);
            this.$tools.toastrSuccess('logout success.');
        },
        clickAbout: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            this.$tools.toastrSuccess('Hello')
        },
        clickBrand: function (event) {
            // `this` 在方法里指向当前 Vue 实例 
            let _mySidebar = $("#sidebar");
            _mySidebar.fadeIn();
            _mySidebar.css("display", "block");

            let _myOverlay = $("#overlay");
            _myOverlay.css("display", "block");
        },
        clickRestore: function (event) {
            this.$mem.commit('changeWinMax', false);
            ipc_client_restore(event);
        },
        clickClose: function (event) {
            ipc_client_close(event);
        },
        clickMax: function (event) {
            ipc_client_max(event);
            this.$mem.commit('changeWinMax', true);
        },
    }
}
</script>

<style scoped lang="less">
.navbar {
  padding: 0.2rem 1rem;
  .electronClass {
    -webkit-app-region: drag;
    width: calc(100% - 203px);
  }
  .nav-link {
    padding: 0.5rem;
  }
}
</style>