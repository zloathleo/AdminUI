<template>
    <div>
        <div class="row">
            <Summary/>
            <router-view></router-view>
        </div>
    </div>
</template>

<script> 
import Summary from './Summary.vue';
export default {
    name: 'DetailPage',
    components: { Summary },
}
</script>

<style scoped lang="less">

</style>