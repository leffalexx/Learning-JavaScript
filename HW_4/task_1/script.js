const defineOddEven = (i) => {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 1) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - четное число`);
    }
}

for (let i = 0; i <= 10; i++) {
    defineOddEven(i);
}