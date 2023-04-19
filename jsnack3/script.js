/*3) snack 2.3
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

const numbers = [
    5, //0
    10, //1
    15, //2
    20, //3
    25, //4
    30, //5
];
console.log(numbers);

let oddNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    
    if (i % 2 == 1) {
        oddNumbers += numbers[i];
    }
}

console.log(`La somma degli elementi in posizione dispari dell'array è:`, oddNumbers);