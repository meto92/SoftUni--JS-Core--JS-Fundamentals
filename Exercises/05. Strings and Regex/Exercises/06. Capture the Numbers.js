function printNumbers(strings) {
    let joinedStrings = strings.join(' ');

    return /\d/.test(joinedStrings)
        ? joinedStrings
            .match(/\d+/g)
            .join(' ')
        : '';
}