<template>
    <div class="card my-card">
        <i class="fa fa-cog fa-5x text-primary"></i>

        <div class="form-group">
            <label>change communication com</label>
            <select class="custom-select" ref="inputDom" required autofocus>
                <option v-for="com, index in coms">
                    <option>{{com}}</option>
                </option>
            </select>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="clickLogin">Submit</button>

    </div>
</template>

<script>   
export default {
    name: 'SetCom',
    data: function () {
        return {
            coms: undefined
        }
    },
    mounted() {
        let _self = this;
        this.$myfetch.fetch("/ports", { method: 'GET' }, function (json) {
            _self.coms = json.rows;
        });
    },
    methods: {
        clickLogin: function (event) {
            let _inputDom = this.$refs.inputDom;
            let _inputValue = _inputDom.value;

            this.$tools.toastrSuccess('com change success.');
            this.$tools.back(this);
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