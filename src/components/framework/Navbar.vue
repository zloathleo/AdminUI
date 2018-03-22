<template>
    <nav class="navbar navbar-expand navbar-dark bg-primary">

        <div class="collapse navbar-collapse">
            <a class="nav-link cursor-pointer" v-on:click="clickBrand">
                <i class="fa fa-align-left text-white"></i>
            </a>

            <ul class="navbar-nav mr-auto">
                <li class="nav-item" href="#">
                    <a class="nav-link">Home</a>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item dropdown cursor-pointer">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" id="download" aria-expanded="true">Action
                        <span class="caret"></span>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="download">
                        <router-link v-if="isNotLogin" :to="{name:'login'}" class="dropdown-item">
                            Login
                        </router-link>
                        <a v-else class="dropdown-item" v-on:click="clickLogout">
                            Logout
                        </a>
                        <div class="dropdown-divider"></div>

                        <router-link to="/config_host" class="dropdown-item">
                            Config Host
                        </router-link>
                        <div class="dropdown-divider"></div> 

                        <router-link class="dropdown-item" :to="{name:'set_device_address'}">
                            Config Device Addr
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link cursor-pointer" :to="{name:'set_com'}">
                        Com3
                    </router-link>
                </li>

                <li class="nav-item active">
                    <a class="nav-link cursor-pointer">RodinX</a>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>  
export default {
    name: 'Navbar',
    computed: {
        isNotLogin: function () {
            return this.$store.state.isLogin == false;
        },
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
    }
}
</script>

<style scoped lang="less">
.navbar {
  padding: 0.2rem 1rem;
  .nav-link {
    padding: 0.5rem;
  }
}
</style>