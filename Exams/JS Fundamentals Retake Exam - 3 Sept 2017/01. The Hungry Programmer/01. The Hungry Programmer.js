function solve(mealsForServing, commands) {
    let isValidIndex = (index) => index >= 0 && index < mealsForServing.length;

    let mealsEaten = 0;

    for(let command of commands) {
        if (command === 'End') {
            break;
        }

        let commandArgs = command.split(' ');

        switch (commandArgs[0]) {
            case 'Serve':
                if (mealsForServing[0]) {
                    console.log(`${mealsForServing.pop()} served!`);
                }
                break;
            case 'Eat':
                if (mealsForServing[0]){
                    mealsEaten++;

                    console.log(`${mealsForServing.shift()} eaten`);
                }
                break;
            case 'Add':
                let portion = commandArgs[1];

                if (portion) {
                    mealsForServing.unshift(portion);
                }
                break;
            case 'Consume':
                let startIndex = +commandArgs[1];
                let endIndex = +commandArgs[2];

                if (startIndex < endIndex && isValidIndex(startIndex) && isValidIndex(endIndex)) {
                    mealsForServing.splice(startIndex, endIndex - startIndex + 1);
                    mealsEaten += endIndex - startIndex + 1;

                    console.log('Burp!');
                }
                break;
            case 'Shift':
                let firstIndex = +commandArgs[1];
                let secondIndex = +commandArgs[2];

                if (isValidIndex(firstIndex)
                    && isValidIndex(secondIndex)
                ) {
                    let temp = mealsForServing[firstIndex];

                    mealsForServing[firstIndex] = mealsForServing[secondIndex];
                    mealsForServing[secondIndex] = temp;
                }
                break;
        }
    }

    mealsForServing[0]
        ? console.log(`Meals left: ${mealsForServing.join(', ')}`)
        : console.log('The food is gone');

    console.log(`Meals eaten: ${mealsEaten}`);
}