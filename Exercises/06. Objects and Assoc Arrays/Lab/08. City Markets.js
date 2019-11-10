function printMarketsInfo(sales) {
    let salesInfo = {};

    for (let saleInfo of sales) {
        let [town, product, amountAndPrice] = saleInfo.split(" -> ");
        let [amountOfSales, priceForOneUnit] = amountAndPrice.split(" : ").map(Number);

        if (!salesInfo[town]) {
            salesInfo[town] = {};
        }

        if (!salesInfo[town][product]) {
            salesInfo[town][product] = 0;
        }

        salesInfo[town][product] += amountOfSales * priceForOneUnit;
    }

    for (let town in salesInfo) {
        console.log(`Town - ${town}`);

        for (let product in salesInfo[town]) {
            console.log(`$$$${product} : ${salesInfo[town][product]}`);
        }
    }
}