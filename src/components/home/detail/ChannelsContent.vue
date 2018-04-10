<template>
    <div class="col-sm-8" v-if="getDeviceData() && getDeviceData().channels">
        <div class="row">
            <div v-for="channel, index in getDeviceData().channels" class="col-12">
                <Chan :init-data="channel" :index-data="index" />
            </div>
        </div>
        <ActionBar :init-data='getDeviceData().name' />
    </div>
</template>

<script>    
import Chan from './Chan.vue';
import ActionBar from './ActionBar.vue';
export default {
    name: 'ChannelsContent',
    components: { Chan, ActionBar },
    props: { 
    },
    methods: {
        getDeviceData: function () {
            return this.$mem.state.currentStatus;
        }
    }
}
</script>

<style scoped lang="less">

</style>