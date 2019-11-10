function printSmallestTwoNumbers(nums) {
    nums.sort((a, b) => a - b);

    console.log(`${nums.shift()} ${nums.shift()}`);
}