<template>
    <div class="block">
        <div class="bg-primary ribbon-box text-uppercase">CH1</div>
        <div class="row">
            <div class="col-12">
                <ul class="property-list ribbon-box-paddomh">
                    <li class="detail-item-li">
                        <span>FC</span>
                        <span class="value">{{initData.fc}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>ON_TH</span>
                        <span class="value">{{initData.ac_on_th}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>ON_TL</span>
                        <span class="value">{{initData.ac_on_tl}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>MAX</span>
                        <span class="value">{{initData.max}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>MIN</span>
                        <span class="value">{{initData.min}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>DC </span>
                        <span class="value">{{initData.dc}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>AC </span>
                        <span class="value">{{initData.ac}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>FREQ</span>
                        <span class="value">{{initData.freq}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>TEMP</span>
                        <span class="value">{{initData.temp}} °C</span>
                    </li>
                    <li class="detail-item-li">
                        <span>FQ</span>
                        <span class="value">{{initData.fq}}%</span>
                    </li>
                    <li class="detail-item-li">
                        <div class="progress-bar" role="progressbar" :style="progressbarStyle" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>   
export default {
    name: 'Chan',
    props: {
        initData: Object,
    },
    data: function () {
        return {
            progressbarStyle: {
                width: this.initData.fq + "%",
                height: "18px"
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped lang="less">

</style>