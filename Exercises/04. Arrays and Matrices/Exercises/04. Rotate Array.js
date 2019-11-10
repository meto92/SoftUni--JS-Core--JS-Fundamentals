function rotateArray(array) {
    let rotations = +array.pop();

    let rotatedArray = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        rotatedArray[(i + rotations) % array.length] = array[i];
    }

    console.log(rotatedArray.join(' '))
}