function solve(array) {
    let specializedProfessions = [
        'Programming',
        'Hardware maintenance',
        'Cooking',
        'Translating',
        'Designing'
    ];
    let averageProfessions = [
        'Driving',
        'Managing',
        'Fishing',
        'Gardening'
    ];
    let clumsyProfessions = [
        'Singing',
        'Accounting',
        'Teaching',
        'Exam-Making',
        'Acting',
        'Writing',
        'Lecturing',
        'Modeling',
        'Nursing'
    ];

    let totalGold = 0;
    let specializedProfCustomerNumber = 0;
    let clumsyProfCustomerNumber = 0;

    array.forEach(str => {
        let args = str.split(' : ');

        let profession = args[0];
        let gold = +args[1];

        if (specializedProfessions.includes(profession) && gold >= 200) {
            totalGold += 0.8 * gold;
            specializedProfCustomerNumber++;

            if (specializedProfCustomerNumber % 2 === 0) {
                totalGold += 200;
            }
        } else if (averageProfessions.includes(profession)) {
            totalGold += gold;
        } else if (clumsyProfessions.includes(profession)) {
            clumsyProfCustomerNumber++;

            if (clumsyProfCustomerNumber % 2 === 0) {
                gold *= 0.95;
            } else if (clumsyProfCustomerNumber % 3 === 0) {
                gold *= 0.9;
            }

            totalGold += gold;
        }
    });

    console.log(`Final sum: ${totalGold.toFixed(2)}`);

    totalGold >= 1000
        ? console.log(`Mariyka earned ${(totalGold - 1000).toFixed(2)} gold more.`)
        : console.log(`Mariyka need to earn ${(1000 - totalGold).toFixed(2)} gold more to continue in the next task.`);
}