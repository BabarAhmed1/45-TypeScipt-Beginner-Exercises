// Define an array with magician names
let magicians: string[] = ['David Copperfield', 'Penn & Teller', 'Dynamo', 'Criss Angel'];

// Define the function to show magician names
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call the function with array of magicians
show_magicians(magicians);