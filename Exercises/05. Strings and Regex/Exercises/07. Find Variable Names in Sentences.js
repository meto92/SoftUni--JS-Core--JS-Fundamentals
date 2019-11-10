function printVariableNames(string) {
    let regex = /\b_([a-zA-Z]+)\b/g;
    let variableNames = [];

    let variableName = regex.exec(string);

    while (variableName) {
        variableNames.push(variableName[1]);

        variableName = regex.exec(string);
    }

    console.log(variableNames.join(','))
}