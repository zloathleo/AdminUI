<template>
    <div class="row row-action-bar">
        <button type="button" class="offset-sm-4 col-6 col-sm-4 btn btn-primary" v-on:click="clickExportUsersettings">
            <i class="fa fa-download"></i>
            export usersettings
        </button>
        <label class="col-6 col-sm-4 btn btn-primary">
            <input v-on:change="selectFile" type="file" class="form-control-file" style="position:absolute;clip:rect(0 0 0 0);" aria-describedby="fileHelp">
            <i class="fa fa-upload"></i>
            import usersettings
        </label>
    </div>
</template>

<script> 
export default {
    name: 'ChanActionBar',
    props: {
        chanName: String,
    },
    methods: {
        clickExportUsersettings(_event) {
            let _device = this.$store.state.currentDeviceName;
            this.$myfetch.downloadFile('/templates/' + _device + '/' + this.chanName + '?type=u');
        },
        selectFile(_event) {
            let _self = this;
            let _device = this.$store.state.currentDeviceName;
            let _files = _event.currentTarget.files;
            if (_files && _files[0]) {
                var form = new FormData();
                form.set('type', "u");
                form.set('file', _files[0]);
                this.$myfetch.fetchUpdateFile('/templates/' + _device + '/' + this.chanName, { method: 'POST', loadingMessage: 'import usersettings...', body: form }, function (json) {

                    _self.$tools.toastrSuccess('import usersettings success.');
                    _self.$myfetch.fetch('/settings/' + _device + '?type=u', { method: 'GET' }, function (json) {
                        _self.$mem.commit('changeCurrentUserSettingsData', json);
                    }, function (_errDispatch) {
                        _self.$tools.toastrError(_errDispatch, 'read device ' + _device + ' usersettings fault.');
                        _self.$mem.commit('changeCurrentUserSettingsData', undefined);
                    });

                }, function (_errDispatch) {
                    _self.$tools.toastrError('import usersettings success.');
                });

            }
        },
    }
}
</script>

<style scoped lang="less">
.row-action-bar {
  //   padding-bottom: 0.5rem;
  button {
    padding: 0rem 0.5rem;
    font-size: 0.8rem;
    height: 21px;
  }
  label {
    padding: 0rem 0.5rem;
    font-size: 0.8rem;
  }
}
</style>