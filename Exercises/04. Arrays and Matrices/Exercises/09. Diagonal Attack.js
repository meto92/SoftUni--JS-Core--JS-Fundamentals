function solve(strNumbersArray) {
    let matrix = new Array(strNumbersArray.length);

    for (let row = 0; row < strNumbersArray.length; row++) {
        matrix[row] = strNumbersArray[row].split(' ').map(Number);
    }

    let mainDiagonalSum = secondaryDiagonalSum = 0;

    let rows = matrix.length;
    let cols = matrix[0].length;

    for (let row = 0; row < rows; row++) {
        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][cols - row - 1];
    }

    if (mainDiagonalSum === secondaryDiagonalSum) {
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (row !== col && col !== cols - row - 1) {
                    matrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }

    console.log(matrix.map(row => row.join(' '))
        .join('\n'))
}