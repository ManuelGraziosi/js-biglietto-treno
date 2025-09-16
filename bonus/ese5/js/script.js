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

const 