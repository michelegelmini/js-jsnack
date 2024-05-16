const firstNumber = parseInt(Number(prompt('Inserisci il primo numero')));
const secondNumber = parseInt(Number(prompt('Inserisci il secondo numero')));


if (firstNumber > secondNumber) {
    console.log(firstNumber)
} else if (firstNumber < secondNumber) {
    console.log(secondNumber)
}
else if (firstNumber === secondNumber) {
    console.log('i numeri sono uguali')
}
else if ((firstNumber == NaN || secondNumber == NaN)) {
    console.log('Non hai inserito due numeri')
}
