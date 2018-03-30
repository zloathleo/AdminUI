<template>
    <footer class="bg-primary">
        {{$mem.state.serverConnected}}
    </footer>
</template>

<script> 
export default {
    name: 'Foot'
}
</script>

<style scoped lang="less">
footer {
  position: fixed;
  width: 100%;
  z-index: 1;
  bottom: 0;  
  color: #fff;
}
</style>