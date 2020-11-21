const { BrowserWindow } = require('electron').remote;
const path = require('path');

const button = document.getElementById('nuevaVentana')

button.addEventListener('click', (event) => {
    const modalPath = path.join('file://', __dirname, '/windows/modal.html');

    let modal = new BrowserWindow({
        width: 400,
        height: 320
    });

    modal.on('close', () => { modal = null });
    modal.loadURL(modalPath);
    modal.show();
});