// Define the array of usernames
var usernames = ['admin', 'eric', 'sarah', 'mike', 'jane'];
// Loop through the usernames and print a greeting for each
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
