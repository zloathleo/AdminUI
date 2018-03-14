<template>
    <div class="btn-group actionbar" role="group">
        <router-link :to="{name:'home.detail' , query: { device: this.initData }} " append class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
            UserSettings
        </router-link>

        <button v-show="$store.state.isLogin" type="button" class="btn btn-primary" v-on:click="clickWrite"> Write
            <i class="fa fa-floppy-o"></i>
        </button>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar',
    props: {
        initData: String,
    },
    methods: {
        clickGo2Usersettings: function (event) {
            toastr.success('clickGo2Usersettings success.');
        },
        clickWrite: function (event) {
            let _currentUserSettingsData = this.$store.state.currentUserSettingsData
            console.log(_currentUserSettingsData);
        }
    }
}
</script>

<style scoped lang="less">

</style>