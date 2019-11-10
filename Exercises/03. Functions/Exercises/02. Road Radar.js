function printSeverity([speed, area]) {
    let getMaxSpeed = () => {
        switch (area) {
            case 'motorway':
                return 130;
            case 'interstate':
                return 90;
            case 'city':
                return 50;
            case 'residential':
                return 20;
        }
    };

    let maxSpeed = getMaxSpeed();
    let speedOver = +speed - maxSpeed;

    let getSeverity = speedOver => {
        if (speedOver <= 0){
            return '';
        }

        if (speedOver <= 20){
            return 'speeding'
        }

        if (speedOver <= 40) {
            return 'excessive speeding';
        }

        return 'reckless driving';
    };

    console.log(getSeverity(speedOver))
}