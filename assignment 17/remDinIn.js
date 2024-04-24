//Function to append items to an array
function append(array, item) {
    array.push(item);
    return array;
}
//Updated list of guests
var guests = ['Nikola Tesla', 'Allama Iqbal', 'Marie Curie', 'Leonardo da Vinci',
    'J Rowling', 'Napoleon Hill'];
//Informing about the table issue
console.log("\nUnfortunately, my new dinner table won't arrive in time, and I can now invite only two people for dinner.\n");
//Removing guests until only two remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); //removes the last element of the array
    console.log("Dear ".concat(removedGuest, ", I'm terribly sorry to inform you that due\n    to the space contraints, I can't extend my dinner invitation to you at this time."));
}
//Anouncing the remianing invitees
console.log("\n");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to my dinner. Looking \n    forward to it!"));
});
//Clearing the list
guests.splice(0, guests.length); //This removes all elements from the array
//Confirming the list is now empty
console.log("\nCurrent guest list:", guests);
