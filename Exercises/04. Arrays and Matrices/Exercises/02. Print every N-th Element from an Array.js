function printArray(array) {
    let step = +array.pop();

    console.log(array
        .filter((element, index) => index === 0
			|| index  % step === 0)
        .join('\n'));
}