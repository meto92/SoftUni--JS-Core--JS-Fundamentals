function printPath([x1, y1, x2, y2, x3, y3]) {
    let getDistance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    let d12 = getDistance(x1, y1, x2, y2);
    let d13 = getDistance(x1, y1, x3, y3);
    let d23 = getDistance(x2, y2, x3, y3);

    let d123 = d12 + d23;
    let d132 = d13 + d23;
    let d213 = d12 + d13;

    let minDistance = Math.min(d123, d132, d213);

    if (minDistance === d123) {
        console.log(`1->2->3: ${d123}`);
    } else if (minDistance === d132) {
        console.log(`1->3->2: ${d132}`);
    } else {
        console.log(`2->1->3: ${d213}`);
    }
}