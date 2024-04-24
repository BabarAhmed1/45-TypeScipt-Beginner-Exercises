var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of places
var places = ['Kyoto', 'New York', 'Coventry', 'Bogota', 'Cape Town'];
// Print the array in its original order
console.log("Original order of places:", places);
// Print the array in alphabetical order without modifying the original list
console.log("Places in alphabetical order:", __spreadArray([], places, true).sort());
// Show that the array is still in the original order
console.log("Original order is still intact", places);
// Print the array in reverse alphabetical order without changing the original list
console.log("Places in reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
// Cofirming the array is still in its original order
console.log("Confirming original order:", places);
// Reverse the order of the list and print
places.reverse();
console.log("Array after being reversed:", places);
// Reverse the order of the list again to return to the original order and print
places.reverse();
console.log("Array returned to the original order", places);
// Sort the array in reverse alphabetical order and print
places.sort().reverse();
console.log("Array sorted in reverse alphabetical order:", places);
