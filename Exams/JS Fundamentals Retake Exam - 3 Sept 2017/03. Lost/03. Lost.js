function solve(keyword, text) {
    text = text.replace(/\n/g, '');

    let coordPattern = '(north|east).*?(\\d{2})[^,]*,[^,]*?(\\d{6})';

    let coordRegex = new RegExp(coordPattern, 'gi');
    let messageRegex = new RegExp(`${keyword}(.+?)${keyword}`);

    let latitude  = -1;
    let longitude  = -1;

    let match = coordRegex.exec(text);

    while (match) {
        if (match[1].toLowerCase() === 'north') {
            latitude = `${match[2]}.${match[3]}`;
        } else {
            longitude = `${match[2]}.${match[3]}`;
        }

        match = coordRegex.exec(text);
    }

    let message = messageRegex.exec(text)[1];

    console.log(`${latitude } N`);
    console.log(`${longitude } E`);
    console.log(`Message: ${message}`);
}