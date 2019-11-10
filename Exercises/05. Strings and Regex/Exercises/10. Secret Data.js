function printCensoredData(strings) {
    let regex = /((\*[A-Z][a-zA-Z]*)|(\+[\d-]{10})|(![a-zA-Z\d]+)|(_[a-zA-Z\d]+))(?=\s|$)/g;

    strings.forEach(str => {
        console.log(str.replace(regex, (m) => '|'.repeat(m.length)));
    });
}