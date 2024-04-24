// Define an array with magician names
let originalMagicians: string[] = ['David Copperfield', 'Penn & Teller', 'Dynamo', 'Criss Angel'];

// Define the function to show magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define the fucntion to modify magician names by adding 'the Great' and return a new array
function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(magician + ' the Great');
    });
    return greatMagicians;
}

// Create a new array with modified names without changing the original array
let greatMagicians = make_great(originalMagicians);

// Show original magicians
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Show great magicians
console.log("Great Magicians:");
show_magicians(greatMagicians);