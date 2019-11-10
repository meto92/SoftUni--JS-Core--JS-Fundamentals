function splitExpression(expression) {
    expression.split(/[\s\(\),;\.]+/).forEach(part => console.log(part));
}