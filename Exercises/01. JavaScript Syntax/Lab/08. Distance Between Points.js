function calcDistance(x1, y1, x2, y2) {
    let p1 = { x: x1, y: y1 };
    let p2 = { x: x2, y: y2 };

    let xDistance = p1.x - p2.x;
    let yDistance = p1.y - p2.y;
    let distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

    return distance;
}