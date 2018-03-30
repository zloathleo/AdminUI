<template>
    <div class="card my-card">
        <i class="fa fa-link fa-5x text-primary"></i>

        <div class="form-group">
            <label>please choose product</label>
            <div class="form-group">
                <div v-for="(_product,key,index) of $mem.state.products" class="custom-control custom-radio">
                    <input type="radio" :id="_product.name" name="customRadio" class="custom-control-input" :checked="isProductChecked(_product.name)">
                    <label class="custom-control-label" :for="_product.name">{{_product.name}}</label>
                </div>
            </div>
            <label>please choose communication com</label>
            <select class="custom-select" ref="inputCom" required>
                <option v-for="com, index in coms" :selected="isComSelected(com)">
                    {{com}}
                </option>
            </select>
            <a href="#" class="btn-link" v-on:click="clickPageChangeServerHost">change server host</a>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickSubmit">Choose</button>
    </div>
</template>

<script>   
export default {
    name: 'ConfigPageProduct',
    data: function () {
        return {
            coms: undefined,
        }
    },
    mounted() {
        let _self = this;
        this.$myfetch.fetch("/ports", { method: 'GET', defaultEventDispatch: false }, function (json) {
            _self.coms = json.rows;
        });
    },
    methods: {
        isProductChecked(_n) {
            let _currentProduct = this.$mem.state.currentProduct;
            if (_currentProduct) {
                let _name = this.$mem.state.currentProduct.name;
                return _name === _n;
            } else {
                return false;
            }
        },
        isComSelected(_com) {
            let _currentCom = this.$mem.state.currentCom;
            if (_currentCom) {
                return _currentCom === _com;
            } else {
                return false;
            } 
        },
        clickPageChangeServerHost: function (event) {
            this.$mem.commit("changeInitConfig", 1);
        },
        clickSubmit: function (event) {
            var _self = this;
            let _inputs = $(".custom-control-input");

            _inputs.each(
                function (index, _input) {
                    if (_input.checked) {
                        var form = new URLSearchParams();
                        form.set('value', _input.id);
                        _self.$myfetch.fetch('/configs/product', { method: 'PUT', body: form }, function (json) {

                            let _inputCom = _self.$refs.inputCom;
                            let _inputComValue = _inputCom.value;
                            var form2 = new URLSearchParams();
                            form2.set('value', _inputComValue);

                            _self.$myfetch.fetch('/configs/com', { method: 'PUT', body: form2 }, function (json2) {
                                _self.$tools.initConfig(_self.$myfetch, _self.$mem);

                                _self.$tools.toastrSuccess('save system config success.');
                                _self.$tools.back(_self);
                            });

                        });
                    }
                }
            );
        },
    }
}
</script>

<style scoped lang="less">

</style>