<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Device</th>
                <th>Timestamp</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    </table>
</template>

<script>   
export default {
    name: 'Alarm',
    created() {
        this.refreshData();
    },
    methods: {
        refreshData: function () {
            //查询间隔 10分钟
            let period = 60 * 30;

            let begin = Math.round(new Date().getTime() / 1000) - period;
            this.$myfetch.fetch('/alarms?begin=' + begin, { method: 'GET' }, function (json) {
                console.log(json);
            });
        }
    }
}
</script>