<template>
    <div v-if="data!= undefined">
        <div v-for="row, index in data.rows" class="row device-row">
            <div v-for="item, rowCount in row.items" class="col-2">
                <DeviceItem :init-data='item' />
            </div>
        </div>
        <ActionBar v-show="$store.state.isLogin" />
    </div>
</template>

<script>    
import DeviceItem from './home/DeviceItem.vue';
import ActionBar from './home/ActionBar.vue';
export default {
    name: 'Home',
    components: { DeviceItem, ActionBar },
    data: function () {
        return {
            data: undefined
        }
    },
    mounted() {
        var _self = this;
        this.$myfetch.fetch("/dashboard", { method: 'GET' }, function (response) {
            _self.data = response;
        });
    }
}
</script>

<style scoped lang="less">
.device-row {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #eee !important;
  margin-bottom: 0.5rem;
}
</style>