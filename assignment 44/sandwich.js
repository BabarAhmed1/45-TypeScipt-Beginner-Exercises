// Define the function make_sandwich that accepts a variable number of arguments
function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log('making a sandwich with the following ingredients:');
    ingredients.forEach(function (ingredient) {
        console.log("- ".concat(ingredient));
    });
}
// Call the function with different numbers of ingredients
make_sandwich('ham', 'cheese');
make_sandwich('turkey', 'lettuce', 'tomato', 'mayo');
make_sandwich('peanut butter', 'jelly');
