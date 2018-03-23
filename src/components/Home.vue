<template>
    <div v-if="data!= undefined">
        <div v-for="row, index in data.rows" class="row-total">
            <div class="row device-row">
                <div class="device-title">
                    {{row.title}}
                </div>
                <div v-for="item, rowCount in row.items" class="col-2">
                    <DeviceItem :init-data='item' />
                </div>
            </div>
            <RowActionBar v-if="$store.state.isLogin" :row-title="row.title" />
        </div>
        <ActionBar v-show="$store.state.isLogin" />
    </div>
</template>

<script>    
import DeviceItem from './home/DeviceItem.vue';
import ActionBar from './home/ActionBar.vue';
import RowActionBar from './home/RowActionBar.vue';
export default {
    name: 'Home',
    components: { DeviceItem, ActionBar, RowActionBar },
    data: function () {
        return {
            data: undefined
        }
    },
    mounted() {
        this.loadDashboard();

        let _self = this;
        this.$eventHub.$on("dashboardUpdate", function (json) {
            if (json) {
                _self.data = json;
            }
        });
    },
    methods: {
        clickRow: function (_event) {
            _event.stopPropagation();
            console.log("clickRow");
        },
        loadDashboard() {
            let _self = this;
            this.$myfetch.fetch("/dashboard", { method: 'GET' }, function (json) {
                let _currentProduct = _self.$mem.products[json.product];
                _self.$store.commit('changeCurrentProduct', _currentProduct);

                _self.data = json;
            });
        },
    }
}
</script>

<style scoped lang="less">
.row-total {
  padding-bottom: 0.5rem;
  .device-row {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-left-width: 2rem;
    border-left-style: solid;
    border-left-color: #008cba;
    position: relative;
    background-color: #eee !important;
    .device-title {
      position: absolute;
      left: -1.2rem;
      top: 35%;
      color: #fff;
    }
  }
}
</style>