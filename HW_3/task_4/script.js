let firstNum = Number(prompt('Введите первое число'));
let secondNum = Number(prompt('Введите второе число'));

let additionTwoNumbers = (num1, num2) => num1 + num2;
function subtractionTwoNumbers(num1, num2) {
    if (num1 >= num2)
        return (num1 - num2)
    else
        return (num2 - num1)
}
let multiplicationTwoNumbers = (num1, num2) => num1 * num2;
let divisionTwoNumbers = (num1, num2) => (num1 / num2).toFixed(2);

console.log(`Сумма чисел: ${additionTwoNumbers(firstNum, secondNum)}\n
Разность чисел: ${subtractionTwoNumbers(firstNum, secondNum)}\n
Умножение чисел: ${multiplicationTwoNumbers(firstNum, secondNum)}\n
Деление чисел: ${divisionTwoNumbers(firstNum, secondNum)}`)

//Можно ли вычитание сделать стрелкой?