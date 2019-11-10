function isPrime(number) {
    if (number < 2 || number % 1 != 0) {
        return false;
    }

    let maxDivisor = Math.sqrt(number);

    for (let divisor = 2; divisor <= maxDivisor; divisor++) {
        if (number % divisor == 0) {
            return false;
        }
    }

    return true;
}