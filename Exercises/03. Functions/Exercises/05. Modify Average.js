function modifyAverage(number) {
    let getDigitsSum = numStr => Array.from(numStr)
        .map(c => Number(c))
        .reduce((a, b) => a + b);

    let isDigitsAvgGreaterThanFive = numStr => getDigitsSum(numStr) / numStr.length > 5;

    let numberStr = number.toString();

    while (!isDigitsAvgGreaterThanFive(numberStr)) {
        numberStr += '9';
    }

    console.log(numberStr);
}