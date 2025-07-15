//Recupero gli elementi dal file html 
const countdown = document.getElementById(`countdown`)
const answersform = document.getElementById(`answers-form`)
const numberlist = document.getElementById(`anumber-list`)
const instructions = document.getElementById(`instructions`)
const message = document.getElementById(`message`)
const number = document.querySelectorAll(`number`)

//comincio con stabilire il countdown
//aggiungo una variabile timer che cominci da 10 
//devo permettere adesso al countdown di scalare i secondi
let timer = 10;

//se non metto timer prima che questo entri nell'intervallo non mi permette di vedere il primo numero scelto 

countdown.innerText = timer;
// for (let i = timer; i > 0; i--) {
//   timer--
//   console.log(timer)
// }

//con il ciclo for vedo in consolelog quello che voglio ottenere.
//creo la funzione che mi permette di decrementare il numero di timer
const timedown = setInterval(() => {
  timer--
  countdown.innerText = timer;
}, 1000);//definisco ogni quando tempo vengono fatte le iterazioni 



