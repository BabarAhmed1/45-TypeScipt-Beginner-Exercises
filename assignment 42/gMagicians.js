// Define an array with magician names
var magicians = ['David Copperfield', 'Penn & Teller', 'Dynamo', 'Criss Angel'];
// Define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the function to modify magician names by adding 'the Great'
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
// Modify the array of magicians
make_great(magicians);
// Call the fucntion with the modified array of magicians
show_magicians(magicians);
