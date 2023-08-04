const arr = [];
const getRandomInt = () => Math.floor(Math.random() * 10);
for (let i = 0; i < 5; i++) {
    arr.push(getRandomInt());
}
console.log(arr)

let sumDigits = 0;
for (let i = 0; i < arr.length; i++) {
    sumDigits += arr[i]
}
console.log(`Сумма элементов массива равна ${sumDigits}`)

let minDigit = 9;
for (let i = 0; i < arr.length; i++) {
    if (minDigit > arr[i]) {
        minDigit = arr[i]
    }
}
console.log(`Минимальный элемент массива - ${minDigit}`)

let givenNumber = 3;
let numberExists = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === givenNumber) {
        numberExists = true;
        break;
    }
}
if (numberExists) {
    console.log(`В массиве есть число ${givenNumber}`);
} else {
    console.log(`В массиве нет числа ${givenNumber}`);
}