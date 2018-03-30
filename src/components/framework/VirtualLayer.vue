<template>
    <div>
        <div id="overlay" class="my-overlay display-none" v-on:click="clickOverlay" />

        <transition name="fade" mode="out-in">
            <div id="loadingOverLayer" v-show="isApiLoadStart" class="my-overlay loading">
                <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
                <div id="loadingOverLayerText">
                    {{loadingMessage}}
                </div>
            </div>
        </transition>

        <div v-show="isServerConnected" class="my-overlay">
            <div class="alert alert-dismissible alert-danger notconnected">
                server {{$store.state.serverhost}} connect fault.
                <br/>
                <a class="cursor-pointer" v-on:click="clickReconnectServer">
                    <i class="fa fa-refresh"></i>
                    click reconnect server.
                </a>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    name: 'VirtualLayer',
    computed: {
        isApiLoadStart: function () {
            return this.$mem.state.apiLoading.status == 1;
        },
        isServerConnected: function () {
            return !this.$mem.state.serverConnected && !(this.$mem.state.apiLoading.status == 1);
        },
        loadingMessage: function () {
            let _msg = this.$mem.state.apiLoading.loadingMessage;
            if (_msg) {
                return _msg;
            } else {
                return "load data";
            }
        }
    },
    methods: {
        clickOverlay: function (event) {
            $("#sidebar").fadeOut();
            $("#overlay").fadeOut();
        },
        clickReconnectServer: function (event) {
            console.log("clickReconnectServer");
            this.$tools.connectServer(this);
        },
    }
}
</script>

<style scoped lang="less">
.display-none {
  display: none;
}
.my-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.loading {
  text-align: center;
  padding-top: 25%;
  color: #fff;
}
.notconnected {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0.8rem;
}
</style>