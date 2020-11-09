/*Creare un oggetto che descriva
uno studente con le seguenti
proprietà: nome, cognome e età.
Stampare a schermo attraverso il
for in tutte le proprietà.*/

var studente ={
  'nome':'Pinco',
  'cognome': 'Pallino',
  'età': '22',
};

for( var info in studente){
  console.log('la proprietà '+ info + ' ha come valore: '+ studente[info]);
}

/* Creare un array di oggetti di
studenti. Ciclare su tutti gli
studenti e stampare per ognuno
nome e cognome */

var studentiArray =
[
  {
    'nome':'Pinco',
    'cognome': 'Pallino',
    'età': '22'
  },
  {
    'nome':'Piso',
    'cognome': 'Lino',
    'età': '28'
  }

];

console.log(studentiArray)

for(var i=0; i < studentiArray.length; i++){
  console.log('il nome dello studente è '+ studentiArray[i].nome);
  console.log('il cognome dello studente è '+ studentiArray[i].cognome);
}

/*Dare la possibilità all’utente attraverso
 3 prompt di aggiungere un nuovo oggetto
 studente inserendo nell’ordine: nome, cognome
 e età. */

 var nuovoStudente = {};

 nuovoStudente.nome = prompt('Inserisci il nome dello studente');
 nuovoStudente.cognome = prompt('Inserisci il cognome dello studente');
 nuovoStudente.età = parseInt(prompt("Inserisci l'età dello studente"));
 studentiArray.push(nuovoStudente);


 console.log(nuovoStudente);
 console.log(studentiArray);
