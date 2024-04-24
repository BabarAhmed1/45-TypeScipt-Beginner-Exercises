// Assuming the final guest list before clearing it
let finalGuests: string[] = ['Nikola Tesla', 'Marie Curie'];

// Print the number of people you are inviting to dinner
console.log(`I am inviting ${finalGuests.length} people to dinner.`);

// Invitations for each guest
finalGuests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to my dinner. Looking forward to it!`);
});

// Eventually, we clear the list as per the last steps of the exercise
finalGuests.splice(0, finalGuests.length); // Clearing the list

// Confirming the list is now empty
console.log("After the dinner, the final guest list is:", finalGuests);
