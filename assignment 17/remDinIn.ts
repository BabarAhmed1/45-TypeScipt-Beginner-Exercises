//Function to append items to an array
function append<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
}

//Updated list of guests
let guests: string[] = ['Nikola Tesla', 'Allama Iqbal', 'Marie Curie', 'Leonardo da Vinci',
    'J Rowling', 'Napoleon Hill'];

//Informing about the table issue
console.log("\nUnfortunately, my new dinner table won't arrive in time, and I can now invite only two people for dinner.\n");

//Removing guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop(); //removes the last element of the array
    console.log(`Dear ${removedGuest}, I'm terribly sorry to inform you that due
    to the space contraints, I can't extend my dinner invitation to you at this time.`);
}

//Anouncing the remianing invitees
console.log("\n");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to my dinner. Looking 
    forward to it!`);
});

//Clearing the list
guests.splice(0, guests.length); //This removes all elements from the array

//Confirming the list is now empty
console.log("\nCurrent guest list:", guests);