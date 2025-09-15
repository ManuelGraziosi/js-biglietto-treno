/**
 * Chiedi all'utente la sua età e comunichiamo l'anno di nascita.
 * 
 * RACCOLTA DATI
 * 
 * chiedere all'utente la sua età
 * 
 * ESECUZIONE LOGICA
 * 
 * calcolare l'anno corrente
 * sottrarre l'età all'anno corrente
 * salvare il risultato
 * 
 * 
 * OUTPUT DEL RISULTATO
 * 
 * stampare il risultato ottenuto
 */
const date = new Date();
const currentYear = date.getFullYear();
const userAgeStr = prompt("Inserisci la tua età:");

if (!userAgeStr) {
    console.log(`[ERR] i valori inseriti non sono validi`);
} else {

    const userAge = parseInt(userAgeStr);
    const birthYear = currentYear - userAge;

    console.log("Il tuo anno di nascita è: ", birthYear);
}
