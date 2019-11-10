function decipherMessage(input) {
    let templateMatrixLength = +input.shift();

    let decodingTemplateMatrix = [];
    let encodedMessageMatrix = [];

    input.forEach((line, index) => {
        let elements = line.split(' ')
            .map(p => +p);

        if (index < templateMatrixLength) {
            decodingTemplateMatrix.push(elements);
        } else {
            encodedMessageMatrix.push(elements);
        }
    });

    let chars = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    encodedMessageMatrix.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            let templateRowIndex = rowIndex % templateMatrixLength;
            let templateColIndex = colIndex % decodingTemplateMatrix[0].length;

            let code = decodingTemplateMatrix[templateRowIndex][templateColIndex] + encodedMessageMatrix[rowIndex][colIndex];

            encodedMessageMatrix[rowIndex][colIndex] = chars[code % chars.length];
        });
    });

    console.log(encodedMessageMatrix.map(row => row.join(''))
        .join(''));
}