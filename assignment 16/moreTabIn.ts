let guests: string[] = ['Marie Curie', 'Leonardo da Vinci', 'J Rowling'];

console.log("\nGreat news, everyone! I've found a bigger dinner table, so more of us enjoy the evening together.\n");

guests.unshift('Nikola Tesla');
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Allama Iqbal');

guests.push('Charles Darwin');

console.log("Sending out a new set of invitations with the updated guest list:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, with the recent addotion of more space, I would be delighted
    if you could join us for dinner. Your presence would indeed make the evening special.`);
});