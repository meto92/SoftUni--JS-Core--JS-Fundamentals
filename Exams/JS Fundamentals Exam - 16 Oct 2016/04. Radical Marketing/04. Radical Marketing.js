function solve(commands) {
    let people = new Map();

    commands.forEach(command => {
        let names = command.split('-');

        if (names.length === 1) {
            let person = names[0];

            if (!people.has(person)) {
                people.set(person, {
                    subscribers: [],
                    subscriberOf: []
                });
            }
        } else {
            let firstPerson = names[0];
            let secondPerson = names[1];

            if (firstPerson !== secondPerson
                && people.has(firstPerson)
                && people.has(secondPerson)
                && !people.get(secondPerson).subscribers.includes(firstPerson)
            ) {
                people.get(firstPerson).subscriberOf.push(secondPerson);
                people.get(secondPerson).subscribers.push(firstPerson);
            }
        }
    });

    [...people].sort((a, b) => b[1].subscribers.length - a[1].subscribers.length
        || b[1].subscriberOf.length - a[1].subscriberOf.length)
        .slice(0, 1)
        .forEach(([person, value]) => {
            console.log(person);

            value.subscribers
                .forEach((subscriber, index) => console.log(`${index + 1}. ${subscriber}`));
        });
}