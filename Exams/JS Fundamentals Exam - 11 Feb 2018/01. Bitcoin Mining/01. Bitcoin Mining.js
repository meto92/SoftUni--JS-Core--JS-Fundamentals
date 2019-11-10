function solve(array) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;

    let firstBitcoinBoughtDay = 0;

    let money = array.map(str => +str)
        .reduce((acc, gold, index) => {

            acc += (index + 1) % 3 === 0
                ? gold * goldPrice * 0.7
                : gold * goldPrice;

            if (!firstBitcoinBoughtDay && acc >= bitcoinPrice) {
                firstBitcoinBoughtDay = index + 1;
            }

            return acc;
        }, 0);

    let boughtBitcoins = Math.floor(money / bitcoinPrice);

    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if (firstBitcoinBoughtDay) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBoughtDay}`);
    }

    console.log(`Left money: ${(money - boughtBitcoins * bitcoinPrice).toFixed(2)} lv.`);
}