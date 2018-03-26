//electron_renderer.js
try {
    if (require) {
        const ipcRenderer = require('electron').ipcRenderer;

        var ipc_client_close = function (event) {
            ipcRenderer.send('ipc_client_close', event);
        }

        var ipc_client_restore = function (event) {
            ipcRenderer.send('ipc_client_restore', event);
        }

        var ipc_client_max = function (event) {
            ipcRenderer.send('ipc_client_max', event);
        }

        globle_is_electron = true;
    } else {
        globle_is_electron = false;
    }
} catch (err) {
    globle_is_electron = false;
}
