function printOddNumbersFromOneToN(n) {
    let oddNumbers = [];

    for (let num = 1; num <= n; num += 2) {
        oddNumbers.push(num);
    }

    console.log(oddNumbers.join('\n'))
}