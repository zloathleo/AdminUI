export default {
    callUsertimeOut: 100,
    store: undefined,

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
            this.store.state.apiLoading = {
                status: 1,//1=loading
                loadingMessage: _opt ? _opt.loadingMessage : undefined,
                url: _url,
            };
        }

        fetch(_url, _opt)
            .then(function (response) {
                response.json().then(function (_json) {
                    // MCache.APICalling = false;
                    //ok 范围 200-299  
                    if (response.ok) {
                        this._timeoutCall(function () {
                            if (_then) {
                                _then(_json);
                            }
                            if (_opt.defaultEventDispatch !== false) {
                                this.store.state.apiLoading = {
                                    status: 0,//1=loading
                                    loadingMessage: undefined,
                                    url: undefined,
                                };
                            }
                        }.bind(this));
                    } else {
                        this._timeoutCall(function () {
                            let _dispatch = { err: response, json: _json };
                            this.store.state.apiLoading = {
                                status: -1,//1=loading
                                loadingMessage: undefined,
                                url: undefined,
                            };
                            if (_fault) {
                                _fault(_dispatch);
                            }
                        }.bind(this));
                    }
                }.bind(this));
            }.bind(this)).catch(function (err) {
                // MCache.APICalling = false;
                this._timeoutCall(function () {
                    let _dispatch = { err: "failt to connect " + _url };
                    this.store.state.apiLoading = {
                        status: -1,//1=loading
                        loadingMessage: undefined,
                        url: undefined,
                    };
                    if (_fault) {
                        _fault(_dispatch);
                    }
                }.bind(this));
            }.bind(this));
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