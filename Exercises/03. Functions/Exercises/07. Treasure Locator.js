function printLocations(coords) {
    let isOnTuvalu = (x, y) => x >= 1 && x <= 3 && y >= 1 && y <= 3;
    let isOnTokelau = (x, y) => x >= 8 && x <= 9 && y >= 0 && y <= 1;
    let isOnSamoa = (x, y) => x >= 5 && x <= 7 && y >= 3 && y <= 6;
    let isOnTonga = (x, y) => x >= 0 && x <= 2 && y >= 6 && y <= 8;
    let isOnCook = (x, y) => x >= 4 && x <= 9 && y >= 7 && y <= 8;

    let getLocation = (x, y) => {
        if (isOnTuvalu(x, y)) {
            return 'Tuvalu';
        }

        if (isOnTokelau(x, y)) {
            return 'Tokelau';
        }

        if (isOnSamoa(x, y)) {
            return 'Samoa';
        }

        if (isOnTonga(x, y)) {
            return 'Tonga';
        }

        if (isOnCook(x, y)) {
            return 'Cook';
        }

        return 'On the bottom of the ocean';
    };

    for (let i = 0; i < coords.length; i += 2) {
        let x = coords[i];
        let y = coords[i + 1];

        console.log(getLocation(x, y));
    }
}