<template>
    <div>
        <div id="overlay" class="my-overlay display-none" v-on:click="clickOverlay" />

        <div id="loadingOverLayer" v-show="isApiLoadStart" class="my-overlay loading">
            <i class="fa fa-circle-o-notch fa-spin fa-fw" aria-hidden="true"></i>
            <div id="loadingOverLayerText">
                loading data
            </div>
        </div>

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
            return this.$store.state.apiLoading.status == 1;
        },
        isServerConnected: function () {
            return !this.$store.state.serverConnected && !(this.$store.state.apiLoading.status == 1);
        },
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
  padding-top: 40%;
  color: #fff;
}
.notconnected {
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0.8rem;
}
</style>