<template>
    <li class="detail-item-li">
        <span>{{title}}</span>

        <span class="value" v-if="$mem.state.isLogin">
            <div class="btn-group">
                <button type="button" class="btn btn-primary value-radio-buttom" @click="clickItem1(item1.value)" v-bind:class="{active: (item1.value == value)}"> {{item1.display}}</button>
                <button type="button" class="btn btn-primary value-radio-buttom" @click="clickItem1(item2.value)" v-bind:class="{active: (item2.value == value)}"> {{item2.display}}</button>
                <button type="button" class="btn btn-primary value-radio-buttom" @click="clickItem1(item3.value)" v-bind:class="{active: (item3.value == value)}"> {{item3.display}}</button>
                <button type="button" class="btn btn-primary value-radio-buttom" @click="clickItem1(item4.value)" v-bind:class="{active: (item4.value == value)}"> {{item4.display}}</button>

            </div>
        </span>
        <span class="value" v-else>

        </span>

    </li>
</template>

<script>  
import propsync from './propsync';//引入mixin文件
export default {
    name: 'RadioButtom4',
    mixins: [propsync],//声明使用propsync的mixin
    props: ['title', 'value', 'item1', 'item2', 'item3', 'item4'],
    methods: {
        clickItem1: function (_current) {
            this.p_value = _current;//可以直接使用this.p_active 
        },
    }
}
</script>

<style scoped lang="less">
.active {
  z-index: 0;
}
.value {
  padding-right: 3rem;
  .btn-group {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    .value-radio-buttom {
      padding: 0;
      font-size: 0.8rem;
      line-height: 1.5;
      border-radius: 0;
      min-width: 2rem;
    }
  }
}
</style>