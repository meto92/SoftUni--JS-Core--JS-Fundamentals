function convertScoreToHTML(JSONString) {
    function htmlEscape(str) {
        return str.replace(/&/g, "&amp;").
            replace(/</g, "&lt;").
            replace(/>/g, "&gt;").
            replace(/"/g, "&quot;").
            replace(/'/g, "&#39;");
    }

    let objects = JSON.parse(JSONString);
    let html = ["<table>", "\t<tr><th>name</th><th>score</th></tr>"];

    for (let obj of objects) {
        let name = htmlEscape(obj.name);
        let score = obj.score;

        html.push(`\t<tr><td>${name}</td><td>${score}</td></tr>`);
    }

    html.push("</table>");

    html.forEach(line => console.log(line));
}