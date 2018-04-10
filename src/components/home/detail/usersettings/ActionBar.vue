<template>
    <div class="btn-group actionbar" role="group">
        <router-link :to="{name:'home.detail'} " append class="btn btn-primary" v-bind:class="[$mem.state.isLogin ? 'half-width' : 'full-width']">
            <i class="fa fa-arrow-left"></i>
            UserSettings
        </router-link>

        <button v-show="$mem.state.isLogin" type="button" class="btn btn-primary half-width" v-on:click="clickWrite"> Write
            <i class="fa fa-floppy-o"></i>
        </button>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar',
    props: {
        deviceName: String,
    },
    methods: {
        clickGo2Usersettings: function (event) {
            this.$tools.toastrError('clickGo2Usersettings success.');
        },
        clickWrite: function (event) {
            let _currentUserSettingsData = this.$mem.state.currentUserSettingsData;
            var _self = this;
 
            var form = new URLSearchParams();
            form.set('content', JSON.stringify(_currentUserSettingsData));
            form.set('type', "u");
            let _device = this.deviceName;
            this.$myfetch.fetch('/settings/' + _device, { method: 'PUT', body: form, loadingMessage: 'Update UserSettings.', }, function (json) {
                _self.$tools.toastrSuccess('write device ' + _device + ' success.');
                _self.$mem.commit('changeCurrentUserSettingsData', json);
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'write device ' + _device + ' fault.');
            });
        }
    }
}
</script>

<style scoped lang="less">

</style>