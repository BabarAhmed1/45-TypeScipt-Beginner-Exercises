// Define a list of current users
let current_users: string[] = ['Emily', 'Dave', 'sarah', 'John', 'Alice'];

// Define a list of new users, some of which might overlap with current users
let new_users: string[] = ['Henry', 'SARAH', 'Dave', 'Mike', 'john'];

// Loop through new_users to check for availability
new_users.forEach(newUser => {
    let isTaken = false;

    for (let currentUser of current_users) {
        // Convert both usernames to lowercase to ensure case-insensitive comparison
        if (currentUser.toLowerCase() ===  newUser.toLowerCase()) {
            isTaken = true;
        }
    }

// Print the appropriate message based on the isTaken flag
if (isTaken) {
    console.log(`The username "${newUser}" has already been used. You will
    need to enter a new username.`);
} else {
    console.log(`The username"${newUser}" is available.`);
}
});