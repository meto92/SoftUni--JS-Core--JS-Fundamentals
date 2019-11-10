function extractSequence(array) {
    let result = [+array[0]];
    let currentBiggestNumber = +array[0];

    for (let i = 1; i < array.length; i++) {
        let currentNumber = +array[i];

        if (currentNumber >= currentBiggestNumber) {
            result.push(array[i]);

            currentBiggestNumber = currentNumber;
        }
    }

    console.log(result.join('\n'))
}