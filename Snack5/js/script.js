// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

// ciclo for

var numeri = [];
var numeoUtente
for (var i = 0; i < 6; i++) {
  numeroUtente = parseInt(prompt('CICLO FOR inserisci il numero:'));
  // // forma contratta
  if (numeroUtente % 2 != 0){
    numeri.push(numeroUtente)
  }
  // forma estesa
  // var resto = numeroUtente %2
  // if (resto != 0){
  //   numeri.push(numeroUtente)
  // }
}
console.log('CICLO FOR' + ' ' + numeri);

// ciclo while

var numeri2 = [];
var numeroUtente2;
var j = 0;
while (j < 6) {
  numeroUtente2 = parseInt(prompt('CICLO WHILE inserisci il numero:'));
  var resto2 = numeroUtente2 %2;
  if (resto2 != 0){
    numeri2.push(numeroUtente2)
  }
  j++
}
console.log('CICLO WHILE' + ' ' + numeri2);
