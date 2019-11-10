function getLowestPriceForEveryProduct(arr) {
    let productsInfo = {};

    for (let productInfo of arr) {
        let [townName, productName, productPrice] = productInfo.split(" | ");
        productPrice = Number(productPrice);

        if (!productsInfo[productName]) {
            productsInfo[productName] = new Map();
        }

        productsInfo[productName].set(townName, productPrice);
    }

    for (let product in productsInfo) {
        let productPrice = Number.MAX_VALUE;
        let townName;

        for (let town of productsInfo[product].keys()) {
            let price = productsInfo[product].get(town);

            if (price < productPrice) {
                productPrice = price;
                townName = town;
            }
        }

        console.log(`${product} -> ${productPrice} (${townName})`)
    }
}