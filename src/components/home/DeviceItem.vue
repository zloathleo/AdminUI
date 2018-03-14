<template>
  <div class="justify-content-center device-item cursor-pointer hvr-fade" v-on:click="clickItem">
    <span class="badge badge-pill badge-info device-name">{{ initData.addr }}</span>
    <div class="device-channel">
      <span class="fa fa-fire channel-icon" aria-hidden="true"></span>
      <span class="channel-display">CH1</span>
    </div>
    <div class="device-channel">
      <span class="fa fa-fire fa-2x channel-icon" aria-hidden="true"></span>
      <span class="channel-display">CH2</span>
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
      this.$router.push({ path: '/detail', query: { device: this.initData.name } });
    },
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
    padding: 0.5rem;
    .device-channel {
      text-align: center;
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