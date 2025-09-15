/**
 * Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito.
 * Infine scrivi sulla pagina nomecognomecolorepreferito23
 * 
 * RACCOLTA DATI
 * 
 * chiedere all'utente il nome
 * chiedere all'utente il cognome
 * chiedere all'utente il colore preferito
 * 
 * ESECUZIONE LOGICA
 * 
 * 
 * OUTPUT DEL RISULTATO
 * output del risultato nella pagina
 * 
 */

const firstName = prompt("Inserisci il tuo nome: ");
const lastName = prompt("Inserisci il tuo cognome: ");
const colorPrefered = prompt("Inserisci il tuo colore preferito: ");

const elem = document.getElementById("root");
elem.textContent = `${firstName},${lastName},${colorPrefered}`;