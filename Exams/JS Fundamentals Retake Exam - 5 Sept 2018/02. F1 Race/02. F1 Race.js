function printPilots(array) {
    let pilots = array.shift().split(/\s+/);

    array.forEach(str => {
        let [action, pilot] = str.split(' ');
        let index;

        switch (action) {
            case 'Join':
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }
                break;
            case 'Crash':
                index = pilots.indexOf(pilot);

                if (index !== -1) {
                    //pilots = pilots.slice(0, index).concat(pilots.slice(index + 1, pilots.lengh));

                    pilots.splice(index, 1);
                }
                break;
            case 'Pit':
                index = pilots.indexOf(pilot);

                if (index !== -1 && index < pilots.length - 1) {
                    let current = pilots[index];

                    pilots[index] = pilots[index + 1];
                    pilots[index + 1] = current;
                }
                break;
            case 'Overtake':
                index = pilots.indexOf(pilot);

                if (index > 0) {
                    let front = pilots[index - 1];

                    pilots[index - 1] = pilots[index];
                    pilots[index] = front;
                }
                break;
        }
    });

    console.log(pilots.join(' ~ '));
}