function stringOfNumbersFromOneToN(input) {
    let max = Number(input);
    let result = [];

    for (let num = 1; num <= max; num++) {
        result.push(num);
    }

    return result.join('');
}