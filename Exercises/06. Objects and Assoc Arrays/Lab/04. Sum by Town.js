function sumByTowns(arr) {
    let incomesByTowns = {};

    for (let i = 0; i < arr.length; i += 2) {
        let town = arr[i];
        let income = Number(arr[i + 1]);

        if (!incomesByTowns[town]) {
            incomesByTowns[town] = 0;
        }

        incomesByTowns[town] += income;
    }

    console.log(JSON.stringify(incomesByTowns));
}