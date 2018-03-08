<template>
    <div class="card my-logincard">
        <i class="fa fa-user-circle fa-5x text-primary"></i>

        <input ref="inputPassword" type="password" id="inputPassword" class="form-control" placeholder="Password" required autofocus>
        <div ref="invalidMessage" class="invalid-message">Sorry, that username's taken. Try another?</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickLogin">Login</button>

    </div>
</template>

<script>   
export default {
    name: 'Login',
    methods: {
        invalidInput: function (_inputValue) {
            console.log(_inputValue);
            if (_inputValue && _inputValue.length > 3) {
                return true;
            }
            return false;
        },
        clickLogin: function (event) {
            let _inputDom = this.$refs.inputPassword;
            let _inputValue = _inputDom.value;
            if (this.invalidInput(_inputValue)) {
                $(_inputDom).removeClass('is-invalid');
                this.$refs.invalidMessage.style.display = 'none';

                let _lastRouteName = this.$store.state.lastRouteName;
                this.$store.commit('changeLogin', true);
                toastr.success('login success.');

                if (_lastRouteName) {
                    this.$router.push({ path: _lastRouteName });
                } else {
                    this.$router.push({ path: '/' });
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
.my-logincard {
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