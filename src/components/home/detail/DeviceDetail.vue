<template>
    <div class="row">
        <DeviceDetailSummary/>
        <DeviceDetailChannels/>
    </div>
</template>

<script> 
import DeviceDetailSummary from './DeviceDetailSummary.vue';
import DeviceDetailChannels from './DeviceDetailChannels.vue';
export default {
    name: 'DeviceDetail',
    components: { DeviceDetailSummary, DeviceDetailChannels },
}
</script>

<style scoped lang="less">

</style>