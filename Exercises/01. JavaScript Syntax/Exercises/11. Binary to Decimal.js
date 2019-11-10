function printDecimal(binary) {
    let length = binary.length;

    let decimal = Number(binary[binary.length - 1]);

    for (let i = 0; i < length - 1; i++) {
        let pow = length - i - 1;

        decimal += (2 * binary[i]) ** pow;
    }

    console.log(decimal)
}