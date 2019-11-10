function solve(array) {
    let comparer = (map, a, b) => {
        return map.get(b).size - map.get(a).size || a.localeCompare(b);
    };

    let map = new Map();

    array.forEach(str => {
        let [system, component, subcomponent] = str.split(' | ');

        if (!map.has(system)) {
            map.set(system, new Map());
        }

        if (!map.get(system).has(component)) {
            map.get(system).set(component, []);
        }

        let subcomponents = map.get(system).get(component);

        subcomponents.push(subcomponent);
    });

    let sortedSystems = [...map.keys()].sort((a, b) => comparer(map, a, b));

    sortedSystems.forEach(system => {
        console.log(system);

        let sortedComponents = [...map.get(system).keys()]
            .sort((a, b) => map.get(system).get(b).length - map.get(system).get(a).length);

        sortedComponents.forEach(component => {
            console.log(`${'|'.repeat(3)}${component}`);

            for (let subcomponent of map.get(system).get(component)) {
                console.log(`${'|'.repeat(6)}${subcomponent}`);
            }
        });
    })
}