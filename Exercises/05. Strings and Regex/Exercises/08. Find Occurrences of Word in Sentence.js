function printWordOccurrences(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, "gi");

    return sentence.match(regex)
        ? sentence.match(regex).length
        : 0;
}