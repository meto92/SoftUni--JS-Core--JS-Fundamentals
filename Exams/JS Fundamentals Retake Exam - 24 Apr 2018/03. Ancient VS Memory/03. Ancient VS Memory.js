function printFoundStrings(array) {
    let text = array.join(' ');

    let regex = /32656 19759 32763 0 (\d+) 0 /g;

    let match;

    while (match = regex.exec(text)) {
        let cols = +match[1];

        let numbers = text.substring(match.index + match[0].length)
            .split(/\s+/)
            .filter((element, index) => index < cols)
            .map(s => +s);

        let string = numbers.reduce((acc, cur) => {
            acc += String.fromCharCode(cur);

            return acc;
        }, '');

        console.log(string);
    }
}