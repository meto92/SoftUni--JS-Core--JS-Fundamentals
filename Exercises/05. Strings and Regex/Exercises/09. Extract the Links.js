function printLinks(strings) {
    let matches = strings.join(' ')
        .match(/www\.[a-zA-Z\d-]+(\.[a-z]+)+/g);

    if (matches) {
        matches.forEach(match => console.log(match));
    }
}