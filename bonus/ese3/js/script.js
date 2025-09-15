/**
 * Chiedi all'utente il suo nome e stampa in console la stringa "ciao <nome_utente>".
 * 
 * RACCOLTA DATI
 * 
 * chiedere all'utente il suo nome
 * 
 * ESECUZIONE LOGICA
 * 
 * generare il messaggio
 * 
 * 
 * OUTPUT DEL RISULTATO
 * 
 * stampare il risultato ottenuto
 */

const firstName = prompt("Inserisci il tuo nome:");

const message = `Ciao <${firstName}>`;

console.log(message);