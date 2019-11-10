function solve([rows, cols, x, y] ) {
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = 1 + Math.max(Math.abs(x - row), Math.abs(y - col));
        }
    }

    console.log(matrix.map(row => row.join(' '))
        .join('\n'));

}