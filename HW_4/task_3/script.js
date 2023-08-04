const generateRandomArray = (length) => {
    const array = [];
    const getRandomInt = () => Math.floor(Math.random() * 10);
    for (let i = 0; i < length; i++) {
        array.push(getRandomInt());
    }
    return array;
}
const randomArray = generateRandomArray(5);
console.log(`Сгенерирован массив: ${randomArray}`);


const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const sumDigits = sumArray(randomArray)
console.log(`Сумма элементов массива равна ${sumDigits}`)


const getMinDigit = (array) => {
    let minDigit = 9;

    for (let i = 0; i < array.length; i++) {
        if (minDigit > array[i]) {
            minDigit = array[i];
        }
    }
    return minDigit;
}
const minDigit = getMinDigit(randomArray);
console.log(`Минимальный элемент массива - ${minDigit}`)


const checkIfNumberExists = (array, number) => {
    let exists = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            exists = true;
            break;
        }
    }
    return exists;
}
let givenNumber = 3;
const numberExists = checkIfNumberExists(randomArray, givenNumber);
if (numberExists) {
    console.log(`В массиве есть число ${givenNumber}`);
} else {
    console.log(`В массиве нет числа ${givenNumber}`);
}