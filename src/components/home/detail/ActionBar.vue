<template>
    <div class="btn-group actionbar" role="group">
        <router-link :to="{name:'home.usersettings'}" append class="btn btn-primary"> UserSettings
            <i class="fa fa-arrow-right"></i>
        </router-link>
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
    }
}
</script>

<style scoped lang="less">

</style>