<template>
    <div class="card my-card">
        <i class="fa fa-cog fa-5x text-primary"></i>

        <div class="form-group">
            <label>change server host</label>
            <input ref="inputDom" type="text" class="form-control" placeholder="Server Host" required autofocus>

            </input>
            <div ref="invalidMessage" class="invalid-message">the input is error. Try another?</div>
            <a href="#" class="btn-link" v-on:click="clickConfig">change system config</a>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickSubmit">Submit</button>
    </div>
</template>

<script>   
export default {
    name: 'ConfigPageHost',
    methods: {
        clickConfig: function (event) {
            this.$mem.commit("changeInitConfig", 0);
        },
        invalidInput: function (_inputValue) {
            if (_inputValue.length > 5) {
                return true;
            }
            return false;
        },
        clickSubmit: function (event) {
            let _inputDom = this.$refs.inputDom;
            let _inputValue = _inputDom.value;
            if (this.invalidInput(_inputValue)) {
                $(_inputDom).removeClass('is-invalid');
                this.$refs.invalidMessage.style.display = 'none';

                this.$tools.toastrSuccess('change server host success.');
                this.$tools.back(this);
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