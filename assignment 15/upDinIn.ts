let guests: string[] = ['Albert Einstein', 'Leonardo da Vinci', 'J Rowling'];

console.group("Sending out the initial set of invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, please join me for a memorable dinner. It would be a pleasure to have you.`);
});

const unavailableGuest = 'Albert Einstein';
console.log(`\nSadly, ${unavailableGuest} won't be able to join us for dinner.\n`);

const newGuest = 'Marie Curie';
guests = guests.map(guest => guest === unavailableGuest ? newGuest : guest);

console.log("Sending out a new set of invitations:");
guests.forEach(guest => {
    console.group(`Dear ${guest}, in light of recent updates, I would be honored if you could join me for dinner. Your presence would add greatly to the evening.`);
});