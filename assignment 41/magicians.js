// Define an array with magician names
var magicians = ['David Copperfield', 'Penn & Teller', 'Dynamo', 'Criss Angel'];
// Define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function with array of magicians
show_magicians(magicians);
