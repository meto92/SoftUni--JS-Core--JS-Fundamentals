function printRestaurantBill(arr) {
    let products = [];
    let totalSum = 0;

    for (let i = 0; i < arr.length; i += 2) {
      products.push(arr[i]);
      totalSum += Number(arr[i + 1]);
    }

    console.log(`You purchased ${products.join(", ")} for a total sum of ${totalSum}`)
}