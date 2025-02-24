# Esercizio: Biglietto del treno
### passaggi:
#### Chiedere l'input all'utente :
- chiedere all'utente il numero di chilometri che desidera percorrere e inserirlo in una variabile
- chiedere all'utente l'età e inserirlo in una variabile
#### Calcolare il prezzo del biglietto :
- la tariffa è €0,21 / km
- creare una variabile con il prezzo intero
#### Eventuale sconto :
- SE l'età del passeggero è inferiore a 18 anni
    - applicare al prezzo intero uno sconto del 20% e inserirlo in una variabile
- SE l'età del passeggero è superiore a 65 anni
    - applicare al prezzo intero uno sconto del 40% e inserirlo in una variabile
- ALTRIMENTI il prezzo rimane invariato
#### Aggiustare il prezzo e verificare autenticità dell'output :
- utilizzare il formato con massimo due decimali
##### Output :
- SE il numero di chilometri da percorrere O l'età dell'utente !== number
    - far apparire a schermo "dati inseriti non validi"
- ALTRIMENTI far apparire a schermo "il prezzo del biglietto è: {prezzo}"