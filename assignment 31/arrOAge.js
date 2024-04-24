// Define an array of ages, initially with some entries
var ages = [1, 3, 10, 15, 25, 70];
// Remove all ages to simulate an empty array situation for testing 
ages = [];
// Check if the ages array is empty
if (ages.length === 0) {
    console.log('We need to find some users!');
}
else {
    // Loop through the ages and determine the stage of Life
    ages.forEach(function (age) {
        if (age < 2) {
            console.log("This is a baby.");
        }
        else if (age < 4) {
            console.log("This person is a toddler.");
        }
        else if (age < 13) {
            console.log("This person is a kid.");
        }
        else if (age < 20) {
            console.log("This is a teenager.");
        }
        else if (age < 65) {
            console.log("This person is an adult.");
        }
        else {
            console.log("This person is an elder.");
        }
    });
}
