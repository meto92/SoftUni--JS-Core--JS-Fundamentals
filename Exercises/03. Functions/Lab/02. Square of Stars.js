function printSquareOfStars(size = 5) {
    let asterisks = count => "*" + " *".repeat(count - 1);

    for (let row = 1; row <= size; row++) {
        console.log(asterisks(size));
    }
}