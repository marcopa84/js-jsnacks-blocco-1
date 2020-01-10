// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var volte = parseInt(prompt('inserisci il numero di cubi che vuoi stampare'));


for (var i = 1; i <= volte; i++) {
  console.log(Math.pow(i, 3));
}
