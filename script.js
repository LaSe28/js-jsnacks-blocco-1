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


/*
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


/*
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

/*
Snack 1.4
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.
*/

// let userName = prompt("Come ti chiami?")
// let invitati = ['Matteo','Andrea','Gianni','Antonio','Francesca','Valeria','Lorenzo','Elena','Nico','Fabio','Maria']

// let invitato = false

// for (let i = 0; i < invitati.length; i++){
//     if (invitati[i] == userName ){
//        invitato = true
//     }
// }

// if(invitato == true){
//     alert(`Ciao ${userName}, benvenuto alla festa!`)
// }else{
//     alert(`Mi spiace ${userName}, devi andar via!`)
// }


/* 
Snack 1.5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/


// let result = [] 

// for (let i = 0; i < 6; i++){
//     let number = parseInt(prompt("Inserisci un numero"))
//     if(number % 2){
//         result.push(number);
//     }
// }

// alert(`I numeri dispari sono: ${result}`)

/* 
Snack 1.6
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/

let number = prompt('Dammi un numero a 4 cifre:');

// if (number.length != 4){
//     alert('numero errato')
// } else if (isNaN(number)){
//     alert('questo non è un numero')
// }

let arr = []

for (let i = 0; i < number.length; i++){
    arr.push(number[i])
}


let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

alert(result)
console.log(number)
console.log(result)



// let result = (number[0] + number[1] + number[2] + number[3]);