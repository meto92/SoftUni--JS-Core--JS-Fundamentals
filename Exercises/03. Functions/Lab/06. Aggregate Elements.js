function aggregateNumbers(nums) {
    let aggregate = (nums, initialValue, func) => {
        let result = initialValue;

        for (let num of nums) {
            result  = func(result, num);
        }

        return result;
    };

    console.log(aggregate(nums, 0, (a, b) => a + b));
    console.log(aggregate(nums, 0, (a, b) => a + 1 / b));
    console.log(aggregate(nums, "", (a, b) => a + b));
}