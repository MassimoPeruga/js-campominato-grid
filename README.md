# Griglia Prato Fiorito

Questo programma genera una griglia di celle numerate quando l'utente preme il pulsante "Play". Se l'utente clicca su una cella, questa viene evidenziata e viene mostrato il numero della cella nella console del browser.

1. Viene definita una funzione che accetta tre parametri: il tipo di elemento HTML da creare, un array di classi da aggiungere all'elemento, e il contenuto testuale dell'elemento.

2. Viene aggiunto un event listener al bottone 'play': quando questo bottone viene cliccato, inizia l'esecuzione di una serie di operazioni:

    1. Scompare il messaggio visualizzato.

    4. Vengono rimosse tutte le celle esistenti all'interno della griglia.

    5. Vengono generate nuove celle all'interno della griglia, ciascuna contenente il proprio numero corrispondente.

    6. Viene aggiunto un event listener a tutte le celle all'interno della griglia. Quando una cella viene cliccata, cambia colore e viene stampato il numero della cella cliccata nella console del browser.

