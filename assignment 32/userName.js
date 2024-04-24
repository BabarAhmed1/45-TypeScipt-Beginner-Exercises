// Define a list of current users
var current_users = ['Emily', 'Dave', 'sarah', 'John', 'Alice'];
// Define a list of new users, some of which might overlap with current users
var new_users = ['Henry', 'SARAH', 'Dave', 'Mike', 'john'];
// Loop through new_users to check for availability
new_users.forEach(function (newUser) {
    var isTaken = false;
    for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
        var currentUser = current_users_1[_i];
        // Convert both usernames to lowercase to ensure case-insensitive comparison
        if (currentUser.toLowerCase() === newUser.toLowerCase()) {
            isTaken = true;
        }
    }
    // Print the appropriate message based on the isTaken flag
    if (isTaken) {
        console.log("The username \"".concat(newUser, "\" has already been used. You will\n    need to enter a new username."));
    }
    else {
        console.log("The username\"".concat(newUser, "\" is available."));
    }
});
