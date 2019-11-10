function printUsernames(emails) {
    let usernames = [];

    for (let email of emails) {
        let index = email.indexOf("@");
        let username = email.substring(0, index) + ".";

        email.substring(index + 1).
            split(".").
            filter(p => !!p).
            forEach(part => {
                username += part[0];
        });

        usernames.push(username);
    }

    console.log(usernames.join(", "));
}