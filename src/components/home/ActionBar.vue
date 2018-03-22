<template>
    <div class="btn-group actionbar" role="group">
        <button type="button" class="btn btn-primary half-width" v-on:click="clickAddRow"> Add Row
            <i class="fa fa-plus-circle"></i>
        </button>
        <button type="button" class="btn btn-primary half-width" v-on:click="clickAutoAssign"> Auto Assign
            <i class="fa fa-th"></i>
        </button>
    </div>
</template>

<script> 
export default {
    name: 'ActionBar',
    methods: {
        clickAddRow() {
            let _self = this;

            var form = new URLSearchParams();
            form.set('command', 1);
            this.$myfetch.fetch('/dashboard', { method: 'PATCH', body: form, loadingMessage: 'Update Dashboard.', }, function (json) {
                _self.$eventHub.$emit('dashboardUpdate', json);
                _self.$tools.toastrSuccess('dashboard add row success.');
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'dashboard add row fault.');
            });
        },
        clickAutoAssign() {
            let _self = this;

            var form = new URLSearchParams();
            form.set('command', 5);
            this.$myfetch.fetch('/dashboard', { method: 'PATCH', body: form, loadingMessage: 'Update Dashboard.', }, function (json) {
                _self.$eventHub.$emit('dashboardUpdate', json);
                _self.$tools.toastrSuccess('dashboard auto assign success.');
            }, function (_errDispatch) {
                _self.$tools.toastrError(_errDispatch, 'dashboard auto assign fault.');
            });
        }
    }
}
</script>

<style scoped lang="less">

</style>