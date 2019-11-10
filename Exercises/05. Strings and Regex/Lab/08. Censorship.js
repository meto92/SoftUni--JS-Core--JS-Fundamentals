function censorText(text, strings) {
    strings.forEach(str => {
       text = text.replace(
           new RegExp(str, 'g'), "-".repeat(str.length)
       );
    });

    console.log(text);
}