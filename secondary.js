const { BrowserWindow, dialog } = require('electron').remote;
const path = require('path');

const button = document.getElementById('verificar')
const automata = {
    estadoInicial: 1,
    estadoFinal: 2,
    transiciones: [{
            estado: 1,
            simbolo: 0,
            al_estado: 2
        },
        {
            estado: 2,
            simbolo: 0,
            al_estado: 2
        },
        {
            estado: 2,
            simbolo: 1,
            al_estado: 2
        }
    ]
}

button.addEventListener('click', (event) => {
    let cadena = document.getElementById('txtCadena').value;
    let estadoActual = automata.estadoInicial;
    let arrayCadena = cadena.split('');

    arrayCadena.forEach(simbolo => {
        console.log(simbolo);

        automata.transiciones.forEach(transicion => {
            if (transicion.estado == estadoActual && transicion.simbolo == simbolo) {
                estadoActual = transicion.al_estado;
            }
        });
    });

    dialog.showErrorBox('Error', 'La cadena no coincide con el lenguaje.')
    dialog.showMessageBox({
        buttons: ['Aceptar', 'Cancelar'],
        message: 'Cadena correcta'
    });
});