export default {
    //处理<>&"
    html2Escape: function (str) {
        return str.replace(/[<>&"]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]; });
    },

    formatError: function (_dispatch) {
        if (typeof _dispatch.err === "string") {
            //网络错误
            return this.html2Escape(_dispatch.err);
        } else {
            return this.html2Escape(_dispatch.json.error);
        }
    },

    toastrSuccess: function (msg) {
        toastr.options.timeOut = 3000;
        toastr.success(msg);
    },

    connectServer: function (_vue) {
        _vue.$myfetch.fetch("/products", { method: 'GET' }, function (json) {
            json.rows.forEach(function (_product) {
                _vue.$mem.products[_product.name] = _product;
            });
            _vue.$store.commit('changeServerConnected', true);
        }, function (_errDispatch) {
            _vue.$store.commit('changeServerConnected', false);
        });
    },

    toastrError: function (_dispatch, errorMsg) {
        let _err = this.formatError(_dispatch);
        toastr.options.timeOut = -1;
        toastr.error(errorMsg + '<br/>' + _err);
    },

    getChannelColor: function (_status) {
        if (_status == 0) {
            return "#62c462";
        } else if (_status == 1) {
            return "#ee5f5b";
        } else if (_status > 1) {
            return "#f89406";
        }
        return "#7A8288";
    },

    parseComplexState(_statusDex) {
        let _stateValue = {
            s_deviceOnoff: _statusDex & 1,

            // ch1lineOnoff: _statusDex & 1,
            s_ch1Dis: _statusDex & 2,
            s_ch1Alarm: _statusDex & 4,
            s_ch1FlameOnoff: _statusDex & 8,

            // ch2lineOnoff: _statusDex & 64,
            s_ch2Dis: _statusDex & 128,
            s_ch2Alarm: _statusDex & 256,
            s_ch2FlameOnoff: _statusDex & 512,

            s_ch1Change: _statusDex & 4096,
            s_ch2Change: _statusDex & 8192,
            s_selftest: _statusDex & 16384,
            s_version: _statusDex & 32768,
        }

        const colorGreen = "#62c462";//green 
        const colorRed = "#ee5f5b";//red 
        const colorGray = "#7A8288";//gray
        const colorYellow = "#f89406"; //yellow

        if (_stateValue.s_deviceOnoff == 1) {
            //online
            _stateValue.s_deviceColor = colorGreen;
            _stateValue.s_deviceMessage = "OnLine";
        } else {
            //offline
            _stateValue.s_deviceColor = colorGray;
            _stateValue.s_deviceMessage = "OffLine";

            _stateValue.s_ch1Color = colorGray;
            _stateValue.s_ch1Message = "OffLine";

            _stateValue.s_ch2Color = colorGray;
            _stateValue.s_ch2Message = "OffLine";

            return _stateValue;
        }

        if (_stateValue.s_ch1Dis == 0) {
            //disable 灰
            _stateValue.s_ch1Color = colorGray;
            _stateValue.s_ch1Message = "Disable";
        } else {
            if (_stateValue.s_ch1Alarm > 0) {
                //alarm 黄色
                _stateValue.s_ch1Color = colorYellow;
                _stateValue.s_ch1Message = "Alarm";
            } else {
                if (_stateValue.s_ch1FlameOnoff > 0) {
                    //有火 红色
                    _stateValue.s_ch1Color = colorRed;
                    _stateValue.s_ch1Message = "FlameOn";
                } else {
                    //无火 绿色
                    _stateValue.s_ch1Color = colorGreen;
                    _stateValue.s_ch1Message = "FlameOFF";
                }
            }
        }

        if (_stateValue.s_ch2Dis == 0) {
            _stateValue.s_ch2Color = colorGray;
            _stateValue.s_ch2Message = "Disable";
        } else {
            if (_stateValue.s_ch2Alarm > 0) {
                _stateValue.s_ch2Color = colorYellow;
                _stateValue.s_ch2Message = "Alarm";
            } else {
                if (_stateValue.s_ch2FlameOnoff > 0) {
                    //有火
                    _stateValue.s_ch2Color = colorRed;
                    _stateValue.s_ch2Message = "FlameOn";
                } else {
                    _stateValue.s_ch2Color = colorGreen;
                    _stateValue.s_ch2Message = "FlameOFF";
                }
            }
        }

        return _stateValue;
    }

}