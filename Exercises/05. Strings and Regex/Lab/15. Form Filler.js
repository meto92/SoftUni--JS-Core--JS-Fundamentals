function fillForm(username, email, phoneNumber, sentences) {
    function replaceAll(str, pattern, replacement) {
        while (pattern.test(str)) {
            str = str.replace(pattern, replacement);
        }

        return str;
    }

    let usernamePlaceholderPattern = /<![a-zA-Z]+!>/;
    let emailPlaceholderPattern = /<@[a-zA-Z]+@>/;
    let phoneNumberPlaceholderPattern = /<\+[a-zA-Z]+\+>/;

    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = replaceAll(sentences[i], usernamePlaceholderPattern, username);
        sentences[i] = replaceAll(sentences[i], emailPlaceholderPattern, email);
        sentences[i] = replaceAll(sentences[i], phoneNumberPlaceholderPattern, phoneNumber);
    }

    sentences.forEach(s => console.log(s));
}