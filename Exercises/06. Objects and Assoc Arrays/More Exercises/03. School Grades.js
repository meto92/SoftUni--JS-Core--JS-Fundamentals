function solve(input) {
    let studentsByGrade = new Map();

    input.forEach(str => {
        let args = str.split(', ');

        let name = args[0].split(': ')[1];
        let grade = +args[1].split(': ')[1];
        let averageScore = +args[2].split(': ')[1];

        if (!studentsByGrade.has(grade)) {
            studentsByGrade.set(grade, []);
        }

        if (averageScore >= 3 && grade < 12) {
            let arr = studentsByGrade.get(grade);

            arr.push({
                name: name,
                grade: grade,
                averageScore: averageScore
            });
        }
    });

    [...studentsByGrade]
        .sort((a, b) => a[0] - b[0])
        .forEach(kvp => {
            console.log(`${kvp[0] + 1} Grade `);

            let averageAnnualClassGradeFromLastYear = kvp[1]
                .map(s => s.averageScore)
                .reduce((a, b) => a + b) / kvp[1].length;

            console.log(`List of students: ${kvp[1].map(s => s.name).join(', ')}`);
            console.log(`Average annual grade from last year: ${averageAnnualClassGradeFromLastYear.toFixed(2)}`);
            console.log();
        });
}

solve(['Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00']
)