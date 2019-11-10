function countWords([text]) {
    let wordsOccurrences = {};

    text.match(/\w+/g).forEach(word => {
        if (!wordsOccurrences[word]) {
            wordsOccurrences[word] = 0;
        }

        wordsOccurrences[word]++;
    });

    console.log(JSON.stringify(wordsOccurrences));
}