function printJuices(quantitiesByJuice) {
    let juices = {};

    quantitiesByJuice.forEach(qj => {
        let [juice, quantity] = qj.split(' : ');
        let initial = juice[0];

        if (!juices.hasOwnProperty(initial)) {
            juices[initial] = [];
        }

        juices[initial][juice] = quantity;
    });

    Object.keys(juices).sort()
        .forEach(initial => {
            console.log(initial);

            Object.keys(juices[initial])
                .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
                .forEach(fruit => console.log(`  ${fruit}: ${juices[initial][fruit]}`));
        });
}