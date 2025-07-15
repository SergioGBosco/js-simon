//Recupero gli elementi dal file html 
const countdown = document.getElementById(`countdown`)
const answersform = document.getElementById(`answers-form`)
const numberlist = document.getElementById(`numbers-list`)
const instructions = document.getElementById(`instructions`)
const message = document.getElementById(`message`)
const number = document.querySelectorAll(`input`)
const button = document.querySelector(`button`)

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

  if (timer === 0) {
    clearInterval(timedown)
    //se il tempo è scaduto tolgo subito il contatore e aggiungo il d-none direttamente al div countdown
    countdown.classList.add(`d-none`); //
    //contemporaneamente permetto l'inserimento dei numeri da inserire da parte dell'utente con lo stesso metodo 
    answersform.classList.remove(`d-none`)

    //generati i numeri e resi visibili, al termine del countdown devo anche questi farli sparire
    numberlist.classList.add(`d-none`)

    //modifico la frase 

    instructions.innerText = `Digita i numeri che ricordi`

  }
}, 1000);//definisco ogni quando tempo vengono fatte le iterazioni 



//modifico la generazione dei numeri in una funzione 
function randomGenerateNumber(max, min) {
  //aggiungo i 5 numeri che devono essere visualizzati e ricordati dall'utente prima dello scadere del tempo
  let generatenumbers = []

  for (let i = 0; i < 5; i++) {
    let randomnumber = Math.floor(Math.random() * max - min + 1) + min;
    //aggiungo la condizione che permette di non generare numeri uguali
    if (!generatenumbers.includes(randomnumber))
      generatenumbers.push(randomnumber);
    else {
      i--
    }
  }
  return generatenumbers
}


let generatenumber = randomGenerateNumber(50, 1)

//adesso mostro i numeri 

for (let i = 0; i < generatenumber.length; i++) {
  numberlist.innerHTML += `<li>${generatenumber[i]}</li>`
}


//definisco l'array vuoto dove andro ad inserire i numeri gererati dall'utente
button.addEventListener(`click`, (e) => {
  e.preventDefault();
  usernamber = [];

  for (let i = 0; i < number.length; i++) {
    usernamber.push(parseInt(number[i].value));
  }

  console.log(usernamber)

  //condizione di verifica numeri 

  let checknumber = [];

  for (let i = 0; i < generatenumber.length; i++) {
    if (generatenumber[i] === usernamber[i]) {
      checknumber.push(generatenumber[i])
    }

  }


  //genero un messaggio che mi permette di vedere il risultato
  message.innerText = `hai indovinato ${checknumber.length} numeri ovvero ${checknumber}`


});









