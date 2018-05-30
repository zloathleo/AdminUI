<template>
    <div>
        <div class="mb-2">
            <input type="date" name="day" v-model="day" ref="inputDay" />
            <input type="time" name="begin" v-model="begin" ref="inputBegin" />
            <input type="time" name="end" v-model="end" ref="inputEnd" />
            <button class="btn btn-success my-2 my-sm-0" type="submit" v-on:click="clickSearch">Search</button>
        </div>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Device</th>
                    <th>Channel</th> 
                    <th>Timestamp</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row, index in rows">
                    <th scope="row">{{index}}</th>
                    <td>{{row.dev}}</td>
                    <td>{{row.ch}}</td> 
                    <td>{{row.timestamp}}</td>
                    <td>{{row.message}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>   
export default {
    name: 'Alarm',
    data: function () {
        let _now = new Date();
        let _day = this.$tools.dateFormat(_now, "yyyy-MM-dd");

        let _beginDate = new Date();
        _beginDate.setTime(_now.getTime() - 1000 * 60 * 10);

        let _begin = this.$tools.dateFormat(_beginDate, "hh:mm");
        let _end = this.$tools.dateFormat(_now, "hh:mm");
        return {
            day: _day,
            begin: _begin,
            end: _end,
            rows: undefined,
        }
    },
    mounted() {
        this.refreshData();
    },
    methods: {
        refreshData: function () {
            this.clickSearch();
        },
        clickSearch: function () {
            // let _device = this.$store.state.currentDeviceName;
            let _inputDay = this.$refs.inputDay.value;
            let _inputBegin = this.$refs.inputBegin.value;
            let _inputEnd = this.$refs.inputEnd.value;

            let begin = this.$tools.string2Date(_inputDay + " " + _inputBegin);
            let end = this.$tools.string2Date(_inputDay + " " + _inputEnd);

            var beginTime = parseInt(begin.getTime() / 1000);
            var endTime = parseInt(end.getTime() / 1000);

            let _this = this;
            this.$myfetch.fetch("/alarms?begin=" + beginTime + "&end=" + endTime, { method: 'GET' }, function (json) {
                _this.rows = json.rows;
            });
        }
    }
}
</script>