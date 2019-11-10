function validate([x1, y1, x2, y2]) {
    let isDistanceInteger = (x1, y1, x2, y2) => Number.isInteger(Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2));

    let printOutput = (x1, y1, x2, y2, isValid) => console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? '' : 'in'}valid`);

    printOutput(x1, y1, 0, 0, isDistanceInteger(x1, y1, 0, 0));
    printOutput(x2, y2, 0, 0, isDistanceInteger(x2, y2, 0, 0));
    printOutput(x1, y1, x2, y2, isDistanceInteger(x1, y1, x2, y2));
}