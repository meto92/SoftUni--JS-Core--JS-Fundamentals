function printAllWords(text) {
    console.log(text.match(/\w+/g).join("|"));
}