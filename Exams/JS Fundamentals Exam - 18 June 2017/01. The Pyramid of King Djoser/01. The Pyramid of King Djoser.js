function calcResources(base, increment) {
    let size = base;
    let height = 0;

    let stone = marble = lapis = 0;

    while (size > 2) {
        height++;

        let materialRequired = increment * size ** 2;
        let stoneNeeded = increment * (size - 2) ** 2;
        let coverNeeded = materialRequired - stoneNeeded;

        stone += increment * (size - 2) ** 2;

        if (height % 5 === 0) {
            lapis += coverNeeded;
        } else {
            marble += coverNeeded;
        }

        size -= 2;
    }

    gold = increment * size ** 2;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((height + 1) * increment)}`);
}