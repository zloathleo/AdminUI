<template>
    <div class="block">
        <div class="bg-primary ribbon-box text-uppercase">{{initData.name}}</div>
        <div class="row">
            <div class="col-12 col-md-4">
                <ul class="property-list ribbon-box-paddomh">
                    <li class="detail-item-li">
                        <span>GAIN</span>
                        <span class="value">{{initData.gain}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>TH_ON</span>
                        <span class="value">{{initData.thon}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>TH_OFF</span>
                        <span class="value">{{initData.thoff}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>MAX</span>
                        <span class="value">{{initData.max}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>MIN</span>
                        <span class="value">{{initData.min}}</span>
                    </li>

                </ul>
            </div>

            <div class="col-12 col-md-4">
                <ul class="property-list ribbon-box-paddomh">
                    <li class="detail-item-li">
                        <span>IR </span>
                        <span class="value">{{initData.ir}}</span>
                    </li>
                    <li class="detail-item-li">
                        <span>BAND </span>
                        <span class="value">{{initData.band}}</span>
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

                        <!-- <span class="value">{{initData.fq}}%</span> -->
                        <router-link :to="{name:'home.history',query: {ch: initData.name}}" append >
                            <span class="value">{{initData.fq}}%</span>
                        </router-link>
                    </li>

                </ul>
            </div>

            <div class="col-12 col-md-4 chart-panel">

                <div class="ribbon-box-paddomh">
                    <ChanChart :percent="initData.fq" :insname="'ChanChart' + indexData" />
                </div>
                <span>Flame Ratio</span>
            </div>
        </div>
    </div>
</template>

<script>   
import ChanChart from './ChanChart.vue';
export default {
    name: 'ChanSFS1000',
    components: { ChanChart },
    props: {
        initData: Object,
        indexData: Number
    },
    methods: {
    }
}
</script>

<style scoped lang="less">
.chart-panel {
  position: relative;
  text-align: center;
}
</style>