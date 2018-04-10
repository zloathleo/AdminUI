<template>
    <div>
        <div class="row">
            <Summary />
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
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
                    //待修改
                    // let _device_detail = json.value;
                    // if (_device_detail) {
                    //     Object.assign(_device_detail, _self.$tools.parseComplexState(_device_detail.status));
                    // }
                    // _self.data = json.value;
                    _self.$mem.commit('changeCurrentStatus', json.value);
                    if (_next) {
                        _next();
                    }
                });
            } else if ("home.usersettings" == routeName) { 
                this.$myfetch.fetch('/settings/' + device + '?type=u' , { method: 'GET' }, function (json) {
                    _self.$mem.commit('changeCurrentUserSettingsData', json);
                    if (_next) {
                        _next();
                    }
                }, function (_errDispatch) {
                    _self.$tools.toastrError(_errDispatch, 'read device ' + device + ' usersettings fault.');
                    _self.$mem.commit('changeCurrentUserSettingsData', undefined);
                });
            }


        }
    }
}
</script>

<style scoped lang="less">

</style>