/**
 * Chiedi due numeri all’utente e poi chiedi se vuole "somma" o "differenza". 
 * Stampa il risultato corrispondente.
 * 
 * RACCOLTA DATI
 * 
 * Chiedere all'utente il primo numero
 * chiedere all'utente il secondo numero
 * chiedere all'utente l'operazione da eseguire
 * 
 * 
 * ESECUZIONE LOGICA
 * 
 * Se (operazione scelta è SOMMA)
 *  allora sommare i due numeri
 *  salvare il risultato
 * Altrimenti
 *  sottrarre il secondo numero al primo
 *  salvare il risultato
 * 
 * 
 * OUTPUT DEL RISULTATO
 * 
 * stampare il risultato dell'operazione seguita
 */
const debug = true;

const firstNumberStr = prompt("Inserisci il primo numero: ");
debug && console.log("[DEBUG] firstNumberStr: ", firstNumberStr);
const secondNumberStr = prompt("Inserisci il secondo numero: ");
debug && console.log("[DEBUG] secondNumberStr: ", secondNumberStr);
const operationStr = prompt("Scegli l'operazione: inserisci 1 per fare la SOMMA, inserisci 2 per fare la DIFFERENZA")
debug && console.log("[DEBUG] operationStr: ", operationStr);

if (!firstNumberStr || !secondNumberStr || !operationStr) {
    console.log(`[ERR] i valori inseriti non sono validi`);
} else {
    const firstNumber = parseInt(firstNumberStr);
    debug && console.log("[DEBUG] firstNumber: ", firstNumber);
    const secondNumber = parseInt(secondNumberStr);
    debug && console.log("[DEBUG] secondNumber: ", secondNumber);
    const operation = parseInt(operationStr);
    debug && console.log("[DEBUG] operation: ", operation);

    let result = 0;

    let message = "";

    if (operation === 1) {
        result = firstNumber + secondNumber;
        debug && console.log("[DEBUG] Somma result: ", result);
        message = `Il risultato della SOMMA tra ${firstNumber} e ${secondNumber} è ${result}`
    } else if (operation === 2) {
        result = firstNumber - secondNumber;
        debug && console.log("[DEBUG] Sottrazione result: ", result);
        message = `Il risultato della DIFFERENZA tra ${firstNumber} e ${secondNumber} è ${result}`
    } else {
        console.log("Operazione scelta non valida!!! RICARICARE LA PAGINA");
    }

    console.log(message);

}
