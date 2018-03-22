<template>

    <div class="col-md-6 file">
        <div class="card" v-if="initData">
            <div class="card-header">File A</div>
            <div>
                <ul class="property-list">
                    <li class="detail-item-li">
                        <span>FC (3-41 67-89)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.fc" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC Gain (1-200)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.ac_gain" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC ON_TH (0-1999)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.ac_on_th" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC ON_TL (0-1999)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.ac_on_tl" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC MAX (1-1999)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.max" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC MIN (0-1998)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.ac.min" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>OTD (1-6)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.public.otd" maxlength="6" size="6">
                        </span>
                    </li>
                    <li class="detail-item-li">
                        <span>FFRT (1-6)</span>
                        <span class="value">
                            <input type="number" :disabled='$store.state.isLogin == false' class="form-control" v-model.number="initData.public.ffrt" maxlength="6" size="6">
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script> 
export default {
    name: 'File',
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