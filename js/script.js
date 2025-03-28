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
