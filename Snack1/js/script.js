// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt('Inserisci il primo numero:'));
var numero2 = parseInt(prompt('Inserisci il secondo numero:'));

console.log(numero1);
console.log(numero2);

if (numero1 > numero2){
  console.log('è maggiore il numero 1 in quanto è ', numero1);
}
else if (numero2 > numero1){
  console.log('è maggiore il numero 2 in quanto è ', numero2);
}
else {
  console.log('PARI');
}
