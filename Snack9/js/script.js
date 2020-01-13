// Snack 9

// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi

// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var messaggiArray = ['Oggi troverai una cosa dimenticata','Ciò che è fatto è fatto', 'Il buon giorno si vede dal mattino', 'Sicuro di aver chiuso il gas?', 'Chi semina vento raccoglie tempesta', 'Il mattino ha l\'\oro in bocca', 'Tanto va la gatta al lardo che ci lascia lo zampino']

console.log(messaggiArray);

// for (var i = 0; i < messaggiArray.length; i++) {
//   console.log(messaggiArray[i]);
//   var m = 0;
//   m = getRandomIntInclusive(0, messaggiArray.length -1)
//   var messaggioEstratto = messaggiArray[m];
//   console.log(messaggioEstratto);
// }

var m = 0;
m = getRandomIntInclusive(0, messaggiArray.length -1);

console.log(messaggiArray[m]);

var messaggioEstratto = messaggiArray[m];
document.getElementById('messaggio').innerHTML = (messaggioEstratto);

// Funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
