function generateChessBoardHtml(size) {
    let html = [];

    html.push('<div class="chessboard">\r\n');

    for (let row = 0; row < size; row++) {
        html.push('\t<div>\r\n');

        for (let col = 0; col < size; col++) {
            let color = (row + col) % 2 == 0 ? "black" : "white";

            html.push(`\t\t<span class="${color}"></span>\r\n`)
        }

        html.push('\t</div>\r\n');
    }

    html.push('</div>');

    return html.join("");
}