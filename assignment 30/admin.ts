// Define the array of usernames
let usernames: string[] = ['admin', 'eric', 'sarah', 'mike', 'jane'];

// Loop through the usernames and print a greeting for each
usernames.forEach(username => {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});