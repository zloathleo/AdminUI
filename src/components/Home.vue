<template>
    <div>
        <div class="row">
            <div class="col-2">
                <DeviceItem/>
            </div>
            <div class="col-2">
                <DeviceItem/>
            </div>
            <div class="col-2">
                <DeviceItem/>
            </div>
            <div class="col-2">
                <DeviceItem/>
            </div>
            <div class="col-2">
                <DeviceItem/>
            </div>
            <div class="col-2">
                <DeviceItem/>
            </div>
        </div>
        <ActionBar/>
    </div> 
</template>

<script>   
import DeviceItem from './home/DeviceItem.vue';
import ActionBar from './home/ActionBar.vue';
export default {
    name: 'Home',
    components: { DeviceItem, ActionBar },
    created() {
        // this.$store.commit('changeRouteName', 'Home');
        // console.log('Home created:' + this.$store.state.routeName);
    }
}
</script>

<style scoped lang="less">
.row {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #eee !important;
}
</style>