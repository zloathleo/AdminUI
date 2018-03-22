<template>
  <div>
    <Sidebar />
    <Navbar />
    <MainContent v-if="$store.state.serverConnected" />
    <VirtualLayer />
    <Foot />
  </div>
</template>

<script> 
import { Navbar, MainContent, Sidebar, VirtualLayer, Foot } from './components/framework';

export default {
  name: 'Root',
  components: { Navbar, MainContent, Sidebar, VirtualLayer, Foot },
  mounted() {
    let _self = this;
    this.$eventHub.$on("dashboardUpdate", function (json) {
      if (json) {
        _self.data = json;
      }
    });
    this.$tools.connectServer(_self);
  },

  methods: {
  }
}
</script>