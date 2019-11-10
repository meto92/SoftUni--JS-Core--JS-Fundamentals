function solve(array) {
    let weightByFruit = {
        peach: 0.14,
        plum: 0.02,
        cherry: 0.009
    };

    let fruitPerKompot = {
        peach: 2.5,
        plum: 10,
        cherry: 25
    };

    let kompotByFruit = {
        peach: 0,
        plum: 0,
        cherry: 0
    };

    let bucket = 0;

    array.forEach(str => {
        let [fruit, kg] = str.toLowerCase().split(/\s+/);

        if (weightByFruit[fruit]) {
            kompotByFruit[fruit] += +kg / weightByFruit[fruit] / fruitPerKompot[fruit];
       } else {
            bucket += +kg;
        }
    });

    let rakiya = bucket / 5;

    console.log(`Cherry kompots: ${Math.floor(kompotByFruit.cherry)}`);
    console.log(`Peach kompots: ${Math.floor(kompotByFruit.peach)}`);
    console.log(`Plum kompots: ${Math.floor(kompotByFruit.plum)}`);
    console.log(`Rakiya liters: ${rakiya.toFixed(2)}`);
}