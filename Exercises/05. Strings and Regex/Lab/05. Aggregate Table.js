function aggregateTable(table) {
    let towns = [];
    let totalIncome = 0;

    for (let line of table) {
       let [town, income] = line.split(/\s*\|\s*/).filter(p => !!p);

        towns.push(town);
        totalIncome += Number(income);
    }

    console.log(towns.join(", "));
    console.log(totalIncome);
}