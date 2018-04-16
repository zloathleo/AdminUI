<template>

    <div class="col-md-6 file">
        <div class="card" v-if="initData">
            <div class="card-header">{{initData.name}}</div>
            <div>
                <ul class="property-list">
                    
                    <li class="detail-item-li">
                        <span>Gain</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.gain" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>Freq</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.freq" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>Band</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.band" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>ON Threshold</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.thon" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>OFF Threshold</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.thoff" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>MAX</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.max" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>MIN</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.min" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>OTD</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.otd" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>FFRT</span>
                        <span class="value">
                            <input type="number" :disabled='$mem.state.isLogin == false' class="form-control" v-model.number="initData.ffrt" maxlength="6" size="6">
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script> 
export default {
    name: 'FileSFS1000',
    methods: {
    },
    props: {
        initData: Object,
    },
}
</script>

<style scoped lang="less">
.file {
  padding: 0 0.1rem 1rem;
  .card {
    background-color: #eee;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .card-header {
    padding: 0.2rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .value {
    width: 50%;
  }
}
@media (min-width: 768px) {
  .file {
    padding: 0 0.1rem;
  }
}
</style>