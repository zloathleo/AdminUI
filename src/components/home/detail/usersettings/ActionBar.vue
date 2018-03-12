<template>
    <div class="btn-group actionbar" role="group">
        <router-link :to="{name:'home.detail'}" append class="btn btn-primary">
            <i class="fa fa-arrow-left"></i>
            UserSettings
        </router-link>

        <button type="button" class="btn btn-primary"> Write
            <i class="fa fa-floppy-o"></i>
        </button>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar',
    methods: {
        clickGo2Usersettings: function (event) {
            toastr.success('clickGo2Usersettings success.');
        },
    }
}
</script>

<style scoped lang="less">

</style>