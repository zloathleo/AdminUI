<template>
    <div class="chart" :id="insname" :data-percent="percent">
        <span>{{percent}}%</span>
    </div>
</template> 

<script> 
export default {
    name: 'ChanChart',
    props: {
        insname: String,
        percent: Number
    },
    mounted: function () {
        let _insName = this.insname;
        $('#' + _insName).easyPieChart({
            easing: 'easeOutBounce',
            animate: {
                duration: 700,
                enabled: true
            },
            barColor: '#F04124',
            trackColor: '#fff',
            scaleColor: '#d5d4d4',
            lineWidth: 5,
            size: 100,
            lineCap: 'circle'
        });

        let _chart = $('#' + _insName).data('easyPieChart');

        this.$watch("percent", (val) => {
            _chart.update(val);
        })
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.chart {
  text-align: center;
  span {
    position: absolute;
    top: 50%;
    left: 45%;
  }
}
</style>