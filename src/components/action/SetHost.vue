<template>
    <div class="card my-card">
        <i class="fa fa-cog fa-5x text-primary"></i>

        <label>change server host</label>
        <input ref="inputDom" type="text" class="form-control" placeholder="Server Host" required autofocus>
        <div ref="invalidMessage" class="invalid-message">the input is error. Try another?</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickSubmit">Submit</button>

    </div>
</template>

<script>   
export default {
    name: 'SetHost',
    methods: {
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
.my-card {
  max-width: 320px;
  padding: 24px 24px;
  margin: 24px auto 24px;
  i {
    margin: 0 auto 24px;
  }
  input {
    margin-bottom: 10px;
  }
  .invalid-message {
    display: none;
    width: 100%;
    margin-bottom: 0.5rem;
    font-size: 80%;
    color: #ee5f5b;
  }
}
</style>