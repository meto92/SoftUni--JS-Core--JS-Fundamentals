function isMagical(matrix) {
    let sum = 0;

    matrix.forEach(row => sum += row[0]);

    let cols = matrix[0].length;

    for (let col = 1; col < cols; col++) {
        let currentSum = 0;

        matrix.forEach(row => currentSum += row[col]);

        if (currentSum !== sum) {
            return false;
        }
    }

    for (let row of matrix) {
        let currentSum = row.reduce((a, b) => a + b);

        if (currentSum !== sum) {
            return false;
        }
    }

    return true;
}