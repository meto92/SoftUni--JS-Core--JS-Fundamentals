function solve(array) {
    let map = new Map();

    array.forEach(str => {
        let [countryName, townName, travelCost] = str.split(' > ');

        if (townName[0].toLowerCase() === townName[0]) {
            townName = townName[0].toUpperCase() + townName.substring(1);
        }

        if (!map.has(countryName)) {
            map.set(countryName, {});
        }

        if (!map.get(countryName)[townName]) {
            map.get(countryName)[townName] = +travelCost;
        } else {
            map.get(countryName)[townName] = Math.min(map.get(countryName)[townName], +travelCost);
        }
    });

    [...map]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(kvp => {
            let priceByTownStr = Object.keys(kvp[1])
                .sort((a, b) => map.get(kvp[0])[a] - map.get(kvp[0])[b])
                .map(townName => `${townName} -> ${map.get(kvp[0])[townName]}`)
                .join(' ');

            console.log(`${kvp[0]} -> ${priceByTownStr}`);
        });
}