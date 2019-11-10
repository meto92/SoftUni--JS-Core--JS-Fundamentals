function formatText([text]) {
    text = text.replace(/([.,!?:;]) */g, '$1 ')
        .replace(/ +([.,!?:;])/g, '$1')
        .replace(/([.!])\s+([.!])/g, '$1$2')
        .replace(/\. +(\d+)/g, '.$1')
        .replace(/\"\s*(.+?)\s*\"/g, '"$1"')
        .trim();

    console.log(text);
}