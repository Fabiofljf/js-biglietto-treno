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

const prezzoCorsa = numeroKm * euroAlKm
let prezzoFinale = prezzoCorsa

// sconto minorenni
const scontoMinorenni = 20 / 100;

//sconto over 65
const scontoOver = 40 / 100;

// Applico sconto
if (eta < 18) {
    prezzoFinale = prezzoCorsa - (prezzoCorsa * scontoMinorenni);
} else if (eta > 65) {
    prezzoFinale = prezzoCorsa - (prezzoCorsa * scontoOver);
} else {
    prezzoFinale = prezzoCorsa;
}


console.log('Il tuo prezzo da pagare è ' + prezzoFinale + ' euro');