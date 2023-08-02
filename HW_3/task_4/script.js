const firstNum = Number(prompt('Введите первое число'));
const secondNum = Number(prompt('Введите второе число'));
const subtractionTwoNumbers = (num1, num2) => {
    if (num1 >= num2) {
        return num1 - num2;
    } else {
        return num2 - num1;
    }
};
const multiplicationTwoNumbers = (num1, num2) => num1 * num2;
const divisionTwoNumbers = (num1, num2) => (num1 / num2).toFixed(2);

console.log(`Сумма чисел: ${additionTwoNumbers(firstNum, secondNum)}\n
Разность чисел: ${subtractionTwoNumbers(firstNum, secondNum)}\n
Умножение чисел: ${multiplicationTwoNumbers(firstNum, secondNum)}\n
Деление чисел: ${divisionTwoNumbers(firstNum, secondNum)}`)