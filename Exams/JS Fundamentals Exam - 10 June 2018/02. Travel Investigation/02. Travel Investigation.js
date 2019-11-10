function solve(input) {
    let array = [].concat(input);

    let joinedCompanies = array.shift();
    let delimiter = array.shift();

    let companies = joinedCompanies.split(delimiter);

    let validSentencesIndices = [];
    let invalidSentencesIndices = [];

    array = array.map(sentence => sentence.toLowerCase());

    array.forEach((sentence, index) => {
        let containsAllCompanies = companies
            .reduce((acc, cur) => {
                return acc && sentence.indexOf(cur) !== -1;
            }, true);

        if (containsAllCompanies) {
            validSentencesIndices.push(index);
        } else {
            invalidSentencesIndices.push(index);
        }
    });

    if (validSentencesIndices.length) {
        console.log(`ValidSentences`);
    }

    validSentencesIndices.forEach((sentenceIndex, index) => {
        console.log(`${index + 1}. ${array[sentenceIndex]}`);
    });

    if (validSentencesIndices.length && invalidSentencesIndices.length) {
        console.log('='.repeat(30));
    }

    if (invalidSentencesIndices.length) {
        console.log('InvalidSentences');
    }

    invalidSentencesIndices.forEach((sentenceIndex, index) => {
        console.log(`${index + 1}. ${array[sentenceIndex]}`);
    });
}