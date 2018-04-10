<template>
    <div v-if="currentUserSettingsData && currentUserSettingsData.channels" class="col-sm-8">
        <div class="row">

            <div v-for="channel, index in currentUserSettingsData.channels" class="col-12">
                <Chan :init-data="channel" />
            </div>

        </div>
        <ActionBar :device-name="currentUserSettingsData.name" />
    </div>
</template>

<script>   
import Chan from './Chan.vue';
import ActionBar from './ActionBar.vue';
export default {
    name: 'UserSettingsContent',
    components: { Chan, ActionBar },
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