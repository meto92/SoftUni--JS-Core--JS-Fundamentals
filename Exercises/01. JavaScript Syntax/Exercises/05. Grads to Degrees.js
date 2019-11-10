function printDegrees(grads) {
    let degrees = grads % 400 / 400 * 360 % 360;

    if (degrees < 0){
        degrees += 360;
    }

    console.log(degrees);
}