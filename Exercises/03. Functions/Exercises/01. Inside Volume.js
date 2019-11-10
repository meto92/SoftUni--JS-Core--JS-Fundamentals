function solve(arr) {
    let [xMin, xMax] = [10, 50];
    let [yMin, yMax] = [20, 80];
    let [zMin, zMax] = [15, 50];

    let isPointInVolume = (x, y, z) =>
        x >= xMin
        && x <= xMax
        && y >= yMin
        && y <= yMax
        && z >= zMin
        && z <= zMax;

    for (let i = 0; i < arr.length; i += 3) {
        let [x, y, z] = [+arr[i], +arr[i + 1], +arr[i + 2]];

        let isInside = isPointInVolume(x, y, z);

        console.log(isInside ? 'inside' : 'outside');
    }
}