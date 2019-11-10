function solve(array) {
    let earnedMoney = 0;

    array.map(str => str.split(', '))
        .forEach(args => {
            let price = 0.8;

            let coins = +args.shift();
            let drink = args.shift();

            if (drink === 'coffee') {
                let coffeeType = args.shift();

                if (coffeeType === 'decaf') {
                    price = 0.9;
                }
            }

            let sugarQuantity = +args.pop();

            if (args.length) {
                price += +(0.1 * price).toFixed(1);
            }

            if (sugarQuantity) {
                price += 0.1;
            }

            if (coins >= price) {
                earnedMoney += price;

                let change = coins - price;

                console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
            } else {
                let moneyNeeded = price - coins;

                console.log(`Not enough money for ${drink}. Need ${moneyNeeded.toFixed(2)}$ more.`);
            }
        });

    console.log(`Income Report: ${earnedMoney.toFixed(2)}$`);
}