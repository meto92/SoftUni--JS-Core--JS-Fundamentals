function calculate(a, b, operator) {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    let calc = (a, b, operator) => operator(a, b);

    switch (operator) {
        case "+":
            console.log(calc(a, b, add));
            break;
        case "-":
            console.log(calc(a, b, subtract));
            break;
        case "*":
            console.log(calc(a, b, multiply));
            break;
        case "/":
            console.log(calc(a, b, divide));
    }
}