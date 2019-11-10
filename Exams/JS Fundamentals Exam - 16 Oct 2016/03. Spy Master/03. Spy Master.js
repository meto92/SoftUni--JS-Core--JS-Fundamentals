function decode(lines) {
    let key = lines.shift();

    let regex = new RegExp(`(^|\\s)${key}\\s+([A-Z!#$%]{8,})(\\s|\\.|,|$)`, 'gi');

    lines.forEach(line => {
        let match;

        while (match = regex.exec(line)) {
            if (/[a-z]/.test(match[2])) {
                continue;
            }

            let index = match[0].lastIndexOf(match[2]);

            match[2] = match[2].toLowerCase()
                .replace(/!/g, '1')
                .replace(/%/g, '2')
                .replace(/#/g, '3')
                .replace(/\$/g, '4');

            line = line.replace(match[0], match[0].substring(0, index) + match[2] + match[3]);
        }

        console.log(line);
    });
}