/*
Snack 1.1
L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// const num1 = parseInt(prompt('numero 1: '));
// const num2 = parseInt(prompt('numero 2: '));

// if (num1 > num2){
//     alert(num1)
// } else if (num1 < num2){
//     alert(num2)
// } else {
//     alert('sono uguali')
// }


/*******************************************************************************************
Snack 1.2
L'utente inserisce due parole in successione con due prompt.
Il software deve stampare prima la parola più corta, poi la parola più lunga
*/

// let word1 = prompt('scrivi una parola')
// let word2 = prompt('scrivi un\'altra parola')

// if (word1.length > word2.length){
//     alert(word1 + ' ' + word2)
// } else if (word1.length < word2.length){
//     alert(word2 + ' ' + word1)
// } else{
//     alert(word1 + ' ' + word2)
// }


/*******************************************************************************************
Snack 1.3
Il software deve chiedere all'utente 10 volte di inserire un numero.
ilprogramma stampa la smma di tutti i numeri inseriti
*/


// let result = 0 

// for (let i = 0; i < 10; i++){
//     let number = parseInt(prompt("Inserisci un numero"))
//     result = result + number;
// }

// alert(`Il risultato è ${result}`)

/*******************************************************************************************
Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

// let userName = prompt("Come ti chiami?")
// let invitati = ['Matteo','Andrea','Gianni','Antonio','Francesca','Valeria','Lorenzo','Elena','Nico','Fabio','Maria']

// let invitato = false

// for (let i = 0; i < invitati.length; i++){
//     if (invitati[i].toLowerCase() == userName.toLowerCase() ){
//        invitato = true
//     }
// }

// if(invitato == true){
//     alert(`Ciao ${userName}, benvenuto alla festa!`)
// }else{
//     alert(`Mi spiace ${userName}, devi andar via!`)
// }


/*******************************************************************************************
Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// let result = [] 

// for (let i = 0; i < 6; i++){
//     let number = parseInt(prompt("Inserisci un numero"))
//     if(number % 2 != 0){
//         result.push(number);
//     }
// }

// alert(`I numeri dispari sono: ${result}`)

/*******************************************************************************************
Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/


// let number = prompt('Dammi un numero a 4 cifre:');

// if (number.length != 4){
//     alert('numero errato')
// } else if (isNaN(number)){
//     alert('questo non è un numero')
// }

// let arr = []

// for (let i = 0; i < number.length; i++){
//     arr.push(number[i])
// }

// num1 = parseInt(arr[0])
// num2 = parseInt(arr[1])
// num3= parseInt(arr[2])
// num4 = parseInt(arr[3])
// result = num1 + num2 + num3 + num4

// if(isNaN(result)){
// }else {
//     alert(`il risultato è ${result}`)
// }

// oppure***********************************************

// let number = prompt('Dammi un numero a 4 cifre:');
// let result = 0;

// if (number.length != 4){
//     alert('numero errato')
// } else if (isNaN(number)){
//     alert('questo non è un numero')
// }

// for (let i = 0; i < number.length; i++){
//     result = result + parseInt(number[i])
// }

// if(isNaN(result)){
// }else {
//     alert(`il risultato è ${result}`)
// }

/* 
snack 1.9
calcola la somma e la media dei primi 10 numeri
*/

// let number = []

// sum = 0;

// for (let i = 1 ; i <= 10; i++){
//     sum += i
//     console.log(sum)
// }

// let media = sum / 10
// console.log(`la media è ${media}`)

/*
Snack 2.1
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// let result = 0;

// for (let i = 0; i < 5; i++ ){
//     let number = parseInt(prompt("Dammi un numero"));
//     result += number;
// }
// alert(`Il risultato è ${result}`)

/*************************************************WHILE*****************************************************/
// let arr=[];
// let result = 0;

// let i = 0

// while (arr.length < 5){
//     let number = parseInt(prompt("Dammi un numero"));
//     result += number;
//     arr.push(number)
//     i++
// }
// alert(`Il risultato è ${result}`)


/******************************************************************************************************/

/*
Snack 2.2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

// let number = parseInt(prompt(`Dammi un numero pari`));

// if (number % 2 == 0){
//     alert(`il numero è ${number}`)
// } else{
//     let even = number + 1
//     alert(`adesso il numero è ${even}`)
// }


/******************************************************************************************************/

/*
Snack 2.3
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

// let nomi = ['Andrea','Davide','Luca']
// let cognomi = ['Gualtieri','Granada','Florio']
// let randomName = []

// let i = 0
// while (randomName.length <= 2){
//     let falseName = ' '+nomi[Math.floor(Math.random()*3)] + ' ' + cognomi[Math.floor(Math.random()*3)]
//     if (randomName.includes(falseName)==false){
//         randomName.push(falseName)
//     }
//     i++
//     console.log(falseName)
// }
// alert(`Gli invitati sono: ${randomName}`)




