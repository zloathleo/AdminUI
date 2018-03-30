export default {
    callUsertimeOut: 1000,
    store: undefined,
    mem: undefined,

    fetch: function (url, _opt, _then, _fault) {
        _opt.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        this._callFetch(this.store.state.serverhost + url, _opt, _then, _fault);
    },

    fetchUpdateFile: function (url, _opt, _then, _fault) {
        this._callFetch(this.store.state.serverhost + url, _opt, _then, _fault);
    },

    _timeoutCall(_then) {
        if (this.callUsertimeOut > 10) {
            setTimeout(function () {
                _then();
            }, this.callUsertimeOut);
        } else {
            _then();
        }
    },

    _callFetch(_url, _opt, _then, _fault) {
        if (_opt.defaultEventDispatch != false) {
            this.mem.commit('changeApiLoading', {
                status: 1,//1=loading
                loadingMessage: _opt.loadingMessage,
                url: _url,
            });
        }

        let _self = this;
        fetch(_url, _opt)
            .then(function (response) {
                response.json().then(function (_json) {
                    //ok 范围 200-299  
                    if (response.ok) {
                        _self._timeoutCall(function () {
                            if (_opt.defaultEventDispatch !== false) {
                                _self.mem.commit('changeApiLoading', {
                                    status: 0,//1=loading
                                    loadingMessage: _opt.loadingMessage,
                                    url: undefined,
                                });
                            }
                            if (_then) {
                                _then(_json);
                            }
                        });
                    } else {
                        _self._timeoutCall(function () {
                            let _dispatch = { err: response, json: _json };
                            _self.mem.commit('changeApiLoading', {
                                status: -1,//1=loading
                                loadingMessage: _opt.loadingMessage,
                                url: undefined,
                            });
                            if (_fault) {
                                _fault(_dispatch);
                            }
                        });
                    }
                });
            }).catch(function (err) {
                _self._timeoutCall(function () {
                    let _dispatch = { err: "failt to connect " + _url };
                    _self.mem.commit('changeApiLoading', {
                        status: -1,//1=loading
                        loadingMessage: _opt.loadingMessage,
                        url: undefined,
                    });
                    if (_fault) {
                        _fault(_dispatch);
                    }
                });
            });
    },

    download_file: undefined,

    downloadFile: function (url) {
        if (this.download_file == undefined) {
            var iframe = document.createElement("iframe");
            this.download_file = iframe;
            document.body.appendChild(this.download_file);
        }
        this.download_file.src = url;
        this.download_file.style.display = "none";
    }
}