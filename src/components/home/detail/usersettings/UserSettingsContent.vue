<template>
    <div v-if="initData" class="col-sm-8">
        <div class="row">

            <div v-for="channel, index in initData.channels" class="col-12">
                <Chan :init-data="channel" />
            </div> 

        </div>
        <ActionBar :init-data="initData.name" />
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
    computed: { 
    },
    beforeUpdate: function () { 
    },
}
</script>

<style scoped lang="less">

</style>