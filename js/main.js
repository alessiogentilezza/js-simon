/*

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma

*/

const tieniIlTempo = document.getElementById("tempo");

let numeriCasuali = []; //qui ci finiscono tutti i numeri già usciti

//ciclo per generare i "5" numeri

for (let i = 0; i < 6; i++) {
    const newValidRandomNumber = generateUniqueRandomNumber(numeriCasuali, 1, 50);
    numeriCasuali.push(newValidRandomNumber);
}
// ciclo per stampa dell'array con i "5" numeri generati

for (let i = 0; i < numeriCasuali.length; i++) {
    console.log(numeriCasuali[i]);
}

//funzione per generare i numeru casuali univoci

function generateUniqueRandomNumber(blacklist, min, max) {
    let isValidNumber = false;
    let randomNumber;
    while (!isValidNumber) {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }
    return randomNumber;
}

// function generateRandomNumber(min, max) {
//     const number = Math.floor(Math.random() * (max - min +1)) + min;
//     return number;
// }


//ripoto l'array nella pagina html

tieniIlTempo.innerHTML = numeriCasuali;


//Timer prima che scompaiano i numeri

setTimeout(displayNone, 5000);

function displayNone() {
    tieniIlTempo.classList.add('d-none');
}

//Inseriti i prompt per l'inserimento dei numeri

setTimeout(memory, 6000);

function memory() {
    let numeri;
    for (let i = 0; i < numeriCasuali.length; i++) {
        numeri = parseInt(prompt('Inserisci i numeri che hai appena visto'));
    }
    }

