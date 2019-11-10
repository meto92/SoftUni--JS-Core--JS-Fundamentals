function printFirstAndLastK(nums) {
    let k = nums[0];

    console.log(nums.slice(1, k + 1).join(" "));
    console.log(nums.reverse().slice(0, k).reverse().join(" "));
}