function printBottles(fruitQuantities) {
    const fruitQuantityRequiredForBottle = 1000;
    let quantityByFruit = {};
    let bottlesByFruit = {};

    fruitQuantities.forEach(fq => {
        let [fruit, quantity] = fq.split(' => ');

        if (!quantityByFruit.hasOwnProperty(fruit)) {
            quantityByFruit[fruit] = 0;
        }

        quantityByFruit[fruit] += +quantity;

        if (quantityByFruit[fruit] >= fruitQuantityRequiredForBottle) {
            if (!bottlesByFruit.hasOwnProperty(fruit)) {
                bottlesByFruit[fruit] = 0;
            }

            bottlesByFruit[fruit] += Math.floor(quantityByFruit[fruit] / fruitQuantityRequiredForBottle);
            quantityByFruit[fruit] %= fruitQuantityRequiredForBottle;
        }
    });

    for (let fruit in bottlesByFruit) {
        console.log(`${fruit} => ${bottlesByFruit[fruit]}`);
    }
}