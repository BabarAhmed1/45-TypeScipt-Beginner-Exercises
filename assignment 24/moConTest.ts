// Equality and inequality with Strings
let food = 'Pizza';

console.log("Is food == 'Pizza'? I predict True.");
console.log(food == 'Pizza');  // True

console.log("Is food != 'Burger'? I predict True.");
console.log(food != 'Burger'); // True

// Tests Using the Lower Case Function
let city = 'Tokyo';

console.log("Is city.toLowerCase() == 'tokyo'? I predict True.");
console.log(city.toLowerCase() == 'tokyo'); // True

console.log("Is city.toLowerCase() == 'london'? I predict False.");
console.log(city.toLowerCase() == 'london'); // False

// Numerical Tests
let age = 30;

console.log("is age == 30? I predict True.");
console.log(age == 30); // True

console.log("Is age > 25? I predict True.");
console.log(age > 25); // True

console.log("Is age < 30? I predict False.");
console.log(age < 30);

console.log("Is age <= 29? I predict False.");
console.log(age <= 29); // False

// Tests Using "and" and "or" Operators
let height = 180;
let weight = 70;

console.log("Is height > 170 and weight == 70? I predict True.");
console.log(height > 170 && weight == 70); // True

console.log("Is height > 190 or weight == 70? I predict True.");
console.log(height > 190 || weight == 70) // True

// Test Whether an Item is in an Array
let colors = ['red', 'green', 'blue'];

console.log("Is 'green' in colors? I predict True.");
console.log(colors.indexOf('green') !== -1); // True

console.log("Is 'yellow' in colors? I predict True.");
console.log(colors.indexOf('yellow') !== -1); // False

// Test Whether an Item is Not in an Array
console.log("Is 'black' not in colors? I predict True.");
console.log(colors.indexOf('black') === -1); // True

console.log("Is 'red' not in colors? I predict False.");
console.log(colors.indexOf('red') === -1); // False