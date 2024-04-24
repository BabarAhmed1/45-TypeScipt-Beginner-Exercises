// Define the array of places
let places: string[] = ['Kyoto', 'New York', 'Coventry', 'Bogota', 'Cape Town'];

// Print the array in its original order
console.log("Original order of places:", places);

// Print the array in alphabetical order without modifying the original list
console.log("Places in alphabetical order:", [...places].sort());

// Show that the array is still in the original order
console.log("Original order is still intact", places);

// Print the array in reverse alphabetical order without changing the original list
console.log("Places in reverse alphabetical order:", [...places].sort().reverse());

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