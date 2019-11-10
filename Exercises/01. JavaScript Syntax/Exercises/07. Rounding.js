function round(input) {
    let [number, precision] = [+input[0], Math.min(+input[1], 15)];

    let rounded = +number.toFixed(precision);

    console.log(rounded);
}