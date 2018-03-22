<template>
    <div class="card my-card">
        <i class="fa fa-cog fa-5x text-primary"></i>

        <label>Com</label>
        <input ref="inputAddress" type="text" class="form-control" placeholder="Com" required autofocus>
        <div ref="invalidMessage" class="invalid-message">Sorry, the device address range is 1-127. Try another?</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickLogin">Submit</button>

    </div>
</template>

<script>   
export default {
    name: 'SetCom',
    methods: {
        invalidInput: function (_inputValue) {
            console.log(_inputValue);
            if (_inputValue > 0 && _inputValue < 127) {
                return true;
            }
            return false;
        },
        clickLogin: function (event) {
            let _inputDom = this.$refs.inputAddress;
            let _inputValue = _inputDom.value;
            if (this.invalidInput(_inputValue)) {
                $(_inputDom).removeClass('is-invalid');
                this.$refs.invalidMessage.style.display = 'none';

                let _lastRouteName = this.$store.state.lastRouteName;
                this.$tools.toastrSuccess('write success.');

                if (_lastRouteName) {
                    this.$router.push({ name: _lastRouteName });
                } else {
                    this.$router.push({ name: '/' });
                }
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