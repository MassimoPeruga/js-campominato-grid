'use strict';

function createElement(tag, classes, content) {
    const element = document.createElement(tag);
    element.classList.add(classes);
    element.textContent = content;
    return element;
}

document.getElementById('play').addEventListener('click', function () {
    // Pulisci la console
    console.clear();

    const grid = document.getElementById('ms_griglia');
    const messaggio = document.getElementById('messaggio');
    if (!messaggio.classList.contains('d-none')) {
        messaggio.classList.add('d-none');
    }
    // Rimuovi tutte le celle esistenti
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    for (let i = 1; i <= 100; i++) {
        const cellElement = createElement('div', ['ms_cella'], i);
        grid.appendChild(cellElement);
    }

    grid.addEventListener('click', function (event) {
        event.target.classList.add('ms_clicked');
        const cellNumber = Number(event.target.textContent);
        console.log("Ho cliccato su:", cellNumber);
    }
    );
});
