function printUsernames(array) {
    let comparer = (a, b) => {
        return a.length - b.length || a.localeCompare(b);
    };

    let usernames = new Set();

    array.forEach(username => usernames.add(username));

    [...usernames].sort(comparer)
        .forEach(username => console.log(username));
}