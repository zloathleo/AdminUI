<template>

    <div class="row">
        <Summary />
        <div class="col-sm-8" v-if="getDeviceData() && getDeviceData().channels">
            <div class="row">
                <div v-for="channel, index in getDeviceData().channels" class="col-12">

                    <ChanEZFlame v-if="$mem.state.currentProduct.name === 'EZFlame'" :init-data="channel" :index-data="index" />
                    <ChanSFS1000 v-else-if="$mem.state.currentProduct.name === 'SFS1000'" :init-data="channel" :index-data="index" />

                </div>
            </div>
            <ActionBar :init-data='getDeviceData().name' />
        </div>
        <div v-else>No Data</div>
    </div>

</template>

<script>    
import Summary from './Summary.vue';
import ChanEZFlame from './ChanEZFlame.vue';
import ChanSFS1000 from './ChanSFS1000.vue';
import ActionBar from './ActionBar.vue';

export default {
    name: 'ChannelsContent',
    components: { Summary, ChanEZFlame, ChanSFS1000, ActionBar },
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