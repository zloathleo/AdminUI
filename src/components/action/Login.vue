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

                    _self.$mem.commit('changeLogin', true);
                    _self.$tools.back(_self);
 
                    _self.$tools.toastrSuccess('login success.');


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

</style>