function capitalizeWords(string) {
    let modifiedWords = [];

    string.split(' ')
        .forEach(word => {
            let modifiedWord = '';
            let isFirstLetter = true;

            for (let char of word) {
                if ((char.toUpperCase() !== char
                    || char.toLowerCase() !== char)
                    && isFirstLetter
                ) {
                    modifiedWord += char.toUpperCase();
                    isFirstLetter = false;
                } else {
                    modifiedWord += char.toLowerCase();
                }
            }

            modifiedWords.push(modifiedWord);
        });

    console.log(modifiedWords.join(' '));
}