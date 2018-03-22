<template>
    <div class="row row-action-bar">
        <button type="button" class="offset-sm-6 col-4 col-sm-2 btn btn btn-danger" v-on:click="clickDeleteRow">
            <i class="fa fa-times-circle"></i>
            Delete Row
        </button>
        <button type="button" class="col-4 col-sm-2 btn btn-warning" v-on:click="clickDeleteDevice">
            <i class="fa fa-times-circle"></i>
            Delete Device
        </button>
        <button type="button" class="col-4 col-sm-2 btn btn-primary" v-on:click="clickAddDevice">
            <i class="fa fa-plus-circle"></i>
            Add Device
        </button>
    </div>
</template>

<script> 
export default {
    name: 'RowActionBar',
    props: {
        rowTitle: String,
    },
    methods: {
        clickDeleteDevice() {

            var form = new URLSearchParams();
            form.set('command', 4);
            form.set('row', this.rowTitle);

            let _self = this;
            this.$myfetch.fetch('/dashboard', { method: 'PATCH', body: form, loadingMessage: 'Update Dashboard.', }, function (json) {
                _self.$eventHub.$emit('dashboardUpdate', json);
                _self.$tools.toastrSuccess('dashboard delete device success.');
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'dashboard delete device fault.');
            });
        },
        clickAddDevice() {
            var form = new URLSearchParams();
            form.set('command', 3);
            form.set('row', this.rowTitle);

            let _self = this;
            this.$myfetch.fetch('/dashboard', { method: 'PATCH', body: form, loadingMessage: 'Update Dashboard.', }, function (json) {
                _self.$eventHub.$emit('dashboardUpdate', json);
                _self.$tools.toastrSuccess('dashboard add device success.');
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'dashboard add device fault.');
            });
        },
        clickDeleteRow() {
            var form = new URLSearchParams();
            form.set('command', 2);
            form.set('row', this.rowTitle);

            let _self = this;
            this.$myfetch.fetch('/dashboard', { method: 'PATCH', body: form, loadingMessage: 'Update Dashboard.', }, function (json) {
                _self.$eventHub.$emit('dashboardUpdate', json);
                _self.$tools.toastrSuccess('dashboard delete row success.');
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'dashboard delete row fault.');
            });
        }
    }
}
</script>

<style scoped lang="less">
.row-action-bar {
  padding-bottom: 0.5rem;
  button {
    padding: 0rem 0.5rem;
    font-size: 0.5rem;
  }
}
</style>