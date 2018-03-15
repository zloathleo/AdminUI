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
    }

}