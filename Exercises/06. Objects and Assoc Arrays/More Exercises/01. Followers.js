function solve(input) {
    let users = new Map();

    input.forEach(str => {
        let args = str.split(' ');

        if (args.length === 2) {
            let user = args[1];

            if (!users.has(user)) {
                users.set(user, {
                    followers: new Set(),
                    following: new Set()
                });
            }
        } else {
            let follower = args[0];
            let followedUser = args[2];

            if (users.has(follower)
                && users.has(followedUser)
                && follower !== followedUser
            ) {
                users.get(follower).following.add(followedUser);
                users.get(followedUser).followers.add(follower);
            }
        }
    });

    let userNumber = 0;

    console.log(`Total users registered: ${users.size}`);

    [...users]
        .sort((a, b) => b[1].followers.size - a[1].followers.size || a[0].localeCompare(b[0]))
        .forEach(userInfo => {
            let followersCount = userInfo[1].followers.size;
            let followingCount = userInfo[1].following.size;

            console.log(`${++userNumber}. ${userInfo[0]} : ${followingCount} following, ${followersCount} followers`);

            if (userNumber === 1) {
                [...userInfo[1].followers]
                    .sort()
                    .forEach(follower => console.log(`*  ${follower}`));
            }
        });
}

solve([
    'Welcome, JennaMarbles',
    'JennaMarbles followed Zoella',
    'Welcome, AmazingPhil',
    'JennaMarbles followed AmazingPhil',
    'Welcome, Zoella',
    'Welcome, JennaMarbles',
    'Zoella followed AmazingPhil',
    'Christy followed Zoella',
    'Zoella followed Christy',
    'Welcome, JacksGap',
    'JacksGap followed JennaMarbles',
    'Welcome, PewDiePie',
    'Welcome, Zoella',
]);