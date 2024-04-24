// Defining the book type for better type checking
type Book = {
    title: string;
    author: string;
    yearPublished: number;
};

// Creating objects for each book
let book1: Book = {
    title: "Grit",
    author: "Angela Duckworth",
    yearPublished: 2016
};

let book2: Book = {
    title: "Managing Oneself",
    author: "Peter Drucker",
    yearPublished: 1999
};

let book3: Book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    yearPublished: 1997
};

// Storing the books in an array
let bookCollection: Book[] = [book1, book2, book3];

// Printing the details of each book in the collection
console.log("Book Collection");
bookCollection.forEach(book => {
    console.log(`Title: ${book.title}, Auhtor: ${book.author}, Year Published:
    ${book.yearPublished}`);
});

// Adding a new book to the colletion
let book4: Book = {
    title: "Marketing 4.0",
    author: "Philip Kotler",
    yearPublished: 2016
};
bookCollection.push(book4);

// Printing the updated book collection
console.log("\nUpdated Book Collection:");
bookCollection.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year Published:
    ${book.yearPublished}`);
});