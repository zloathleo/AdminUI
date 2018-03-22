<template>
    <div class="card my-card">
        <i class="fa fa-user-circle fa-5x text-primary"></i>

        <label>Password</label>
        <input ref="inputPassword" type="password" class="form-control" placeholder="Password" required autofocus>
        <div ref="invalidMessage" class="invalid-message">Sorry, that password is invalid. Try another?</div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickLogin">Login</button>

    </div>
</template>

<script>   
import md5 from 'js-md5';
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
                var _self = this;
                var form = new URLSearchParams();
                form.set('password', md5(_inputValue, 32));
                this.$myfetch.fetch('/password', { method: 'PATCH', loadingMessage: 'user login.', body: form }, function () {

                    $(_inputDom).removeClass('is-invalid');
                    _self.$refs.invalidMessage.style.display = 'none';

                    _self.$store.commit('changeLogin', true);
                    _self.$eventHub.$emit('changeLogin', true);
                    _self.$tools.toastrSuccess('login success.');

                    let _lastRouteName = _self.$store.state.lastRouteName;
                    if (_lastRouteName) {
                        _self.$router.push({ name: _lastRouteName });
                    } else {
                        _self.$router.push({ name: '/' });
                    }

                }, function (_errDispatch) {
                    $(_inputDom).removeClass('is-invalid');
                    _self.$refs.invalidMessage.style.display = 'none';
                    _self.$tools.toastrError(_errDispatch, 'login fault.');
                });


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