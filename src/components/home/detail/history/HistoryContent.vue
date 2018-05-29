 <template>
    <line-chart :chart-data="chartData" :options="options"></line-chart>
</template>

<script>    
import LineChart from './LineChart.js'
export default {
    name: 'HistoryContent',
    components: {
        LineChart
    },
    data() {
        return {
            chartData: null, 
            options: {
                height: 300, responsive: true, maintainAspectRatio: false
            }
        }
    },
    mounted() {
        // this.renderChart(this.chartData, this.chartOptions);

        let _device = this.$store.state.currentDeviceName;
        var currentTime = parseInt(new Date().getTime() / 1000 - 10 * 60);

        let _this = this;
        this.$myfetch.fetch("/values?dev=" + _device + "&ch=" + 0 + "&tag=" + "ir" + "&begin=" + currentTime, { method: 'GET' }, function (json) {
            let rows = json.rows;
            if (rows && rows.length > 0) {
                _this.parseData(rows);
            }
        });
    },
    methods: {
        parseData: function (rows) {
            let chartLabelCount = 50;
            let sumReducer = function add(sumSoFar, row) {
                return sumSoFar + row.value;
            };
            let maxReducer = function max(preValue, curValue, index, array) {
                return preValue.value > curValue.value ? preValue : curValue;
            };
            let minReducer = function min(preValue, curValue, index, array) {
                return preValue.value > curValue.value ? curValue : preValue;
            };


            //总平均  1
            var _avg = rows.reduce(sumReducer, 0) / rows.length;
            console.log("_avg:" + _avg);
            //每个label 数据量
            let perLabelCount = parseInt(rows.length / chartLabelCount);

            //结果
            var labelArray = new Array();
            var resoutValueArray = new Array();

            let start = 0;
            let end = start + perLabelCount;
            for (let i = 0; i < chartLabelCount; i++) {


                let prows = rows.slice(start, end);

                var _prowsAvg = prows.reduce(sumReducer, 0) / prows.length;
                if (_prowsAvg > _avg) {
                    let _max = prows.reduce(maxReducer);
                    console.log("_max:" + _max.value);
                    resoutValueArray[i] = _max.value;
                    labelArray[i] = _max.timestamp;
                } else {
                    let _min = prows.reduce(minReducer);
                    console.log("_min:" + _min.value);
                    resoutValueArray[i] = _min.value;
                    labelArray[i] = _min.timestamp;
                }
                start = start + perLabelCount;
                end = end + perLabelCount;
            }

            this.chartData = {
                labels: labelArray,
                datasets: [
                    {
                        type: 'line',
                        label: this.$store.state.currentDeviceName + "-",
                        pointRadius: 0,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        data: resoutValueArray
                    }
                ]
            }

            //     this.chartData.datasets.data = resoutValueArray;
            //    this.$emit('data:changed');
            // this._data._chart.update()
        }
    }
}
</script>