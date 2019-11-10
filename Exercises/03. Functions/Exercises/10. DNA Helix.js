function printDnaHelix(length) {
    let getLine = (left, right, row) => {
        switch (row % 4) {
            case 0:
                return `**${left}${right}**`;
            case 1:
                return `*${left}--${right}*`;
            case 2:
                return `${left}----${right}`;
            case 3:
                return `*${left}--${right}*`;
        }
    };

    let sequence = 'ATCGTTAGGG';

    let index = 0;

    for (let row = 0; row < length; row++) {
        let left = sequence[index++ % sequence.length];
        let right = sequence[index++ % sequence.length];

        let line = getLine(left, right, row);

        console.log(line);
    }
}