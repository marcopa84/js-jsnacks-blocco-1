// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var parola1 = prompt('Inserici la prima parola:');
var parola2 = prompt('Inserici la seconda parola:');

console.log(parola1);
console.log(parola2);

if (parola1.length > parola2.length){
  console.log('è più lunga la parola 1 in quanto è', parola1);
}
else if (parola2.length > parola1.length){
  console.log('è più lunga la parola 2 in quanto è', parola2);
}
else {
  console.log('Lunghe uguali');
}
