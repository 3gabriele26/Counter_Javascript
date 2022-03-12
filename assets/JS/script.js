/* VARIABLE SECTION */

let counterNumber = 0; //vairabile che rappresenta il valore del counter
let widthPage;

/* BUTTON/INPUT SECTION */

const counter = document.querySelector('.number-view'); //costante relativa alla modifica del valore del counter
const minusButton = document.querySelector('.minus'); // costante relativa al bottone di decremento del valore del counter
const plusButton = document.querySelector('.plus'); // costante relativa al bottone di incremento del valore del counter
const resetButton = document.querySelector('.reset'); //costante relativa al bottone di reset, riporta il valore del counter a zero
const textInput = document.querySelector('.personalized-input'); //costante relativa all spazio in cui scrivere il numero desiderato
const textInputButton = document.querySelector('.personalizd-input-button'); //costante relativa al bottone del numero personalizzato

/* FUNCTION LISTENER SECTION */

window.addEventListener('resize', () => {
  widthPage = document.documentElement.clientWidth;
  console.log(widthPage);
});

counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`; //imposta come valore di partenza del counter, pari allo zero


minusButton.addEventListener('click', () => { //funzione che decrementa il valore del counter quando si clicca sul pulsante -
  counterNumber--;
  counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`;
});


plusButton.addEventListener('click', () => { //funzione che incrementa il valore del counter quando si clicca sul pulsante +
  counterNumber++;
  counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`;
});


textInputButton.addEventListener('click', () => { //funzione che regola il funzinamento dell'inserimento di un numero personalizzato nel counter
  if(textInput.value == ' '){
    counterNumber = 0;
    counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`; //imposta come valore di partenza del counter, pari allo zero
    textInput.value = ' ';
  }else{
    counterNumber = textInput.value;
    counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`; //imposta come valore di partenza del counter, pari allo zero
    textInput.value = ' ';
  }
});


resetButton.addEventListener('click', () => { //funzione che regola il funzionamento del bottone che riporta a zero il valore del counter
  counterNumber = 0;
  counter.innerHTML =`<h1 id="counter">${counterNumber}</h1>`;
});
