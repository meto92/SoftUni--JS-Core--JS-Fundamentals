function recommendProcedures(array) {
    let cut = (chunk) => 0.25 * chunk;
    let lap = (chunk) => 0.8 * chunk;
    let grind = (chunk) => chunk - 20;
    let etch = (chunk) => chunk - 2;
    let xRay = (chunk) => chunk + 1;
    let transportAndWash = (chunk) => Math.floor(chunk);

    let desiredThickness = +array[0];

    let manipulate = (chunk, manipulation, manipulationName) => {
        if (manipulation(chunk) < desiredThickness - 1
            || chunk === desiredThickness) {
            return chunk;
        }

        let count = 0;

        while (manipulation(chunk) > desiredThickness - 2 && chunk !== desiredThickness) {
            chunk = manipulation(chunk);
            count++;
        }

        console.log(`${manipulationName} x${count}`);

        if (manipulation(chunk) !== chunk  + 1) {
            chunk = transportAndWash(chunk);

            console.log('Transporting and washing');
        }

        return chunk;
    };

    for (let i = 1; i < array.length; i++) {
        let chunk = +array[i];

        console.log(`Processing chunk ${chunk} microns`);

        chunk = manipulate(chunk, cut, 'Cut');
        chunk = manipulate(chunk, lap, 'Lap');
        chunk = manipulate(chunk, grind, 'Grind');
        chunk = manipulate(chunk, etch, 'Etch');
        chunk = manipulate(chunk, xRay, 'X-ray');

        console.log(`Finished crystal ${chunk} microns`)
    }
}