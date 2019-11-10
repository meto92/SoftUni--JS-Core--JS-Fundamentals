function solve(infoString, infoToPrint) {
    let namesRegex = / ([A-Z][a-zA-Z]*)-([A-Z][a-zA-Z]*.?)(-([A-Z][a-zA-Z]*))? /g;

    let name = null;

    let match;

    while (match = namesRegex.exec(infoString)) {
        let firstName = match[1];
        let secondName = match[2];
        let thirdName = match[4];

        let secondNameEndsWithDot = secondName.endsWith('.');

        if (thirdName && secondNameEndsWithDot
            || !thirdName && !secondNameEndsWithDot) {
            if (thirdName) {
                name = `${firstName} ${secondName} ${thirdName}`;
            } else {
                name = `${firstName} ${secondName}`;
            }

            break;
        }
    }

    let airports = infoString.match(/ ([A-Z]{3}\/[A-Z]{3}) /);

    if (airports) {
        airports = airports[0]
            .trim()
            .split('/');
    }

    let flightNumber = infoString.match(/ ([A-Z]{1,3}\d{1,5}) /);

    if (flightNumber) {
        flightNumber = flightNumber[0].trim();
    }

    let company = infoString.match(/- ([A-Z][a-zA-Z]*\*[A-Z][a-zA-Z]*) /);

    if (company) {
        company = company[0].substr(2)
            .trim()
            .split('*')
            .join(' ');
    }

    let result = '';

    switch (infoToPrint) {
        case 'name':
            result = `Mr/Ms, ${name}, have a nice flight!`;
            break;
        case 'flight':
            result = `Your flight number ${flightNumber} is from ${airports[0]} to ${airports[1]}.`;
            break;
        case 'company':
            result = `Have a nice flight with ${company}.`;
            break;
        case 'all':
            result = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airports[0]} to ${airports[1]}. Have a nice flight with ${company}.`;
            break;
    }

    console.log(result);
}