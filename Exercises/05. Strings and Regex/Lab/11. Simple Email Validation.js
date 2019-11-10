function validateSimpleEmail(email) {
    let regex = /^[a-zA-Z\d]+@[a-z]+\.[a-z]+$/g;

    if (regex.test(email)) {
        console.log("Valid");
    }
    else {
        console.log("Invalid");
    }
}