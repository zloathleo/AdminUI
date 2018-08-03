<template>
    <div class="card my-card">
        <i class="fa fa-link fa-5x text-primary"></i>

        <div class="form-group">
            <label>please choose device</label>
            <select class="custom-select" ref="inputDevice" required>
                <option v-for="(_device,key,index) of devices">
                    {{_device}}
                </option>
            </select>
        </div>

        <div class="form-group">
            <label for="exampleInputFile">please choose upgrade file</label>
            <input type="file" accept=".bin" v-on:change="selectFile" class="form-control-file" aria-describedby="fileHelp" />
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickSubmit">Choose</button>
    </div>
</template>

<script>   
export default {
    name: 'ConfigPageProduct',
    data: function () {
        return {
            devices: [],
            selectedFile: undefined
        }
    },
    mounted() {
        let _self = this;

        this.$myfetch.fetch("/status", { method: 'GET', defaultEventDispatch: false }, function (json) {
            let _value = json.value;
            console.log(_value);
            if (_value) {
                let keys = [];
                for (let property in _value)
                    keys.push(property);
                _self.devices = keys;
            }
        });
    },
    methods: {
        selectFile(_event) {
            let _self = this;
            let _device = this.$store.state.currentDeviceName;
            let _files = _event.currentTarget.files;
            if (_files && _files[0]) {
                this.selectedFile = _files[0];  
            }
        },


        clickSubmit: function (event) {

            let _inputDevice = this.$refs.inputDevice.value;

            var form = new FormData();
            form.set('file', this.selectedFile);

            let _self = this;

            this.$myfetch.fetchUpdateFile('/upgrade/' + _inputDevice, { method: 'PUT', loadingMessage: 'upgrade device now...', body: form }, function (json) {
                _self.$tools.toastrSuccess('upgrade device success.');
                _self.selectedFile = undefined;
            }, function (_errDispatch) {
                _self.$tools.toastrError('upgrade device error.');
                _self.selectedFile = undefined;
            });
 
        },
    }
}
</script>

<style scoped lang="less">
</style>