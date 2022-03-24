//DESCRIZIONE: Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Chiedere all'utente il numero di chilometri che vuole percorrere
const numeroKm = prompt('Quanti km vuoi percorrere?')

//Chiedere all'utente l'età
const eta = prompt('Quanti anni hai?')

//calcolo il prezzo totale:
//imposto i km
const euroAlKm = 0.21

const kmEffettuati = numeroKm * euroAlKm

console.log(kmEffettuati);

// sconto minorenni
if (eta < 18) {
    ((kmEffettuati * 20) / 100)
} else if (eta > 65) {
    ((kmEffettuati * 40) / 100)
} else {
    (kmEffettuati)
}

// Output del prezzo finale