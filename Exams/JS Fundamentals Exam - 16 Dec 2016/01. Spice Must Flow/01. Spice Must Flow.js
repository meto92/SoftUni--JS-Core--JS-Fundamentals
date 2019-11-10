function calcSpice([sourceStr]) {
    let source = +sourceStr;
    let days = 0;
    let spiceStored = 0;

    while (source >= 100) {
        spiceStored += source - 26;

        source -= 10;
        days++;
    }

    spiceStored -= Math.min(26, spiceStored);

    console.log(days);
    console.log(spiceStored);
}