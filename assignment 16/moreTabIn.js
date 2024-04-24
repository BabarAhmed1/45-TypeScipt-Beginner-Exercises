var guests = ['Marie Curie', 'Leonardo da Vinci', 'J Rowling'];
console.log("\nGreat news, everyone! I've found a bigger dinner table, so more of us enjoy the evening together.\n");
guests.unshift('Nikola Tesla');
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Allama Iqbal');
guests.push('Charles Darwin');
console.log("Sending out a new set of invitations with the updated guest list:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", with the recent addotion of more space, I would be delighted\n    if you could join us for dinner. Your presence would indeed make the evening special."));
});
