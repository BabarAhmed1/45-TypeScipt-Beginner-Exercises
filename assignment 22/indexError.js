// Define a simple array of numbers
var numbers = [10, 20, 30, 40, 50];
// Attempt to access an element beyond the last index of the array
console.log("Attemnpting to access an invalid index:");
try {
    console.log(numbers[5]); // Arays are 0-indexed, so this is beyond the bounds of the array
}
catch (error) {
    console.error("Error encountered:", error.message);
}
// Correctly accessing the last element of the array
console.log("\nAccessing a valid index:");
console.log(numbers[4]); // This accessed the last element of the array, which is valid 
