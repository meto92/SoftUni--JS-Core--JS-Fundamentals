function printCompoundInterest([principalSum, interestRateInPercent, compoundingPeriodInMonths, timespanInYears]) {
    let n = 1 / (compoundingPeriodInMonths / 12);

    let result = principalSum * (1 + interestRateInPercent / 100 / n) ** (n * timespanInYears);

    console.log(result.toFixed(2));
}