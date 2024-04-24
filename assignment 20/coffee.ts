// list of coffee drinks
let coffeeDrinks: string[] = ['Espresso', 'Cappuccino', 'Latte', 'Americano', 'Macchiato',
    'Mocha', 'Flat White'];

// Printing the original list
    console.log("Original list of coffee drinks");
    coffeeDrinks.forEach(drink => console.log(drink));

// Add new coffee drink
coffeeDrinks.push('Cortado');

// Printing updated list
console.log("\nUpdated list of coffee drinks with 'Cortado':");
coffeeDrinks.forEach(drink => console.log(drink));
