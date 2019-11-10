function printUniqueWords(sentences) {
    let uniqueWords = new Set();

    for (let sentence of sentences) {
        sentence.
            toLowerCase().
            match(/\w+/g).
            forEach(word => uniqueWords.add(word));
    }

    console.log(Array.from(uniqueWords).join(", "));
}