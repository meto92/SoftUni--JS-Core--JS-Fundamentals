function printDistance([v1, v2, timeInSeconds]) {
    let timeInHours = timeInSeconds / 3600;
    let s1 = v1 * timeInHours;
    let s2 = v2 * timeInHours;

    console.log(Math.abs((s1 - s2) * 1000));
}