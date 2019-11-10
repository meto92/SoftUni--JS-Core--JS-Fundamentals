function printTriangleOfStars(size) {
    let repeatIt = n => console.log("*".repeat(n));

    let count = 1;
    let num = 1;

    while (count > 0) {
        repeatIt(count);

        if (count == size) {
            count = size - 1;
            num = -1;
            continue;
        }

        count += num;
    }
}