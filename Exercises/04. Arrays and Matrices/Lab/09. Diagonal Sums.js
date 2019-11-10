function printDiagonalSums(matrix) {
    let rows = matrix.length;

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    matrix.forEach((row, index) => {
		primaryDiagonalSum += matrix[index][index];
		secondaryDiagonalSum += matrix[index][rows - index - 1];
	});

    console.log(`${primaryDiagonalSum} ${secondaryDiagonalSum}`);
}