<template>
    <div class="col-sm-8">
        <div class="row">
            <div class="col-12">
                <DeviceDetailChan/>
            </div>
            <div class="col-12">
                <DeviceDetailChan/>
            </div>
        </div>

    </div>
</template>

<script>    
import DeviceDetailChan from './DeviceDetailChan.vue';
export default {
    name: 'DeviceDetailChannels',
    components: { DeviceDetailChan },
}
</script>

<style scoped lang="less">

</style>