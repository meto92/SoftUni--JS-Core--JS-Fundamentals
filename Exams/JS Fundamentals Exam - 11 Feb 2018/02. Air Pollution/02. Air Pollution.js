function printPollutedAreas(map, arr) {
    let matrix = map.map(line => line
        .split(' ')
        .map(str => +str));

    let rows = cols = 5;

    arr.forEach(str => {
        let args = str.split(' ');

        let command = args[0];
        let param = +args[1];

        switch (command) {
            case 'breeze':
                matrix[param] = matrix[param].map(number => Math.max(0, number - 15));
                break;
            case 'gale':
                for (let row = 0; row < rows; row++) {
                    matrix[row][param] = Math.max(0, matrix[row][param] - 20);
                }
                break;
            case 'smog':
                matrix = matrix.map(row => row.map(number => number + param));
                break;
        }
    });

    let pollutedAreas = matrix.reduce((acc, row, rowIndex) => {
        row.forEach((col, colIndex) => {
            if (matrix[rowIndex][colIndex] >= 50) {
                acc.push(`[${rowIndex}-${colIndex}]`);
            }
        });

        return acc;
        }, [])
        .join(', ');

    if (pollutedAreas.length) {
        console.log(`Polluted areas: ${pollutedAreas}`);
    } else {
        console.log('No polluted areas');
    }
}