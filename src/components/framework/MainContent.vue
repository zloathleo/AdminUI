<template>
  <div>
    <Breadcrumb />
    <div id="MainContent" class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>  
import Breadcrumb from './Breadcrumb.vue';
export default {
  name: 'MainContent',
  components: { Breadcrumb },
  mounted() {
    this.changeHeight(this.$store.state.isLogin);

    let _self = this;
    this.$eventHub.$on("changeLogin", function (_isLogin) {
      _self.changeHeight(_isLogin);
    });

  },
  methods: {
    changeHeight: function (_isLogin) {
      console.log("_isLogin:", _isLogin);
      let _padding = (42 + 54 + 16 + 22);
      if (_isLogin) {
        _padding = 42 + 54 + 36 + 5 + 22;
      }
      let _content_height = document.documentElement.clientHeight - _padding;
      $('#MainContent').css("height", _content_height + "px");
    },
  }
}
</script>

<style scoped lang="less">
.breadcrumb {
  padding: 0.5rem 1rem;
}
.main-content {
  overflow: auto;
  width: 100%;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
}

.main-content::-webkit-scrollbar-track {
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #f5f5f5;
}
.main-content::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.main-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  //   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.2);
}
</style>