<template>
    <div class="col-sm-8">
        <div class="row">
            <div class="col-12">
                <Chan :init-data='initData.ch1'/>
            </div>
            <div class="col-12">
                <Chan :init-data='initData.ch2'/>
            </div>
        </div>
        <ActionBar :init-data='initData.name' />
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
}
</script>

<style scoped lang="less">

</style>