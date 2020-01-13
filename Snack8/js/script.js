// Snack8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numeroUtente = prompt('Inserisci un numero di 4 cifre:');
var numeroUtenteArray= [];
numeroUtenteArray = numeroUtente.split('');
console.log(numeroUtenteArray);
var somma = 0;
for (var i = 0; i < numeroUtenteArray.length; i++) {
  somma = somma + parseInt(numeroUtenteArray[i]);
}
console.log(somma);
