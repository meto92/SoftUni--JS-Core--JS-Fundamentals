function calcNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let oneDayMilliseconds = 24 * 3600 * 1000;
    let nextDate = new Date(date.getTime() + oneDayMilliseconds);

    return `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`
}