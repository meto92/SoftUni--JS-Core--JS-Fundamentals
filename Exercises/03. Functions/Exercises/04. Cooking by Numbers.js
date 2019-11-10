function cook(arr) {
    let divideByTwo = (a) => a / 2;
    let sqrt = (a) => Math.sqrt(a);
    let addOne = (a) => a + 1;
    let multiplyByThree = (a) => a * 3;
    let subtractTwentyPercent = (a) => 0.8 * a;

    let functionByName = {
        'chop': divideByTwo,
        'dice': sqrt,
        'spice': addOne,
        'bake': multiplyByThree,
        'fillet': subtractTwentyPercent
    };

    let number = +arr[0];

    for (let i = 1; i < arr.length; i++) {
        number = functionByName[arr[i]](number);

        console.log(number);
    }
}