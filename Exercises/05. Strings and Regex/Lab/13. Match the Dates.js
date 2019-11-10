function extractDates(lines) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let date;

    for (let line of lines) {
        while (date = regex.exec(line)) {
            let day = date[1];
            let month = date[2];
            let year = date[3];

            console.log(`${date[0]} (Day: ${day}, Month: ${month}, Year: ${year})`)
        }
    }
}