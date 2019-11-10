function getEqualNeighboursCount(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let count = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (col + 1 < cols && matrix[row][col] == matrix[row][col + 1]) {
            count++;
        }

        if (row + 1 < rows && matrix[row][col] == matrix[row + 1][col]) {
            count++;
        }
      }
    }

    return count;
}