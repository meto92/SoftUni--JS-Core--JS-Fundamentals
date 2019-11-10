function figureOfFourSquares(n) {
    let rowsCount = n % 2 === 0 ? n - 1 : n;

    let repeat = (2 * n - 1 - 3) / 2;

    for (let row = 0; row < rowsCount; row++) {
        let boundaryChar = '|';
        let innerChar = ' ';

        if (row === 0 || row === rowsCount - 1  || row === Math.floor((n - 1) / 2)) {
            boundaryChar = '+';
            innerChar = '-';
        }

        console.log(`${boundaryChar}${innerChar.repeat(repeat)}${boundaryChar}${innerChar.repeat(repeat)}${boundaryChar}`)
    }
}