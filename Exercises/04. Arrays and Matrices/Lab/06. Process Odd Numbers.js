function processNumbersInOddPositions(nums) {
    console.log(
        nums.filter((num, i) => i % 2 == 1).
            map(num => 2 * num).
            reverse().
            join(" ")
    );
}