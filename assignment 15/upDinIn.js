var guests = ['Albert Einstein', 'Leonardo da Vinci', 'J Rowling'];
console.group("Sending out the initial set of invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join me for a memorable dinner. It would be a pleasure to have you."));
});
var unavailableGuest = 'Albert Einstein';
console.log("\nSadly, ".concat(unavailableGuest, " won't be able to join us for dinner.\n"));
var newGuest = 'Marie Curie';
guests = guests.map(function (guest) { return guest === unavailableGuest ? newGuest : guest; });
console.log("Sending out a new set of invitations:");
guests.forEach(function (guest) {
    console.group("Dear ".concat(guest, ", in light of recent updates, I would be honored if you could join me for dinner. Your presence would add greatly to the evening."));
});
