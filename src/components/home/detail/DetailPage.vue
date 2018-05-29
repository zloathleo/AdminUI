<template>

    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

</template>

<script> 
import Summary from './Summary.vue';
export default {
    name: 'DetailPage',
    components: { Summary },
    mounted() {
        let routeName = this.$route.name;
        this.refreshDetailData(routeName);
    },
    beforeRouteUpdate(to, from, next) {
        this.refreshDetailData(to.name, next);
    },
    methods: {
        refreshDetailData: function (routeName, _next) {
            let device = this.$store.state.currentDeviceName;
            var _self = this;

            if ("home.detail" == routeName) {
                let type = 1;
                this.$myfetch.fetch("/status/" + device + "?type=" + type, { method: 'GET' }, function (json) {
                    _self.$mem.commit('changeCurrentStatus', json.value);
                    if (_next) {
                        _next();
                    }
                });
            } else if ("home.usersettings" == routeName) {
                this.$myfetch.fetch('/settings/' + device + '?type=u', { method: 'GET' }, function (json) {
                    _self.$mem.commit('changeCurrentUserSettingsData', json);
                    if (_next) {
                        _next();
                    }
                }, function (_errDispatch) {
                    _self.$tools.toastrError(_errDispatch, 'read device ' + device + ' usersettings fault.');
                    _self.$mem.commit('changeCurrentUserSettingsData', undefined);
                });
            } else {
                if (_next) {
                    _next();
                }
            }


        }
    }
}
</script>

<style scoped lang="less">
</style>