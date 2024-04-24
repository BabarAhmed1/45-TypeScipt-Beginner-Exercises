// Define the function make_sandwich that accepts a variable number of arguments
function make_sandwich(...ingredients: string[]): void {
    console.log('making a sandwich with the following ingredients:');
    ingredients.forEach(ingredient => {
        console.log(`- ${ingredient}`);
    });
}

// Call the function with different numbers of ingredients
make_sandwich('ham', 'cheese');
make_sandwich('turkey', 'lettuce', 'tomato', 'mayo');
make_sandwich('peanut butter', 'jelly');