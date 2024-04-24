function append<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;  
}

//Starting with the updated list of guests.
let guests: string[] = ['Marie Curie', 'Leonardo da Vinci', 'J Rowling'];
console.log("\nGreat news, everyone! I've found a bigger dinner table, so more of us can enjoy the evening together.\n");

//Adding a new guest to the beginning of the array.
guests.unshift('Nikola Tesla');

//Adding a new guest to the middle of the array.
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, 'Allama Iqbal');

//Adding a new guest to the end of the array using the custom append fucntion.
append(guests, 'Napoleon Hill');

//Printing a new set of invitation messages with the updated list.
console.log("Sending out a new set of invitaions with the updated guest list:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, with the recent addition of more space, I would be delighted if you could
    join us for dinner. Your presence would indeed make the evening special.`);
});