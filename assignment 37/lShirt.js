// Define the function make_shirt with default paramenters for size and message
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I loveTypeScript'; }
    console.log("The size of the shirt is ".concat(size, " and it says: '").concat(message, "'."));
}
// Call the function with default parameters for a large shirt
make_shirt();
// Call the function with specified size 'Medium', but default message
make_shirt('Medium');
// Call the function with a non-default size and a non-default message
make_shirt('Small', 'Explore TypeScript');
