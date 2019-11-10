function printCatalogue(input) {
    let catalogue = new Map();

    input.forEach(str => {
        let [productName, productPrice] = str.split(' : ');

        let initial = productName[0];

        if (!catalogue.has(initial)) {
            catalogue.set(initial, new Map());
        }

        catalogue.get(initial).set(productName, +productPrice);
    });

    [...catalogue]
        .sort()
        .forEach(map => {
            console.log(map[0]);

            [...map[1]]
                .sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
                .forEach(product => console.log(`  ${product[0]}: ${product[1]}`))
        });
}

printCatalogue(["Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10"]

)