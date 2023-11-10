/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


//*********  ESERCIZIO 1 *********/
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
// ERRORE DI LOGICA: se si dichiara "i = 0; e che quando i > 5 deve aumentare il suo valore di uno" abbiamo un errore in quanto i non diventerà mai > 5.
for (let i = 0; i < 5; i++) {
   console.log(i);
}

//*********  ESERCIZIO 2 *********/
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

//CORREZIONE

// ERRORE SINTASSI e LOGICA:  
    // - nella condizione dell'"if" il confronto era stato fatto scrivendo "=", questo è un errore perchè scritto in questo modo è come se si stesse dichiarando qualcosa e non facendo un confronto
    // - il "num" che si vuole far ritornare non è dichiarato, quindi come risultato non ci ritornerà niente
    // - non abbiamo una condizione nel caso il num non sia pari, quindi inserendo un numero dispari come "num", ci verrà segnalato ERRORE
    function addIfEven(num) {
    if (num % 2 == 0) {
        result = num + 5
    } else {
        result = "Il numero non è pari"
    }
    return result;
}

 addIfEven(4);
 console.log(result);
                              
 addIfEven(7);
 console.log(result);




//*********  ESERCIZIO 3 *********/
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// ERRORE SINTASSI: 
    // - quando viene inizializzato il ciclo for, a dividere le condizioni bisogna utilizzare ";" e non la virgola per come è stato fatto.
    // - se lo scopo della funzione e di scrivere i numeri in loop fino a 5 manca l'"=" come condizione nel ciclo(i <= 5)
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

loopToFive(); 


//*********  ESERCIZIO 4 (suggerimento: ci sono 7 errori) *********/
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// ERRORE SINTASSI: 
    // 1. gli array devono essere dichiarati all'esterno della funzione, e quindi poi inseriti come valori di entrata per la funzione (array, newArray)
    // 2. quando viene inizializzato il ciclo for, dopo che si dichiara il comportamento di "i" non ci va ";" prima di chiudere la parentesi tonda. 
    // 3. nella condizione dell'"if" il confronto era stato fatto scrivendo "=", questo è un errore perchè scritto in questo modo è come se si stesse dichiarando qualcosa e non facendo un confronto
    // 4. se inseriamo nella condizione del ciclo FOR "numbers.length -1" non verrà ciclato tutto l'array e quindi non saranno mostrati tutti i numeri PARI
    // 5. la condizione dell'if (numbers % 2 = 0) è errata, perchè numbers è un array
    // 6. per confrontare il numero corrente dell'array Numbers bisogna dichiarare una variabile: "let curNum = array[i]"
    // 7. dopo la condizione if non si usa il ";"

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];

function displayEvenNumbers(array, newArray) {
   
    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        // console.log(curNum);
        if (curNum % 2 == 0) {
            newArray.push(curNum);
        }
        // console.log(newArray);
        
    }
}
displayEvenNumbers(numbers, evenNumbers); // dovrebbe restituire [2,4,6,8]
console.log(evenNumbers);