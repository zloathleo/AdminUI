<template>
    <div>
        <div class="row">
            <Summary :init-data='data' />
            <router-view :init-data='data'></router-view>
        </div>
    </div>
</template>

<script> 
import Summary from './Summary.vue';
export default {
    name: 'DetailPage',
    data: function () {
        return {
            data: {
                name: '--', ch1: {
                    // enable: 0,
                    // file: 0,
                    // type: "UV"
                }, ch2: {
                    // enable: 0,
                    // file: 0,
                    // type: "UV"
                }
            }
        }
    },
    components: { Summary },
    mounted() {
        let routeName = this.$route.name;
        this.refreshDetailData(routeName);
    },
    beforeRouteUpdate(to, from, next) {
        this.refreshDetailData(to.name);
        next();
    },
    methods: {
        refreshDetailData: function (routeName) {
            let device = this.$store.state.currentDeviceName;
            var _self = this;

            if ("home.detail" == routeName) {
                let type = 1;
                this.$myfetch.fetch("/status/" + device + "?type=" + type, { method: 'GET' }, function (response) {
                    _self.data = response.devices[device];
                });
            } else if ("home.usersettings" == routeName) {
                let type = "u";
                let source = "d";
                this.$myfetch.fetch('/settings/' + device + '?type=' + type + '&source=' + source, { method: 'GET' }, function (response) {  
                     _self.data = response; 
                    _self.$store.commit('changeUserSettingsData', response);
                });
            }


        }
    }
}
</script>

<style scoped lang="less">

</style>