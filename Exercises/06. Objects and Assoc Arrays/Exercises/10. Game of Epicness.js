function solve(objects, matrix) {
    let kingdomsInfo = new Map();

    objects.forEach(obj => {
        let [kingdom, general, army] = [obj.kingdom, obj.general, obj.army];

        if (!kingdomsInfo.has(obj.kingdom)) {
            kingdomsInfo.set(kingdom, new Map());
        }

        if (!kingdomsInfo.get(kingdom).get(general)) {
            kingdomsInfo.get(kingdom).set(general, {
                army: 0,
                wins: 0,
                losses: 0
            });
        }

        kingdomsInfo.get(kingdom).get(general).army += army;
    });

    matrix.forEach(row => {
        let attackingKingdom = row[0];
        let attackingGeneral = row[1];
        let defendingKingdom = row[2];
        let defendingGeneral = row[3];

        if (attackingKingdom !== defendingKingdom) {

            let attackingGeneralArmy = kingdomsInfo.get(attackingKingdom).get(attackingGeneral).army;
            let defendingGeneralArmy = kingdomsInfo.get(defendingKingdom).get(defendingGeneral).army;

            if (attackingGeneralArmy > defendingGeneralArmy) {
                kingdomsInfo.get(attackingKingdom).get(attackingGeneral).wins += 1;
                kingdomsInfo.get(defendingKingdom).get(defendingGeneral).losses += 1;
                kingdomsInfo.get(attackingKingdom).get(attackingGeneral).army = Math.floor(attackingGeneralArmy * 1.1);
                kingdomsInfo.get(defendingKingdom).get(defendingGeneral).army = Math.floor(defendingGeneralArmy * 0.9);
            } else if (defendingGeneralArmy > attackingGeneralArmy) {
                kingdomsInfo.get(defendingKingdom).get(defendingGeneral).wins += 1;
                kingdomsInfo.get(attackingKingdom).get(attackingGeneral).losses += 1;
                kingdomsInfo.get(defendingKingdom).get(defendingGeneral).army = Math.floor(defendingGeneralArmy * 1.1);
                kingdomsInfo.get(attackingKingdom).get(attackingGeneral).army = Math.floor(attackingGeneralArmy * 0.9);
            }
        }
    });

    [...kingdomsInfo].sort((a, b) => [...b[1].values()]
        .map(obj => obj.wins)
        .reduce((a, b) => a + b) - [...a[1].values()]
        .map(obj => obj.wins)
        .reduce((a, b) => a + b)
        || [...a[1].values()]
            .map(obj => obj.losses)
            .reduce((a, b) => a + b) - [...b[1].values()]
            .map(obj => obj.losses)
            .reduce((a, b) => a + b)
        || a[0].localeCompare(b[0]))
        .slice(0, 1)
        .forEach(obj => {
            console.log(`Winner: ${obj[0]}`);

            for (let [general, stats] of [...obj[1]].sort((a, b) => b[1].army - a[1].army)) {
                console.log(`/\\general: ${general}`);
                console.log(`---army: ${stats.army}`);
                console.log(`---wins: ${stats.wins}`);
                console.log(`---losses: ${stats.losses}`);
            }
        });
}