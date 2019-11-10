function printRealRoots(a, b, c) {
    let discriminant = b ** 2 - 4 * a * c;

    if (discriminant < 0) {
        console.log("No");

        return;
    }

    if (discriminant === 0) {
        let x = -b / (2 * a);

        console.log(x);

        return;
    }

    let sqrtD = Math.sqrt(discriminant);

    let x1 = (-b + sqrtD) / (2 * a);
    let x2 = (-b - sqrtD) / (2 * a);

    console.log(x2);
    console.log(x1);
}