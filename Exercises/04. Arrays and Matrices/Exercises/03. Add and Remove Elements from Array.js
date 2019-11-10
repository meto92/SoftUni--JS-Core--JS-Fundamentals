function addAndRemoveElements(commands) {
    let array = [];

    let currentNumber = 1;

    for (let command of commands) {
        if (command === 'add') {
            array.push(currentNumber);
        }
        else if (array.length >= 1) {
            array.pop();
        }

        currentNumber++;
    }

    console.log(array.length === 0
        ? 'Empty'
        : array.join('\n'))
}