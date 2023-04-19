/*1) snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

/*
Creaiamo l'array vuoto myArr
FOR per 6 volte
    chiedi un numero all'utente e salviamolo in num
    SE (num % 2 == 1)
        puschiamo il numero nell'array my Arr
    FINE SE
FINE CICLO
*/

let num;
let myArr = [];


for (let i = 0; i < 6; i++) {
    num = parseInt(prompt('Inserisci un numero'));

    if (num % 2 == 1) {
        console.log('dispari', num);
        myArr.push(num);
    }
    
}

console.log('MyArr', myArr);