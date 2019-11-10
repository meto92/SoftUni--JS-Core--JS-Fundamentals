function solve(primaryMatrix, secondaryMatrix, overlayCoords, startCoords) {
    let [n, m] = [primaryMatrix.length, primaryMatrix[0].length];
    let [p, q] = [secondaryMatrix.length, secondaryMatrix[0].length];

    overlayCoords.forEach(([r, c]) => {
        for (let row = r; row < Math.min(n, r + p); row++) {
            for (let col = c; col < Math.min(m, c + q); col++) {
                primaryMatrix[row][col] = secondaryMatrix[row - r][col - c]
                    ? +!primaryMatrix[row][col]
                    : primaryMatrix[row][col];
            }
        }
    });

    let matrix = JSON.parse(JSON.stringify(primaryMatrix));

    let path = [{
        x: startCoords[0],
        y: startCoords[1]
    }];

    let isInside = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

    let pathExists = false;

    while (true) {
        let pos = path[path.length - 1];

        if (path.length > 1
            && ((pos.x === 0 && pos.y > 0 && pos.y < m - 1)
                || (pos.x === n - 1 && pos.y > 0 && pos.y < m - 1)
                || (pos.y === 0 && pos.x > 0 && pos.x < n - 1)
                || (pos.y === m - 1 && pos.x > 0 && pos.x < n - 1))
        ) {
            pathExists = true;

            break;
        }

        matrix[pos.x][pos.y] = 1;

        if (isInside(pos.x, pos.y - 1) && !matrix[pos.x][pos.y - 1]) {
            path.push({
                x: pos.x,
                y: pos.y - 1
            });
        } else if (isInside(pos.x, pos.y + 1) && !matrix[pos.x][pos.y + 1]) {
            path.push({
                x: pos.x,
                y: pos.y + 1
            });
        } else if (isInside(pos.x - 1, pos.y) && !matrix[pos.x - 1][pos.y]) {
            path.push({
                x: pos.x - 1,
                y: pos.y
            });
        } else if (isInside(pos.x + 1, pos.y) && !matrix[pos.x + 1][pos.y]) {
            path.push({
                x: pos.x + 1,
                y: pos.y
            });
        } else {
            break;
        }
    }

    console.log(path.length);

    let lastPosition = path.pop();

    if (pathExists) {
        if (lastPosition.x === 0) {
            console.log('Top');
        } else if (lastPosition.x === n - 1) {
            console.log('Bottom');
        } else if (lastPosition.y === 0){
            console.log('Left');
        } else {
            console.log('Right');
        }
    } else {
        let up = lastPosition.x < n / 2;
        let left = lastPosition.y < m / 2;

        let quadrant = 4;

        if (up && !left) {
            quadrant = 1;
        } else if (up && left) {
            quadrant = 2;
        } else if (!up && left) {
            quadrant = 3;
        }

        console.log(`Dead end ${quadrant}`);
    }
}