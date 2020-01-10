// Il software deve chiedere per 5 volte all’utente di inserire un
// numero.
// Il programma stampa la somma di tutti i numeri
// inseriti.


// metodo for


// var somma = 0;
//
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('Inserisci i 5 numeri'));
//   console.log(numero);
//   somma = somma + numero;
// }
// console.log(somma);
//


// metodo while

var somma2 = 0;
var j = 0;
while (j < 5) {
  var numero2 = parseInt(prompt('Inserisci i 5 numeri'));
  console.log(numero2);
  somma2 = somma2 + numero2;
  j ++
}
console.log(somma2);
