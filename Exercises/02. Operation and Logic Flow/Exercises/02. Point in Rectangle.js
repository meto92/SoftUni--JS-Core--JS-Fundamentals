function isPointInRect([x, y, xMin, xMax, yMin, yMax]) {
    let isInside = x >= xMin && x <= xMax && y >= yMin && y <= yMax;

    let result = isInside ? 'inside' : 'outside';

    console.log(result);
}