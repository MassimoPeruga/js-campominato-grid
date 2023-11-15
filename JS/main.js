'use strict';

// Creazione delle celle
function createElement(tag, classes, content) {
    function addClasses(element, classes) {
        for (let i = 0; i < classes.length; i++) {
            element.classList.add(classes[i]);
        }
    }
    const element = document.createElement(tag);
    addClasses(element, classes);
    element.textContent = content;
    return element;
}

// Gestione del click su play
document.getElementById('play').addEventListener('click', function () {
    // Pulisci la console
    console.clear();

    const grid = document.getElementById('ms_griglia');
    const messaggio = document.getElementById('messaggio');
    const difficulty = document.getElementById('mode').value;

    // Nascondi il messaggio visualizzato
    if (!messaggio.classList.contains('d-none')) {
        messaggio.classList.add('d-none');
    }
    // Rimuovi tutte le celle esistenti
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Associa il numero di righe e colonne alla difficoltà
    let rows, cols;

    if (difficulty === 'easy') {
        rows = cols = 7;
    } else if (difficulty === 'medium') {
        rows = cols = 9;
    } else if (difficulty === 'hard') {
        rows = cols = 10;
    } else {
        rows = cols = 9; // Valore di default se la difficoltà non è riconosciuta
    }

    // Richiamo la funzione di creazione delle celle in base alla difficoltà
    for (let i = 1; i <= rows * cols; i++) {
        const cellElement = createElement('div', ['ms_cella', difficulty], i);
        cellElement.addEventListener('click', function () {
            cellElement.classList.add('ms_clicked');
            console.log("Ho cliccato su:", i);
        });
        grid.appendChild(cellElement);
    }

    // grid.addEventListener('click', function (event) {
    //     event.target.classList.add('ms_clicked');
    //     const cellNumber = Number(event.target.textContent);
    //     console.log("Ho cliccato su:", cellNumber);
    // });
});
