function printTopThreeTeams(array) {
    let map = new Map();

    array.forEach(str => {
        let [teamName, pilotName, pilotPoints] = str.split(' -> ');

        if (!map.has(teamName)) {
            map.set(teamName, new Map());
        }

        map.get(teamName).set(pilotName, map.get(teamName).get(pilotName) + +pilotPoints || +pilotPoints);
    });

    [...map]
        .sort((a, b) => [...b[1].values()].reduce((a, b) => a + b) - [...a[1].values()].reduce((a, b) => a + b))
        .slice(0, 3)
        .forEach(arr => {
            console.log(`${arr[0]}: ${[...arr[1].values()].reduce((a, b) => a + b)}`);

            [...arr[1]]
                .sort((a, b) => b[1] - a[1])
                .forEach(pair => {
                console.log(`-- ${pair[0]} -> ${pair[1]}`)
            });
        });
}