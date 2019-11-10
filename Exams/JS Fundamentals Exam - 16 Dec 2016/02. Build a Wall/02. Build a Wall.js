function build(strNumbers) {
    let numbers = strNumbers.map(str => +str);

    const concretePerYardHeight = 195;
    const cubicYardConcretePrice = 1900;

    let concreteUsed = [];

    let prevLength = -1;
    let currentLength = 0;

    while (prevLength !== currentLength) {
        prevLength = currentLength;

        let concreteUsedCurrentDay = 0;

        numbers.forEach((number, index) => {
            if (number < 30) {
                numbers[index]++;
                concreteUsedCurrentDay += concretePerYardHeight;
            }
        });

        if (concreteUsedCurrentDay) {
            concreteUsed.push(concreteUsedCurrentDay);
        }

        currentLength = concreteUsed.length;
    }

    let pesos = concreteUsed.reduce((a, b) => a + b) * cubicYardConcretePrice;

    console.log(concreteUsed.join(', '));
    console.log(`${pesos} pesos`);
}