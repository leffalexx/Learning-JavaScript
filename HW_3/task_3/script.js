let firstNum = Number(prompt('Введите первое число'));
let secondNum = Number(prompt('Введите второе число'));
let thirdNum = Number(prompt('Введите третье число'));

function maxNumber(num1, num2, num3) {
    let maxNum = num1;
    if (num2 > num1) {
        maxNum = num2
    }
    if (num3 > num2) {
        maxNum = num3
    }
    return maxNum;
}

console.log(`Наибольшее число - ${maxNumber(firstNum, secondNum, thirdNum)}`)