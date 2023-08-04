const givenArray = [1, 2, 3, 4, 5, 6, 7];

const removeElements = (array, index, count) => {
    array.splice(index, count);
}

removeElements(givenArray, 3, 2);

console.log(givenArray);