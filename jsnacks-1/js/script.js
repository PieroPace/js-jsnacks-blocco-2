// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

const listName = ['Piero', 'Luca', 'Antonio', 'Mattia', 'Domenico', 'Erica', 'Nicola', 'Biagio', 'Arturo', 'Serena', 'Constantin', 'Daniele', 'Debora', 'Edoardo', 'Felice', 'Filippo', 'Florian', 'Francesco', 'Giuseppe', 'Lorenzo', 'Marius', 'Mario', 'Pasquale', 'Silvia', 'Simone', 'Paolo'];

const listSurname = ['Pace', 'Bianchi', 'Verdi', 'Rossi', 'Ferilli', 'Scotti', 'Zerbi', 'Mammuccari', 'De Filippi', 'Desantis', 'Sakara', 'Moccia', 'Intini', 'Santoro', 'Marra', 'Enzin', 'Cartin', 'Rodriguez', 'De Sica', 'Boldi', 'Verdone', 'Siani', 'Cutugno', 'Merluzzo'];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomName() {
    const randomName = listName[getRndInteger(1,listName.length - 1)];
    const randomSurname = listSurname[getRndInteger(1,listSurname.length - 1)];
    const randomInvited = randomName + ' ' + randomSurname;
    return randomInvited;
}

let numInvite = parseInt(prompt('Quanti invitati avrà la festa?'));
console.log(numInvite);

while (isNaN(numInvite) || numInvite > 500 || numInvite < 0) {
    numInvite = parseInt(prompt('VALORE NON VALIDO - Quanti invitati avrà la festa?'));
}

const invited = [];

while (invited.length < numInvite) {
    const invite = getRandomName();
    if (!invited.includes(invite)) {
        invited.push(invite);
    }
}

const ul = document.querySelector('.list');

for (let i = 0; i < invited.length; i++) {
    const element = invited[i];
    const li = document.createElement('li');
    li.innerHTML = element;
    ul.append(li);

    
}