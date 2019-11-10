function printGladiators(array) {
    let gladiatorsInfo = new Map();
    let regex = /.+? -> .+? -> \d+/;

    for (let str of array) {
        if (str === 'Ave Cesar') {
            break;
        }

        if (regex.test(str)) {
            let [gladiator, technique, skill] = str.split(' -> ');

            if (!gladiatorsInfo.has(gladiator)) {
                gladiatorsInfo.set(gladiator, new Map());
            }

            if (!gladiatorsInfo.get(gladiator).has(technique)) {
                gladiatorsInfo.get(gladiator).set(technique, +skill);
            } else {
                gladiatorsInfo.get(gladiator).set(technique, Math.max(gladiatorsInfo.get(gladiator).get(technique), +skill));
            }
        } else {
            let [gladiator1, gladiator2] = str.split(' vs ');

            if (gladiatorsInfo.get(gladiator1) && gladiatorsInfo.get(gladiator2)) {
                let gladiatorsHaveCommonTechnique = false;

                let gladiator1Techniques = [...gladiatorsInfo.get(gladiator1).keys()];
                let gladiator2Techniques = [...gladiatorsInfo.get(gladiator2).keys()];

                for (let gladiator1Technique of gladiator1Techniques) {
                    if (gladiator2Techniques.includes(gladiator1Technique)) {
                        gladiatorsHaveCommonTechnique = true;
                        break;
                    }
                }

                if (gladiatorsHaveCommonTechnique) {
                    let gladiator1TotalSkillPoints = [...gladiatorsInfo.get(gladiator1)
                        .values()]
                        .reduce((a, b) => a + b);
                    let gladiator2TotalSkillPoints = [...gladiatorsInfo.get(gladiator2)
                        .values()]
                        .reduce((a, b) => a + b);

                    if (gladiator1TotalSkillPoints >= gladiator2TotalSkillPoints) {
                        gladiatorsInfo.delete(gladiator2);
                    } else {
                        gladiatorsInfo.delete(gladiator1);
                    }
                }
            }
        }
    }

    [...gladiatorsInfo]
        .sort((a, b) => [...b[1].values()]
            .reduce((a, b) => a + b) - [...a[1].values()]
            .reduce((a, b) => a + b) || a[0].localeCompare(b[0]))
        .forEach(gladiator => {

            console.log(`${gladiator[0]}: ${[...gladiator[1].values()].reduce((a, b) => a + b)} skill`);

            for (let [technique, skill] of [...gladiator[1]].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))) {
                console.log(`- ${technique} <!> ${skill}`);
            }
        });
}