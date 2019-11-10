function calendar([day, month, year]) {
    let daysInMonth = (month, year) => new Date(year, month, 0).getDate();

    let daysInPrevMonth = daysInMonth(month - 1, year);
    let daysInCurrentMonth = daysInMonth(month, year);

    let daysToPrintFromPrevMonth = new Date(year, month - 1, 1).getDay();

    let html = '<table>\n  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    html += '  <tr>';

    let currentDayOfWeek = 0;

    for (let day = daysInPrevMonth - daysToPrintFromPrevMonth + 1; day <= daysInPrevMonth; day++) {
        html += `<td class="prev-month">${day}</td>`;

        currentDayOfWeek++;
    }

    for (let currentDay = 1; currentDay <= daysInCurrentMonth; currentDay++) {
        html += '<td';

        if (currentDay == day) {
            html += ' class="today"';
        }

        html += `>${currentDay}</td>`;

        currentDayOfWeek++;

        if (currentDayOfWeek % 7 === 0) {
            html += '</tr>\n  <tr>';
        }
    }

    let daysToPrintFromNextMonth = 6 - new Date(year, month - 1, daysInCurrentMonth).getDay();

    if (daysToPrintFromNextMonth === 0) {
        html = html.substr(0, html.length - 6);
    }
    else {
        for (let day = 1; day <= daysToPrintFromNextMonth; day++) {
            html += `<td class="next-month">${day}</td>`;
        }

        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html)
}