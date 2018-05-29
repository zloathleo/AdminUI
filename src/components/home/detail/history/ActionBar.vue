<template>
    <div class="btn-group actionbar" role="group">
        <router-link :to="{name:'home.detail'} " append class="btn btn-primary full-width">
            <i class="fa fa-arrow-left"></i>
           
            {{ $store.state.currentDeviceName}} Detail
        </router-link>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar',
}
</script>

<style scoped lang="less">
</style>