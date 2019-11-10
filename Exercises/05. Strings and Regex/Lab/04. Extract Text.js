function extractText(text) {
    let matches = [];

    let startIndex = text.indexOf("(");
    let endIndex = text.indexOf(")", startIndex + 1);

    while (startIndex != -1 && endIndex != -1) {
        matches.push(text.substring(startIndex + 1, endIndex));

        startIndex = text.indexOf("(", startIndex + 1);
        endIndex = text.indexOf(")", endIndex + 1);
    }
    console.log(matches.join(", "));
}