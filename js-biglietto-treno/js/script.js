/**
 * 
 * esercizio di oggi: calcolo del prezzo del biglietto del treno 
 * cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.

Prima di scrivere il codice impostate il ragionamento nei commenti!

Bonus:
Applicare de controlli sull'input dell'utente

 */

/**
 * RACCOLTA DATI
 * 
 * inizializzare la variabile "messaggio"
 * inizializzare la variabile "costo al kilometro"
 * richiedere i km da percorrere
 * richiedere l'età del passeggero
 * 
 * ESECUSIONE LOGICA
 * ## da lez: trasformare gli input in numeri
 * Calcolare il prezzo per kilometro
 * 
 * determinare lo sconto e preparare messaggio
 *  -20% se Age < 18
 *    0% se Age > 18 AND Age < 65
 *  -40% se Age > 65
 * 
 * 
 * OUTPUT
 * 
 * Stampare il messaggio finale in formato umano
 */

const ITEur = new Intl.NumberFormat('it-IT', {
    style: "currency",
    currency: 'EUR'
})

const kmCost = 0.21;
let basePrice = 0;
let finalPrice = 0;
let discount = 0;
let discountPercentage = 0;
let messagePrice = "Il prezzo del tuo biglietto è";
let messageDiscount = "Lo sconto applicato è pari a";

const journeyLengthStr = prompt("Inserisci i km da percorrere");
const travelerAgeStr = prompt("Inserisci la tua età")

if (!journeyLengthStr || !travelerAgeStr) {

    console.log("Valori non validi. Ricarica per riprovare");

} else if (isNaN(journeyLengthStr) || isNaN(travelerAgeStr)) {

    console.log("Inserisci dei numeri validi. Ricarica per riprovare");

} else {

    const travelerAge = parseInt(travelerAgeStr);
    const journeyLength = parseInt(journeyLengthStr); 100

    if (travelerAge > 65) {
        discountPercentage = 40
    } else if (travelerAge < 18) {
        discountPercentage = 20
    }

    basePrice = journeyLength * kmCost;
    discount = basePrice * discountPercentage / 100;
    finalPrice = basePrice - discount;

    console.log(`${messagePrice} ${ITEur.format(finalPrice)}`)
    console.log(`${messageDiscount} ${ITEur.format(discount)}`)

}


