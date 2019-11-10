function printInventoryItems(arr) {
    let inventory = arr.shift().split(' ');

    for (let command of arr) {
        if (command === 'Fight!') {
            break;
        }

        let args = command.split(' ');

        let action = args[0];
        let equipment = args[1];

        switch (action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash': {
                let index = inventory.indexOf(equipment);

                if (index !== -1) {
                    inventory.splice(index, 1);
                }
                break;
            }
            case 'Repair': {
                let index = inventory.indexOf(equipment);

                if (index !== -1) {
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
                break;
            }
            case 'Upgrade':
                let upgradeArgs = equipment.split('-');

                equipment = upgradeArgs[0];

                let index = inventory.indexOf(equipment);

                if (index !== -1) {
                    inventory.splice(index + 1, 0, `${upgradeArgs.join(':')}`);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}