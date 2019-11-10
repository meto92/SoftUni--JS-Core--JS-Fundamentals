function generateColorfulNumbersHtml(lastNumber) {
    let html = [];

    html.push("<ul>\r\n");

    for (let num = 1; num <= lastNumber; num++) {
        let color = num % 2 == 0 ? "blue" : "green";

        html.push(`\t<li><span style="color:${color}">${num}</span></li>\r\n`)
    }

    html.push("<ul>");

    return html.join("");
}