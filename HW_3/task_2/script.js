let salaryBeforeTaxes = prompt('Ведите сумму, из которой необходимо вычесть налог')

if (typeof salaryBeforeTaxes !== 'number') {
    alert('Необходимо ввести цифры')
    salaryBeforeTaxes = prompt('Именно цифры, без пробелов и знаков препинания')
}

const salaryAfterTaxes = (salaryBeforeTaxes) => salaryBeforeTaxes * 0.87;

console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTaxes(salaryBeforeTaxes)}`);
