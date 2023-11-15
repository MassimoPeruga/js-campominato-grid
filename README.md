# Griglia Prato Fiorito

Questo programma genera una griglia di celle numerate quando l'utente preme il pulsante "Play". Se l'utente clicca su una cella, questa viene evidenziata e viene mostrato il numero della cella nella console del browser.

1. Viene definita una funzione che accetta tre parametri: il tipo di elemento HTML da creare, un array di classi da aggiungere all'elemento, e il contenuto testuale dell'elemento.

2. Viene aggiunto un event listener al bottone 'play': quando questo bottone viene cliccato, inizia l'esecuzione di una serie di operazioni:

    1. Scompare il messaggio visualizzato.

    4. Vengono rimosse tutte le celle esistenti all'interno della griglia.

    5. Vengono generate nuove celle all'interno della griglia, ciascuna contenente il proprio numero corrispondente.

    6. Viene aggiunto un event listener a tutte le celle all'interno della griglia. Quando una cella viene cliccata, cambia colore e viene stampato il numero della cella cliccata nella console del browser.

## Bonus

Gestione della creazione dinamica di una griglia di celle in base alla difficoltà selezionata dall'utente.

1. Aggiunta di una funzione che accetta due argomenti: un elemento HTML e un array di classi. Tramite un ciclo for la funzione aggiunge le classi ricevute all'elemento HTML.

2. Modifica della funzione di creazione delle celle che utilizza lanuova funzione per aggiungere più classi invece di utilizzare classList.add.

3. Definizione di una variabile che tiene conto il valore della difficoltà selezionata.

6. In base al valore della difficoltà scelta dall'utente si assegna il numero di righe e colonne della griglia.

7. Modifica del ciclo for: 
    - in numero di celle create dipende dal prodotto delle righe per le colonne.
    - aggiunta all'array di classi da aggiungere alle celle di una classe con il nome corrispondente alla difficoltà selezionata
