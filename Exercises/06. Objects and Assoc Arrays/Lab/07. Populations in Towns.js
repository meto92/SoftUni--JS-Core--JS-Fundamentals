function countPopulationByTowns(arr) {
    let populationByTowns = {};

    for (let line of arr) {
        let townArgs = line.split(" <-> ");

        let town = townArgs[0];
        let population = Number(townArgs[1]);

        if (!populationByTowns[town]) {
            populationByTowns[town] = 0;
        }

        populationByTowns[town] += population;
    }

    for (let town in populationByTowns) {
        console.log(`${town} : ${populationByTowns[town]}`);
    }
}