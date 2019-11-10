function printProducedCarsStatistics(strings) {
    let map = new Map();

    strings.forEach(str => {
        let [carBrand, carModel, producedCars] = str.split(' | ');

        if (!map.has(carBrand)) {
            map.set(carBrand, new Map());
        }

        if (!map.get(carBrand).has(carModel)) {
            map.get(carBrand).set(carModel, 0);
        }

        map.get(carBrand).set(carModel, map.get(carBrand).get(carModel) + +producedCars);
    });

    for (let [carBrand, carModels] of map) {
        console.log(carBrand);

        for (let [carModel, producedCars] of carModels) {
            console.log(`###${carModel} -> ${producedCars}`);
        }
    }
}