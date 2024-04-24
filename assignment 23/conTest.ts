let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False - case sensitive

console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi'); // True

console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True

console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // True

console.log("Does car start with 's'? I predict True.");
console.log(car[0] == 's'); // True

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // True

console.log("Is car.length <= 5? I predict True.");
console.log(car.length <= 5); // False

console.log("Does 'car' + 'wash' equal 'subaruwash'? I predict True.");
console.log(car + 'wash' == 'subaruwash'); // True

console.log("Is car.slice(0, 3) == 'sub'? I predict True.");
console.log(car.slice(0, 3) == 'sub'); // True

console.log("Is 'tesla' a substring of car? I predict False.");
console.log(car.indexOf('tesla') > -1); // False