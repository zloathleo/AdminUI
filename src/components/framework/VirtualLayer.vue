<template>
    <div>
        <div id="overlay" class="my-overlay display-none" v-on:click="clickOverlay" />

        <div id="loadingOverLayer" v-show="isApiLoadStart" class="my-overlay loading">
            <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw" aria-hidden="true"></i>
            <div id="loadingOverLayerText">
                loading data
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    name: 'VirtualLayer',
    computed: {
        isApiLoadStart: function () {
            let _apiLoadingStatus = this.$store.state.apiLoading.status;
            return _apiLoadingStatus == 1;
        },
    },
    methods: {
        clickOverlay: function (event) {
            $("#sidebar").fadeOut();
            $("#overlay").fadeOut();
        }
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
  padding-top: 50%;
  color: #fff;
}
</style>