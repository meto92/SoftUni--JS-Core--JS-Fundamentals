function solve(input) {
    let map = new Map();

    input.map(str => str.split(', '))
        .forEach(args => {
            let command = args.shift();

            switch (command) {
                case 'IN': {
                    let coffeeBrand = args[0];
                    let coffeeName = args[1];
                    let expireDate = args[2];
                    let quantity = +args[3];

                    if (!map.has(coffeeBrand)) {
                        map.set(coffeeBrand, {});
                    }

                    if (!map.get(coffeeBrand)[coffeeName]) {
                        map.get(coffeeBrand)[coffeeName] = {
                            expireDate,
                            quantity
                        };
                    } else {
                        let coffeeObj = map.get(coffeeBrand)[coffeeName];

                        if (expireDate > coffeeObj.expireDate) {
                            coffeeObj.expireDate = expireDate;
                            coffeeObj.quantity = quantity;
                        } else if (expireDate === coffeeObj.expireDate) {
                            coffeeObj.quantity += quantity;
                        }
                    }
                    break;
                }
                case 'OUT': {
                    let coffeeBrand = args[0];
                    let coffeeName = args[1];
                    let expireDate = args[2];
                    let quantity = +args[3];

                    if (map.get(coffeeBrand)
                        && map.get(coffeeBrand)[coffeeName]
                        && map.get(coffeeBrand)[coffeeName].quantity >= quantity
                        && map.get(coffeeBrand)[coffeeName].expireDate > expireDate
                    ) {
                        map.get(coffeeBrand)[coffeeName].quantity -= quantity;
                    }

                    break;
                }
                case 'REPORT':
                    console.log('>>>>> REPORT! <<<<<');

                    [...map].forEach(([coffeeBrand, coffeeObjects]) => {
                        console.log(`Brand: ${coffeeBrand}:`);

                        Object.keys(coffeeObjects)
                            .forEach(coffeeName => {
                                let expireDate = coffeeObjects[coffeeName].expireDate;
                                let quantity = coffeeObjects[coffeeName].quantity;

                                console.log(`-> ${coffeeName} -> ${expireDate} -> ${quantity}.`);
                            });
                    });

                    break;
                case 'INSPECTION':
                    console.log('>>>>> INSPECTION! <<<<<');

                    [...map].sort((a, b) => a[0].localeCompare(b[0]))
                        .forEach(([coffeeBrand, coffeeObjects]) => {
                            console.log(`Brand: ${coffeeBrand}:`);

                            Object.keys(coffeeObjects)
                                .sort((a, b) => coffeeObjects[b].quantity - coffeeObjects[a].quantity)
                                .forEach(coffeeName => {
                                    let expireDate = coffeeObjects[coffeeName].expireDate;
                                    let quantity = coffeeObjects[coffeeName].quantity;

                                    console.log(`-> ${coffeeName} -> ${expireDate} -> ${quantity}.`);
                                });
                        });
                    break;
            }
        });
}