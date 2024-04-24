// Assuming the final guest list before clearing it
var finalGuests = ['Nikola Tesla', 'Marie Curie'];
// Print the number of people you are inviting to dinner
console.log("I am inviting ".concat(finalGuests.length, " people to dinner."));
// Invitations for each guest
finalGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to my dinner. Looking forward to it!"));
});
// Eventually, we clear the list as per the last steps of the exercise
finalGuests.splice(0, finalGuests.length); // Clearing the list
// Confirming the list is now empty
console.log("After the dinner, the final guest list is:", finalGuests);
