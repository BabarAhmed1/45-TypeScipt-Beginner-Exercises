// Define the function make_shirt with default paramenters for size and message
function make_shirt(size: string = 'Large', message: string = 'I loveTypeScript'): void {
console.log(`The size of the shirt is ${size} and it says: '${message}'.`);
}

// Call the function with default parameters for a large shirt
make_shirt();

// Call the function with specified size 'Medium', but default message
make_shirt('Medium');

// Call the function with a non-default size and a non-default message
make_shirt('Small', 'Explore TypeScript');