<template>
    <div class="col-sm-8">
        <div class="row">
            <div class="col-12">
                <Chan/>
            </div>
            <div class="col-12">
                <Chan/>
            </div>
        </div>
        <ActionBar/>
    </div>
</template>

<script>   
import Chan from './Chan.vue';
import ActionBar from './ActionBar.vue';
export default {
    name: 'UserSettingsContent',
    components: { Chan, ActionBar },
}
</script>

<style scoped lang="less">

</style>