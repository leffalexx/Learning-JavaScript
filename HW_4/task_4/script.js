const printPyramid = (height) => {
    let row = '';
    for (let i = 0; i < height; i++) {
        row += 'x';
        console.log(row);
    }
}

printPyramid(20);