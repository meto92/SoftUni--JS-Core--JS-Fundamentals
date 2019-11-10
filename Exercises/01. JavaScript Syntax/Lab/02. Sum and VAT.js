function sumandVAT(prices) {
    let sum = prices.reduce((a, b) => a + b);

    let vat = 0.2 * sum;
    let total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}