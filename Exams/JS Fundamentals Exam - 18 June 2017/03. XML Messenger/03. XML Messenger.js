function printHTML(xml) {
    let attributesPattern = '\\s+([a-z]+)="([a-zA-Z\\d. ]+)"';

    let regex = /^<message(.+?)>([^<>]+)<\/message>$/;
    let attributesRegex = new RegExp(attributesPattern, 'g');

    if (!regex.test(xml)|| !new RegExp(`^(${attributesPattern})+$`).test(regex.exec(xml)[1])) {
        console.log('Invalid message format');

        return;
    }

    let match = regex.exec(xml);

    let attributes = match[1];

    let attributeMatch;

    let to = from = null;

    while (attributeMatch = attributesRegex.exec(attributes)) {
        let key = attributeMatch[1];
        let value = attributeMatch[2];

        if (key === 'to') {
            to = value;
        } else if (key === 'from') {
            from = value;
        }
    }

    if (!to || !from) {
        console.log('Missing attributes');

        return;
    }

    let html = '<article>\n';

    html += `  <div>From: <span class="sender">${from}</span></div>\n`;
    html += `  <div>To: <span class="recipient">${to}</span></div>\n`;
    html += '  <div>\n';

    match[2].split('\n')
        .forEach(p => html += `    <p>${p}</p>\n`);

    html += '  </div>\n';
    html += '</article>';

    console.log(html);
}