function calc(input) {
    let numbers = [];

    for (let element of input) {
        if (!+element) {
            if (numbers.length < 2) {
                console.log('Error: not enough operands!');

                return;
            }

            let secondOperand = numbers.pop();
            let firstOperand = numbers.pop();

            numbers.push(eval(`${firstOperand}${element}${secondOperand}`));
        } else {
            numbers.push(+element);
        }
    }

    if (numbers[1]) {
        console.log('Error: too many operands!');
    } else {
        console.log(numbers[0]);
    }
}