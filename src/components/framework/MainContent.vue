<template>
  <div>
    <Breadcrumb />
    <div id="MainContent" class="main-content">
      <transition name="fade" mode="out-in">
        <router-view v-if="$mem.state.serverInit === 1" />
        <ConfigPage v-else-if="$mem.state.serverInit === 0" />
        <div v-else-if="$mem.state.serverInit === -1" />
      </transition>
    </div>
  </div>
</template>

<script>  
import Breadcrumb from './Breadcrumb.vue';
import ConfigPage from '../action/ConfigPage.vue';

export default {
  name: 'MainContent',
  components: { Breadcrumb, ConfigPage },
  mounted() {
    this.changeHeight(this.$mem.state.isLogin);

    let _self = this;
    this.$eventHub.$on("changeLogin", function (_isLogin) {
      _self.changeHeight(_isLogin);
    });

    setInterval(this.refreshPage, 1000);

  },
  methods: {
    refreshPage: function () {
      //not ready
      if (this.$mem.state.serverInit !== 1) {
        return;
      }
      //busy
      if (this.$mem.state.apiLoading.status === 1) {
        return;
      }

      let _self = this;

      let _currentRouteName = this.$store.state.currentRouteName;
      let _device = this.$store.state.currentDeviceName;
      if (_currentRouteName) {
        let _names = _currentRouteName.split(".");
        if (_names.length === 1 && _names[0] === "home") {
          this.$myfetch.fetch("/status", { method: 'GET', defaultEventDispatch: false }, function (json) {
            _self.$mem.commit('changeCurrentStatus', json);
          });
        } else if (_currentRouteName === "home.detail" && _device) {
          this.$myfetch.fetch("/status/" + _device + "?type=1", { method: 'GET', defaultEventDispatch: false }, function (json) {
            _self.$mem.commit('changeCurrentStatus', json);
          });
        } else if (_currentRouteName === "home.usersettings" && _device) {
          this.$myfetch.fetch("/status/" + _device + "?type=0", { method: 'GET', defaultEventDispatch: false }, function (json) {
            _self.$mem.commit('changeCurrentStatus', json);
          });
        }
      }
    },

    changeHeight: function (_isLogin) {
      let _padding = (42 + 54 + 16 + 0);
      if (_isLogin) {
        _padding = 42 + 54 + 36 + 5 + 0;
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
  border-radius: 5px;
  background-color: #f5f5f5;
}
.main-content::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.main-content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>