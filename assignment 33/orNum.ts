// Define an array with numbers 1 through 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array of numbers
numbers.forEach(number => {
    let ordinal: string;

    if (number === 1) {
        ordinal = '1st';
    } else if (number === 2) {
        ordinal = '2nd';
    } else if (number === 3) {
        ordinal = '3rd';
    } else {
        ordinal = `${number}th`; // Use template literals for string creation
    }

    // Print the number with its ordinal suffix
    console.log(ordinal);
});