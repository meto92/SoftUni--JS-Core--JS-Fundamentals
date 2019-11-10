function printOrganismsWithGenes(array) {
    let regex = /^([\!@#\$\?a-z]+)=(\d+)--(\d+)<<([a-z]+)$/;

    let str;
    let index = 0;
    let genomeSizeByOrganism = {};

    while ((str = array[index++]).localeCompare('Stop!') !== 0) {
        let match = regex.exec(str);

        if (!match) {
            continue;
        }

        let geneName = match[1].replace(/[\!@#\$\?]/g, '');
        let nameLength = +match[2];
        let genesCount = +match[3];
        let organism = match[4];

        if (geneName.length !== nameLength) {
            continue;
        }

        genomeSizeByOrganism[organism] = genomeSizeByOrganism[organism] + genesCount || genesCount;
    }

    Object.keys(genomeSizeByOrganism)
        .sort((a, b) => genomeSizeByOrganism[b] - genomeSizeByOrganism[a])
        .forEach(organism => console.log(`${organism} has genome size of ${genomeSizeByOrganism[organism]}`));
}