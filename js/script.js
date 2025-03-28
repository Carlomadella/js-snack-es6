// Snack 1: Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare in console la bici con peso minore.

const bici = [
    {
        nome : "Bianchi",
        peso : 18,
    },
    {
        nome : "Bottecchia",
        peso : 25,
    },
    {
        nome : "Cipollini",
        peso : 12,
    },
    {
        nome : "Faema",
        peso : 37,
    },
    {
        nome : "Molteni",
        peso : 22,
    },
    {
        nome : "Bottecchia",
        peso : 10,
    },
]

console.log(bici);

// inserisco in una variabile il valore del peso del primo elemento dell'array di oggetti
let pesoMinore = bici[0].peso;
// creao una variabile per immagazzinare l'elemento dell'array con il peso minore
let minWeight;

// creo un ciclo for per confrontare gli elementi dell'array 
for (let i = 0; i < bici.length; i++) {
    // creao un if pe determinare quello con il peso minore
    if (pesoMinore > bici[i].peso) {
        pesoMinore = bici[i].peso;
        minWeight = bici[i];
    }
}
// stampo in console l'elemento con valore peso minore 
console.log(minWeight);

// FINE SNACK 1 

// Snack 2: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// genero l'array che contiene le squadre, ciascuna con le 3 proprietà richieste
const squadre = [
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Colo-Colo",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Albinoleffe",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Barcellona",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Deportivo Petare",
        puntiFatti : 0,
        falliSubiti : 0,
    },
    {
        nome : "Ingulets Petrovo",
        puntiFatti : 0,
        falliSubiti : 0,
    }
]

// creo la funzione per generare randomicamente il numero dei punti di ogni squadra
const generateRandomPoints = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// attribuisco agli oggetti dell'array i valori generati con un range che va da 0 a 114 (38 giornate * 3 punti disponibili)
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = generateRandomPoints(0,114)
}

// creo la funzione per generare randomicamente il numero di falli subiti da ogni squadra
const generateRandomFouls = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// attribuisco agli oggetti dell'array i valori generati con un range che va da 0 a 30
for (let i = 0; i < squadre.length; i++) {
    squadre[i].falliSubiti = generateRandomFouls(0,30)
}

console.log(squadre);