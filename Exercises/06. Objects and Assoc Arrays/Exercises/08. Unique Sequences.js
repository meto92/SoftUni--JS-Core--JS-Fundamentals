function printUniqueSequences(array) {
    let arrays = array.map(arr => JSON.parse(arr).sort((a, b) => b - a));
    let map = new Map();

    for (let i = 0; i < arrays.length; i++) {
        let str = JSON.stringify(arrays[i]);

        if (!map.has(str)) {
            map.set(str, i);
        }
    }

    [...map].sort((a, b) => arrays[a[1]].length - arrays[b[1]].length || a[1] - b[1])
        .forEach(obj => console.log(`[${arrays[obj[1]].join(', ')}]`));
}