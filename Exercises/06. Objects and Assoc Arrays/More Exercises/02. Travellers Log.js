function printTravellersInfo(input) {
    let travellers = new Map();

    input.forEach(str => {
        let args = str.split(' ');

        let name = args[0];

        if (!travellers.has(name)) {
            travellers.set(name, {
                money: 0,
                countries: new Map()
            });
        }

        if (args.length === 3) {
            let money = +args[2];

            travellers.get(name).money += money;
        } else {
            let landmark = args[3];
            let country = args[5];
            let cost = +args[7];

            if (travellers.get(name).money >= cost) {
                if (!travellers.get(name).countries.has(country)) {
                    travellers.get(name).countries.set(country, new Set());
                }

                let countryLandmarks = travellers.get(name).countries.get(country);

                if (!countryLandmarks.has(landmark)) {
                    countryLandmarks.add(landmark);
                    travellers.get(name).money -= cost;
                }
            } else if (!travellers.get(name).countries.get(country)
                || !travellers.get(name).countries.get(country).has(landmark)) {
                console.log(`Not enough money to visit ${landmark}`);
            }
        }
    });

    [...travellers]
        .sort((a, b) => b[1].countries.size - a[1].countries.size)
        .forEach(kvp => {
            console.log(`${kvp[0]} visited ${kvp[1].countries.size} countries and has ${kvp[1].money} money left`);

            [...kvp[1].countries]
                .sort((a, b) => b[1].size - a[1].size)
                .forEach(countryInfo => {
                    console.log(`- ${countryInfo[0]} -> ${countryInfo[1].size} landmarks`);

                    [...countryInfo[1]]
                        .sort()
                        .forEach(landmark => console.log(`-- ${landmark}`));
                });
        });
}