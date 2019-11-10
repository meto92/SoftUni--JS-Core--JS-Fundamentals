function printTable(employeeStrings) {
    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '#39;')
            .replace(/"/g, '&quot;');
    }

    let html = '<table>\n';

    employeeStrings.forEach(employeeJson => {
        let employee = JSON.parse(employeeJson);

        html += '\t<tr>\n';
        html += `\t\t<td>${escapeHtml(employee.name)}</td>\n`;
        html += `\t\t<td>${escapeHtml(employee.position)}</td>\n`;
        html += `\t\t<td>${employee.salary}</td>\n`;
        html += '\t<tr>\n';
    });

    html += '</table>';

    console.log(html);
}