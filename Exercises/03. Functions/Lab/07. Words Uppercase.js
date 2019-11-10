function printWordsInUppercase(text) {
    console.log(text.toUpperCase().match(/\w+/g).join(", "));
}