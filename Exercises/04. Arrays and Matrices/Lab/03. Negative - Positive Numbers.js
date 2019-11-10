function orderNumbers(nums) {
    let result = [];

    for (let num of nums) {
        if (num < 0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    }

    result.forEach(num => console.log(num));
}