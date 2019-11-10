function replaceMultiplications(text) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;
    let multiplications = text.match(regex);

    for (let multiplication of multiplications) {
        let [num1, num2] = multiplication.split(/\s*\*\s*/).map(Number);

        text = text.replace(multiplication, num1 * num2);
    }

    console.log(text);
}