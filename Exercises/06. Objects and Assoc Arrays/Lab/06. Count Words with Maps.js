function countWords([text]) {
    let wordsOccurrences = new Map();

    text.match(/\w+/g).map(w => w.toLowerCase()).forEach(word => {
        if (!wordsOccurrences.has(word)) {
            wordsOccurrences.set(word, 0);
        }

        wordsOccurrences.set(word, wordsOccurrences.get(word) + 1);
    });

    Array.from(wordsOccurrences.keys()).sort().forEach(word =>
        console.log(`'${word}' -> ${wordsOccurrences.get(word)} times`)
    );
}