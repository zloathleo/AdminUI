<template>
    <div>
        <div id="overlay" class="my-overlay" v-on:click="clickOverlay" />
    </div>
</template>

<script> 
export default {
    name: 'VirtualLayer',
    methods: {
        clickOverlay: function (event) {
            $("#sidebar").fadeOut();
            $("#overlay").fadeOut();
        }
    }
}
</script>

<style scoped lang="less">
.my-overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>