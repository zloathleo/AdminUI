<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">

        <div class="collapse navbar-collapse" style="-webkit-app-region: no-drag">
            <a class="nav-link cursor-pointer" v-on:click="clickBrand">
                <i class="fa fa-align-left text-white"></i>
            </a>

            <ul class="navbar-nav" v-bind:class="[is_electron ? 'electronClass' : 'mr-auto']">
                <li class="nav-item">
                    <a class="nav-link cursor-pointer">RodinX</a>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item dropdown cursor-pointer">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" id="download" aria-expanded="true">
                        Action
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="download">
                        <router-link v-if="isNotLogin" :to="{name:'login'}" class="dropdown-item">
                            Login
                        </router-link>
                        <a v-else class="dropdown-item" v-on:click="clickLogout">
                            Logout
                        </a>
                        <router-link :to="{name:'set_host'}" class="dropdown-item">
                            Config Host
                        </router-link>
                        <div v-if="!isNotLogin" class="dropdown-divider"></div>
                        <router-link v-if="!isNotLogin" class="dropdown-item" :to="{name:'set_device_address'}">
                            Config Device Addr
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link cursor-pointer" :to="{name:'set_com'}">
                        Com3
                    </router-link>
                </li>
            </ul>

            <ul class="navbar-nav" v-if="is_electron">
                <!-- electron -->
                <li class="nav-item" v-if="$store.state.winMax">
                    <a class="nav-link cursor-pointer" v-on:click="clickRestore">
                        <i class="fa fa-window-restore" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item" v-if="$store.state.winMax == false">
                    <a class="nav-link cursor-pointer" v-on:click="clickMax">
                        <i class="fa fa-window-maximize" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link cursor-pointer" v-on:click="clickClose">
                        <i class="fa fa-close" aria-hidden="true"></i>
                    </a>
                </li>
                <!-- electron -->
            </ul>
        </div>
    </nav>
</template>

<script>   
// const ipcRenderer = require('electron').ipcRenderer;
export default {
    name: 'Navbar',
    computed: {
        isNotLogin: function () {
            console.log("globle_is_electron:", globle_is_electron);
            return this.$store.state.isLogin == false;
        },
        is_electron: function () {
            return globle_is_electron;
        }
    },
    methods: {
        clickLogout: function (event) {
            this.$store.commit('changeLogin', false);
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
            this.$store.commit('changeWinMax', false);
            ipc_client_restore(event);
        },
        clickClose: function (event) {
            ipc_client_close(event);
        },
        clickMax: function (event) {
            ipc_client_max(event);
            this.$store.commit('changeWinMax', true);
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