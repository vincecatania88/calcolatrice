// Calcolatrice
let numeroCorrente = '';
let resultCalcolatrice = 0;
let operazione = null; // Memorizza l'operazione

const numeri = document.querySelectorAll('.numero');
const operatori = document.querySelectorAll('.operatore');

numeri.forEach(button => {
    button.addEventListener('click', function() {
        numeroCorrente += button.value; // Aggiunge il valore del bottone numero alla variabile numeroCorrente
        document.getElementById('risultatoCalcolatrice').innerHTML = numeroCorrente; // Mostra il numero premuto
    });
});

operatori.forEach(button => {
    button.addEventListener('click', function() {
        if (numeroCorrente !== '') { // Memorizza il numero corrente
            if (resultCalcolatrice === 0) {
                resultCalcolatrice = parseFloat(numeroCorrente); // Converte il numero corrente in float
            } else if (operazione) {
                resultCalcolatrice = calcolaRisultato(resultCalcolatrice, parseFloat(numeroCorrente), operazione);
            }
        }
            numeroCorrente = ''; // Azzera il numero corrente per l'input successivo
            operazione = button.value; //memorizza l'operazione
            document.getElementById('risultatoCalcolatrice').innerHTML = resultCalcolatrice.toFixed(2);
    });
});

document.getElementById('virgola').addEventListener('click', function () {
    // Aggiungi il punto solo se non è già presente in numeroCorrente
    if (!numeroCorrente.includes('.')) {
        if (numeroCorrente === '') {
            // Se numeroCorrente è vuoto, inizia con "0."
            numeroCorrente = '0.';
        } else {
            numeroCorrente += '.'; // Aggiunge il punto
        }
        document.getElementById('risultatoCalcolatrice').innerHTML = numeroCorrente; // Aggiorna il display
    }
});

document.getElementById('uguale').addEventListener('click', function () {
    if (numeroCorrente != '' && operazione !== null){
        resultCalcolatrice = calcolaRisultato(resultCalcolatrice, parseFloat(numeroCorrente), operazione);
        numeroCorrente = '';
        operazione = null;
        document.getElementById('risultatoCalcolatrice').innerHTML = resultCalcolatrice.toFixed(2);
    }
});

document.getElementById('clear').addEventListener('click', function (){
    numeroCorrente = '';
    resultCalcolatrice = 0; //Azzera
    operazione = null;
    document.getElementById('risultatoCalcolatrice').innerHTML = '0'; //Mostra 0 a video
});

function calcolaRisultato (num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num2 !== 0 ?  num1 / num2:
                'Errore';
            default:
                return num1;
        }
}

