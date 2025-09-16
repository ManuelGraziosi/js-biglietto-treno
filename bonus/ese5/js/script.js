/**
 * Scrivi un programma che simula l’acquisto al minimarket.
 * 
 * Chiedi all’utente quale prodotto vuole acquistare:
 * "pane" → €1.50
 * "latte" → €1.20
 * "uova" → €2.60
 * 
 * Chiedi quante unità vuole acquistare.
 * 
 * Chiedi se possiede la tessera fedeltà ("si" o "no"). Se sì calcola lo sconto in base a queste regole:
 * Totale < 20€ → sconto 5%
 * Totale ≥ 20€ → sconto 10%
 * 
 * Stampa in console uno scontrino
 * 
 * RACCOLTA DATI
 * 
 * Chidere all'utente il prodotto che si vuole acquistare
 * Chiedere all'utente la quantità che si vuole acquistare
 * Chiedere all'utente se ha una tessera fedeltà
 * 
 * ESECUZIONE LOGICA
 * 
 * Calcolare il totale prima dello scondo
 * verificare possesso card
 * SE (si possiede una card)
 *  allora si verifica la quantità di sconto
 *  SE (TOT < 20€)
 *      sconto 5%
 *  altrimenti
 *      sconto 10%
 * Altrimenti
 *  sconto 0%
 * Calcolo del totale
 * 
 * OUTPUT DEL RISULTATO
 * 
 * Stampa in console del totale
 */

const productStr = prompt(`Scrivi il prodotto da acquistare:
    "pane" → €1.50
    "latte" → €1.20
    "uova" → €2.60`);
const quantityStr = prompt("Inserisci la quantità desiderata:");
const checkFidelityCard = prompt("Hai la carta fedeltà? (si/no)");

let productPrice = 0;
let discountPercentage = 0;

if (!productStr || !quantityStr || !checkFidelityCard) {
    console.log("ERRORE: dati inseriti non validi");
} else {

    // Definizione del prezzo del prodotto scelto
    if (productStr === "pane") {
        productPrice = 1.50;
    } else if (productStr === "latte") {
        productPrice = 1.20;
    } else if (productStr === "uova") {
        productPrice = 2.60;
    } else {
        throw new Error("ERR: scleta non valida. Ricarica la pagina");
    }

    // Calcolo del totale prima dello sconto
    const subTotal = productPrice * quantityStr;

    // Calcolo della percentuale di sconto
    if (checkFidelityCard === "si") {
        if (subTotal < 20) {
            discountPercentage = 5;
        } else {
            discountPercentage = 10;
        }
    } else if (checkFidelityCard === "no") {
        discountPercentage = 0
    } else {
        throw new Error("ERR2: scelta non valida. Ricarica la pagina");
    }

    // calcolo del totale in funzione dello sconto
    const discount = subTotal * discountPercentage / 100;
    const total = subTotal - discount;

    // Stampa dello scontrino
    console.log(`SCONTRINO
        ${quantityStr} * ${productPrice}€ -> ${subTotal}€
        ${productStr}
        SCONTO: ${discountPercentage}% -> ${discount}€
        TOTALE: ${total}€
        `)
}