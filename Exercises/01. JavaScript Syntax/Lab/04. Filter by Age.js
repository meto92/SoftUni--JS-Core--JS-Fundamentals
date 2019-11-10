function filterByAge(minAge, firstPersonName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = { name: firstPersonName, age: firstPersonAge };
    let secondPerson = { name: secondPersonName, age: secondPersonAge };

    if (firstPersonAge >= minAge) {
        console.log(firstPerson);
    }

    if (secondPersonAge >= minAge) {
        console.log(secondPerson);
    }
}