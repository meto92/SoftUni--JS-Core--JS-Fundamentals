function decode([start, end, rightWord, encryptedText]) {
    let countryRegex = /\b[A-Z][^A-Z]+[A-Z]\b/g;
    let numbersRegex = /\d{3}(\.\d+)?/g;

    let country = encryptedText.match(countryRegex)[0];

    country = country.substring(0, +start) + rightWord + country.substring(+end + 1);
    country = country.substring(0, country.length - 1) + country[country.length - 1].toLowerCase();

    let numbers = encryptedText.match(numbersRegex)
        .map(s => Math.ceil(+s));

    let code = numbers.reduce((acc, cur) => {
        acc += String.fromCharCode(cur);

        return acc;
    }, '');

    console.log(`${country} => ${code[0].toUpperCase() + code.substring(1)}`)
}