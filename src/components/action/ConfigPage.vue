<template>
    <ConfigPageProduct v-if="$mem.state.initConfig === 0" />
    <ConfigPageHost v-else-if="$mem.state.initConfig === 1" />
</template>

<script>   
import ConfigPageProduct from './ConfigPageProduct.vue';
import ConfigPageHost from './ConfigPageHost.vue';
export default {
    name: 'ConfigPage',
    components: { ConfigPageProduct, ConfigPageHost },
    methods: {
    }
}
</script>

<style scoped lang="less">

</style>