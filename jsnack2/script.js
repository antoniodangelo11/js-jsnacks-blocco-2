/*2) snack 2.2
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.*/


// Lista di Nomi
let firstName = [
    'Antonio',
    'Gary',
    'Lamberto',
    'Andrea',
    'Vincenzo',
    'Paolo',
    'Antonino',
];

// Lista di Cognomi
let lastName = [
    'Rossi',
    'Alonso',
    'Minardi',
    'Randazzo',
    'Zauri',
    'Bastoni',
    'Acerbi',
];

// Falsa lista vuota
let randomName;
let randomSurname;
let falseList = [];

for (let i = 0; i < 7; i++) {
    randomName = firstName[Math.floor(Math.random() * firstName.length)];
    randomSurname = lastName[Math.floor(Math.random() * lastName.length)];
    // Qui pushiamo il risultato nella console
    falseList.push({firstName: randomName, lastName: randomSurname});
}

console.log('Lista Random:', falseList);