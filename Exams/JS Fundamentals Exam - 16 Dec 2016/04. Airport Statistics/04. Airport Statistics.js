function aggregateAirplaneTrafficInformation(array) {
    let landedPlanes = new Set();
    let townStatistics = {};

    let addNewTown = (town) => {
        townStatistics[town] = {
            arrivals: 0,
            departures: 0,
            planes: new Set()
        };
    };

    array.forEach(str => {
        let [planeId, town, passengersCount, action] = str.split(' ');

        if (action === 'land') {
            if (!landedPlanes.has(planeId)) {
                landedPlanes.add(planeId);

                if (!townStatistics[town]) {
                    addNewTown(town);
                }

                townStatistics[town].arrivals += +passengersCount;
                townStatistics[town].planes.add(planeId);
            }
        } else if (action === 'depart') {
            if (landedPlanes.has(planeId)) {
                landedPlanes.delete(planeId);

                if (!townStatistics[town]) {
                    addNewTown(town);
                }

                townStatistics[town].departures += +passengersCount;
                townStatistics[town].planes.add(planeId);
            }
        }
    });

    console.log('Planes left:');

    [...landedPlanes].sort((a, b) => a.localeCompare(b))
        .forEach((planeId) => console.log(`- ${planeId}`));

    Object.keys(townStatistics)
        .sort((a, b) => townStatistics[b].arrivals - townStatistics[a].arrivals || a.localeCompare(b))
        .forEach(town => {
            console.log(town);
            console.log(`Arrivals: ${townStatistics[town].arrivals}`);
            console.log(`Departures: ${townStatistics[town].departures}`);
            console.log('Planes:');

            [...townStatistics[town].planes].sort((a, b) => a.localeCompare(b))
                .forEach(planeId => console.log(`-- ${planeId}`));
        });
}