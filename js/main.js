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
const risultati = document.getElementById("risultati");

// array numeri generati
let numeriCasuali = [];

// array numeri inseriti
let numeriInseriti = [];

// array numeri diversi
let diversi = [];

// array numeri inseriti
let uguali = [];



//ciclo per generare i "5" numeri

for (let i = 0; i < 5; i++) {
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

    let numeriVisti;

    for (let i = 0; i < numeriCasuali.length; i++) {
        numeriVisti = parseInt(prompt('Inserisci i numeri che hai appena visto'));
        numeriInseriti.push(numeriVisti);
    }

    for (let i = 0; i < numeriCasuali.length; i++) {
        if (numeriInseriti.includes(numeriCasuali[i])) {
            uguali.push(numeriCasuali[i]);
        } else {
            diversi.push(numeriCasuali[i]);
        }
    }

    console.log("numeriCasuali: " + numeriCasuali);
    console.log("numeriInseriti: " + numeriInseriti);
    console.log("Numeri uguali: " + uguali);
    console.log("Numeri diversi: " + diversi);

    //risultati nella pagina html
risultati.innerHTML = `NumeriInseriti: ${numeriInseriti}<br> Numeri Uguali: ${uguali}<br>Numeri Diversi ${diversi}<br>`;

}

