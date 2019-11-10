function multiplicationTable(n) {
    let table = [];

    table.push('<table border="1">');
    table.push('  <tr><th>x</th>');

    for (let x = 1; x <= n; x++) {
        table.push(`<th>${x}</th>`);
    }

    table.push('</tr>\r\n');

    for (let r = 1; r <= n; r++) {
        table.push(`  <tr><th>${r}</th>`);

        for (let c = 1; c <= n; c++) {
            table.push(`<td>${r * c}</td>`)
        }

        table.push('</tr>\r\n');
    }

    table.push('</table>')

    console.log(table.join(''))
}