<template>
    <div class="row" v-if="currentUserSettingsData && currentUserSettingsData.channels">
        <div v-for="channel, index in currentUserSettingsData.channels" class="col-12">
            <ChanEZFlame v-if="$mem.state.currentProduct.name === 'EZFlame'" :init-data="channel" :index-data="index" />
            <ChanSFS1000 v-else-if="$mem.state.currentProduct.name === 'SFS1000'" :init-data="channel" :index-data="index" />
        </div>
        <ActionBar :device-name="currentUserSettingsData.name" />
    </div>
</template>

<script>   
import Summary from '../Summary.vue';
import ChanEZFlame from './ChanEZFlame.vue';
import ChanSFS1000 from './ChanSFS1000.vue';
import ActionBar from './ActionBar.vue';
export default {
    name: 'UserSettingsContent',
    components: { Summary, ChanEZFlame, ChanSFS1000, ActionBar },
    props: {
        initData: Object,
    },
    computed: {
        currentUserSettingsData: function () {
            return this.$mem.state.currentUserSettingsData;
        }
    },
    beforeUpdate: function () {

    },
}
</script>

<style scoped lang="less">
</style>