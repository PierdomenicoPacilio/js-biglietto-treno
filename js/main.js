// Chiedere l'input all'utente :
// con number andiamo a rendere l'input in numero, se non è convertibile restituisce NaN
const numKm = Number ( prompt ("Quanti chilometri desideri percorrere?"));
const anniUtente = Number ( prompt ("Quanti anni hai?"));
// Calcolare il prezzo del biglietto :
let prezzoIntero = numKm * 0.21;
// Creare variabile prezzo finale :
let prezzoFinale = 0;
// Eventuale sconto :
if (anniUtente < 18){
    prezzoFinale = prezzoIntero - (prezzoIntero / 100 * 20)
} else if (anniUtente > 65){
    prezzoFinale = prezzoIntero - (prezzoIntero / 100 * 40)
} else {
    prezzoFinale = prezzoIntero
}
// Aggiustare il prezzo e verificare autenticità dell'output :
// Output:
if (isNaN(numKm) || isNaN(anniUtente) || numKm <= 0 || anniUtente <= 0){
    console.log(`informazioni fornite non valide.
        possibili motivazioni:
        - anni utente < 0
        - anni utente != number
        - numero chilometri < 0
        - numero di chilometri != number`)
} else{
    console.log(`Il prezzo finale per l'utente di età ${anniUtente} e distanza da percorrere di ${numKm}Km è di €${prezzoFinale.toFixed(2)}`)
}