<template>
    <div class="card my-card">
        <i class="fa fa-cog fa-5x text-primary"></i>

        <label>device old address</label>
        <input ref="inputOldAddress" type="text" class="form-control" placeholder="Device Address" required autofocus>

        <label>write device address</label>
        <input ref="inputAddress" type="text" class="form-control" placeholder="Device Address" required autofocus>

        <div ref="invalidMessage" class="invalid-message">Sorry, the device address range is 1-127. Try another?</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickWrite">Write</button>

    </div>
</template>

<script>   
export default {
    name: 'SetDeviceAddress',
    methods: {
        invalidInput: function (_inputValue) {
            console.log(_inputValue);
            if (_inputValue > 0 && _inputValue < 127) {
                return true;
            }
            return false;
        },
        clickWrite: function (event) {
            let _inputDom = this.$refs.inputAddress;
            let _inputValue = _inputDom.value;
            if (this.invalidInput(_inputValue)) {
                $(_inputDom).removeClass('is-invalid');
                this.$refs.invalidMessage.style.display = 'none';


                var _self = this;
                var form = new URLSearchParams();
                form.set('addr', _inputValue);
                this.$myfetch.fetch('/address', { method: 'PUT', loadingMessage: 'write address.', body: form }, function () {
                    this.$tools.toastrSuccess('write address success.');
                    this.$tools.back(this);
                }, function (_errDispatch) {
                    _self.$tools.toastrError(_errDispatch, 'write address fault.');
                });
                // this.$tools.toastrSuccess('write success.');
                // this.$tools.back(this);
            } else {
                $(_inputDom).addClass('is-invalid');
                this.$refs.invalidMessage.style.display = 'block';
            }
        },
    }
}
</script>

<style scoped lang="less">
</style>