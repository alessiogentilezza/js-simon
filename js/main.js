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

let numberBlacklist = []; //qui ci finiscono tutti i numeri già usciti

for (let i = 0; i < 5; i++) {
    const newValidRandomNumber = generateUniqueRandomNumber(numberBlacklist, 1, 50);
    numberBlacklist.push(newValidRandomNumber);
}

for (let i = 0; i < 5; i++) {
    console.log(numberBlacklist[i]);
}

function generateUniqueRandomNumber(blacklist, min, max) {
    let isValidNumber = false;
    let randomNumber;
    while (!isValidNumber) {
        randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }
    return randomNumber;
}


