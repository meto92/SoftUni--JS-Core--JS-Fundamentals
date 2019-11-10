function getElementsInEvenPositions(arr) {
    return arr.filter((p, i) => i % 2 == 0 && !!p).join(" ");
}