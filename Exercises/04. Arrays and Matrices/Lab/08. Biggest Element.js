function getBiggestElement(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let biggestElements = matrix[0][0];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (matrix[row][col] > biggestElements) {
            biggestElements = matrix[row][col];
        }
      }
    }

    return biggestElements;
}