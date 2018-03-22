<template>
  <div class="justify-content-center device-item cursor-pointer hvr-fade" v-on:click="clickItem">
    <span class="badge badge-pill badge-primary device-name">{{ initData.addr }}</span>
    <div class="device-channel" :style="{color:getChannelColor(initData.chs,_index)}" v-for="_index in $store.state.currentProduct.channel_num">
      <span class="fa fa-fire channel-icon" aria-hidden="true"></span>
      <span class="channel-display">CH{{_index}}</span>
    </div>
  </div>
</template>

<script> 
export default {
  name: 'DeviceItem',
  props: {
    initData: Object,
  },
  methods: {
    clickItem: function (event) {
      event.stopPropagation();
      this.$store.commit('changeDeviceName', this.initData.name);
      this.$router.push({ path: '/detail' });
    },
    getChannelColor: function (_chs, _index) {
      let _ch = _chs[_index - 1];
      return this.$tools.getChannelColor(_ch.status);
    }
  }
}
</script>

<style scoped lang="less">
.device-item {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0.5rem;

  .device-channel {
    width: 100%;
    text-align: center;
  }
  .channel-icon {
    font-size: 1rem;
  }

  .channel-display {
    font-size: 0.5rem;
  }
}

//≥768px ≥Medium
@media (min-width: 768px) {
  .device-item {
    .device-channel {
      padding-right: 0;
      padding-left: 0;

      -webkit-box-flex: 0;
      -ms-flex: 0 0 33.33%;
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
    .channel-icon {
      font-size: 2em;
      width: 100%;
    }
    .device-name {
      position: fixed;
    }
  }
}
</style>