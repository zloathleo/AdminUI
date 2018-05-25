 

<script>    
import { Bar } from 'vue-chartjs'
export default {
    name: 'HistoryContent',
    extends: Bar,
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        type: 'line',
                        label: this.$store.state.currentDeviceName + "-",
                        pointRadius: 0,
                        fill: false,
                        lineTension: 0,
                        borderWidth: 2,
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            },
            chartOptions: {
                height: 300, responsive: true, maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.chartOptions);
    }
}
</script>