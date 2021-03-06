const { BrowserWindow } = require('electron').remote;
const path = require('path');

const firstButton = document.getElementById('1erAFD');
const secondButton = document.getElementById('2ndAFD');

firstButton.addEventListener('click', (event) => {
    const afd1er = path.join('file://', __dirname, '/windows/Primer AFD/1erAFD.html');

    let ventana1 = new BrowserWindow({
        width: 690,
        height: 440,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    ventana1.on('close', () => { ventana1 = null });
    ventana1.loadURL(afd1er);
    ventana1.show();
});

secondButton.addEventListener('click', (event) => {
    const afd2nd = path.join('file://', __dirname, '/windows/Segundo AFD/2ndAFD.html');

    let ventana2 = new BrowserWindow({
        width: 690,
        height: 440,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            nodeIntegrationInWorker: true
        }
    });

    ventana2.on('close', () => { ventana2 = null });
    ventana2.loadURL(afd2nd);
    ventana2.show();
});