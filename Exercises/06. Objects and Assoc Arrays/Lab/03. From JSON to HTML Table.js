function convertFromJSOnToHTMLTable(JSONString) {
    function htmlEscape(str) {
        return str.replace(/&/g, "&amp;").
            replace(/</g, "&lt;").
            replace(/>/g, "&gt;").
            replace(/"/g, "&quot;").
            replace(/'/g, "&#39;");
    }

    let objects = JSON.parse(JSONString);
    let html = ["<table>"];
    let firstRow = "\t<tr>";

    for (let key in objects[0]) {
        let k = key;

        if (!Number(k)) {
            k = htmlEscape(k);
        }

        firstRow += `<th>${k}</th>`;
    }

    firstRow += "</tr>";

    html.push(firstRow);

    for (let obj of objects) {
        let row = "\t<tr>";

        for (let key in obj) {
            let value = obj[key];

            if (!Number(value)) {
                value = htmlEscape(value);
            }

            row += `<td>${value}</td>`;
        }

        row += "</tr>";

        html.push(row);
    }

    html.push("</table>");

    html.forEach(line => console.log(line));
}