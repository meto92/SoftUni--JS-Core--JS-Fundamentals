function validateEmployeeData(data) {
    let regex = /^([A-Z][a-zA-Z]*)\s+-\s+([1-9]\d*)\s+-\s+([a-zA-Z\d- ]+)$/;
    let match;

    for (let line of data) {
        if (match = regex.exec(line)) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`)
        }
    }
}