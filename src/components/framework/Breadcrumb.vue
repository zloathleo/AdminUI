<template>
    <ol class="breadcrumb">
        <li class="breadcrumb-item" v-for="(item, index) in currentRouteName.root">
            <a class="cursor-pointer" v-on:click="clickLink(item)">{{item}}</a>
        </li>

        <li class="breadcrumb-item active">{{currentRouteName.active}}</li>
    </ol>
</template>

<script> 
import store from '../../vuex/store';
export default {
    name: 'Breadcrumb',
    computed: {
        currentRouteName() {
            let _currentRouteName = this.$store.state.currentRouteName;
            if (_currentRouteName) {
                let _root = _currentRouteName.split(".");
                let _items = new Object();

                _items.active = _root.pop();
                _items.root = _root;

                return _items;
            } else {
                return new Object();
            }

        }
    },
    methods: {
        clickLink: function (_lastRouteName) {
            this.$router.push({ name: _lastRouteName });
        }
    }
}
</script>

<style scoped lang="less">
.breadcrumb {
  padding: 0.5rem 1rem;
  border-radius: 0px;
}
</style>