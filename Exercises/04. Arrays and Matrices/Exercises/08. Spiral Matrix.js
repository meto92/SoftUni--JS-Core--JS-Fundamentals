function printSpiralMatrix(rows, cols) {
    let matrix = [];

    for (let row = 0; row < rows; row++) {
        matrix[row] = new Array(cols);
    }

    let row = col = dir = number = 0;

    while (number < rows * cols) {
        switch (dir % 4) {
            case 0:
                while (col < cols && !matrix[row][col]) {
                    matrix[row][col++] = ++number;
                }
                row++;
                col--;
                break;
            case 1:
                while (row < rows && !matrix[row][col]) {
                    matrix[row++][col] = ++number;
                }
                row--;
                col--;
                break;
            case 2:
                while (col >= 0 && !matrix[row][col]) {
                    matrix[row][col--] = ++number;
                }
                row--;
                col++;
                break;
            case 3:
                while (row >= 0 && !matrix[row][col]) {
                    matrix[row--][col] = ++number;
                }
                row++;
                col++;
                break;
        }

        dir++;
    }

    console.log(matrix.map(row => row.join(' '))
        .join('\n'))
}