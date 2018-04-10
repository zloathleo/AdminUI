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

    toastrError: function (_dispatch, errorMsg) {
        let _err = this.formatError(_dispatch);
        toastr.options.timeOut = -1;
        toastr.error(errorMsg + '<br/>' + _err);
    },

    initServer: function (_myfetch, _mem, _succ, _fault) {
        let _self = this;
        _myfetch.fetch("/products", { method: 'GET', loadingMessage: "init server" }, function (_products) {

            _products.rows.forEach(function (_product) {
                _mem.state.products[_product.name] = _product;
            });
            _self.initConfig(_myfetch, _mem, _succ, _fault);

        }, function (_errDispatch) {
            _mem.commit('changeServerConnected', false);
            _self.toastrError(_errDispatch, 'connect server fault.');
            _mem.commit("changeInitConfig", 1);
            _mem.commit('changeServerInit', 0); 
            if (_fault) {
                _fault(_errDispatch);
            }
        });
    },

    initConfig(_myfetch, _mem, _succ, _fault) {
        let _self = this;
        _myfetch.fetch("/configs", { method: 'GET', loadingMessage: "init server" }, function (_configs) {
            _mem.commit('changeServerConnected', true);

            if (_configs.product && _configs.com) {
                let _currentProduct = _mem.state.products[_configs.product];
                _currentProduct.isCurrent = true;
                _mem.commit('changeCurrentProduct', _currentProduct);
                _mem.commit('changeCurrentCom', _configs.com);
                _mem.commit('changeServerInit', 1);

                _self.toastrSuccess('connect server success.');
                if (_succ) {
                    _succ();
                }
            } else {
                _mem.commit('changeServerInit', 0);
            }

        }, function (_errDispatch) {
            _mem.commit('changeServerConnected', false);
            _self.toastrError(_errDispatch, 'connect server fault.');
            _mem.commit("changeInitConfig", 1);
            _mem.commit('changeServerInit', 0);
            if (_fault) {
                _fault(_errDispatch);
            }

        });
    },

    connectServer: function (_vue, _succ, _fault) {
        this.initServer(_vue.$myfetch, _vue.$mem, _succ, _fault);
    },

    back: function (_vue) {
        let _lastRouteName = _vue.$store.state.lastRouteName;
        if (_lastRouteName) {
            _vue.$router.push({ name: _lastRouteName });
        } else {
            _vue.$router.push({ name: 'home' });
        }
    },

    getChannelColor: function (_status) {
        if (_status === 0) {
            return "#62c462";
        } else if (_status === 1) {
            return "#ee5f5b";
        } else if (_status > 1) {
            return "#f89406";
        }
        return "#7A8288";
    },  


}