/*1) snack 1.5:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

let num;
let myArr = [];


for (let i = 0; i < 6; i++) {
    num = parseInt(prompt('Inserisci un numero'));

    if (num % 2 == 0) {
        console.log('pari', num);
    } 
    
    else if (num % 2 == 1) {
        console.log('dispari', num);
        parseInt(myArr.push(num));
    }
    
}

console.log('MyArr', myArr);