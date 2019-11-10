function printBiggestMultiplication(arr) {
    let biggestMultiplication = Number.MIN_SAFE_INTEGER;

    arr.forEach((s, index) => {
        if (s.length === 1) {
            let multiplication = arr.slice(index + 1, index + 1 + +s)
                .map(s => +s)
                .reduce((a, b) => a * b, 1);

            biggestMultiplication = Math.max(multiplication, biggestMultiplication);
        }
    });

    console.log(biggestMultiplication);
}