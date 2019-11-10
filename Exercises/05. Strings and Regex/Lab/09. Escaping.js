function htmlEscape(html) {
    let escapedHtml = ["<ul>"];

    for (let i = 0; i < html.length; i++) {
		html[i] = html[i].replace(/&/g, "&amp;").
            replace(/</g, "&lt;").
            replace(/>/g, "&gt;").
            replace(/"/g, "&quot;").
            replace(/'/g, "&#39;");

		
        escapedHtml.push(`  <li>${html[i]}</li>`);
    }

    escapedHtml.push("</ul>");

    escapedHtml.forEach(line => console.log(line));
}