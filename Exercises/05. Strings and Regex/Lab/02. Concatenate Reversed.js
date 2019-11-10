function concatenateReversed(arr) {
    console.log(arr.reverse().map(w => Array.from(w).reverse().join("")).join(""));
}