<template>
    <div v-if="currentUserSettingsData" class="col-sm-8">
        <div class="row">
            <div class="col-12">
                <Chan :init-data='currentUserSettingsData.ch1' />
            </div>
            <div class="col-12">
                <Chan :init-data='currentUserSettingsData.ch2' />
            </div>
        </div>
        <ActionBar :init-data='currentUserSettingsData.name' />
    </div>
</template>

<script>   
import Chan from './Chan.vue';
import ActionBar from './ActionBar.vue';
export default {
    name: 'UserSettingsContent',
    components: { Chan, ActionBar }, 
    computed: {
        currentUserSettingsData: function () {
            return this.$store.state.currentUserSettingsData;
        }
    }
}
</script>

<style scoped lang="less">

</style>