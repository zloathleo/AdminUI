<template>
    <div class="col-sm-4">
        <div class="block">
            <div class="device-summary-bg" style="background-image: url('images/ezflame.png');">
                <div class="device-summary-bg-op">
                    <div class="text-center">
                        <i class="fa fa-3x fa-sun-o text-warning device-logo"></i>
                        <h3 class="h4 text-uppercase text-white device-name">{{initData.name}}</h3>
                    </div>
                </div>
            </div>
            <div class="summary-content">
                <div class="row text-center">
                    <div class="col-6">
                        <div class="text-value font-w300">{{initData.addr}}</div>
                        <div class="text-label text-muted">Addr</div>
                    </div>
                    <div class="col-6">
                        <div class="text-value font-w300">{{getStatusMsg()}}</div>
                        <div class="text-label text-muted">Status</div>
                    </div>
                </div>
            </div>
        </div>
        <Comment/>
    </div>
</template>

<script> 
import Comment from './Comment.vue';
export default {
    name: 'Summary',
    components: { Comment },
    props: {
        initData: Object,
    },
    methods: {
        getStatusMsg: function () {
            let currentStatus = this.$mem.state.currentStatus;
            if (currentStatus && currentStatus.value && currentStatus.value.status) {
                let _deviceValue = currentStatus.value.status;
                return _deviceValue === 1 ? "Online" : "Offline";
            }
        },
    },
}
</script>

<style scoped lang="less">
.device-summary-bg {
  background-color: #fff;
  background-position: 0 50%;
  -webkit-background-size: cover;
  background-size: cover;
  .device-summary-bg-op {
    background-color: rgba(0, 0, 0, 0.4);
    .device-logo {
      padding-top: 2rem;
    }
    .device-name {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }
  }
}
.summary-content {
  padding: 0.5rem 1.5rem 1rem;
  max-width: 100%;
  .text-value {
    font-size: 1rem;
  }
  .text-label {
    font-size: 0.8rem;
  }
}
</style>