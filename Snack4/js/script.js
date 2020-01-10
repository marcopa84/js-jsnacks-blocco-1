// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['marco', 'mario', 'giuseppe'];

var nomeUtente = prompt('inserisca il suo nome e verifichi se è invitato:').toLowerCase();

var messaggio = 'NON E INVITATO'

for (var i = 0; i < invitati.length; i++) {
  if ( nomeUtente == invitati[i]){
    messaggio = 'LEI E TRE GLI INVITATI'
  }
}

console.log(messaggio);
