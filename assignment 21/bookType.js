// Creating objects for each book
var book1 = {
    title: "Grit",
    author: "Angela Duckworth",
    yearPublished: 2016
};
var book2 = {
    title: "Managing Oneself",
    author: "Peter Drucker",
    yearPublished: 1999
};
var book3 = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    yearPublished: 1997
};
// Storing the books in an array
var bookCollection = [book1, book2, book3];
// Printing the details of each book in the collection
console.log("Book Collection");
bookCollection.forEach(function (book) {
    console.log("Title: ".concat(book.title, ", Auhtor: ").concat(book.author, ", Year Published:\n    ").concat(book.yearPublished));
});
// Adding a new book to the colletion
var book4 = {
    title: "Marketing 4.0",
    author: "Philip Kotler",
    yearPublished: 2016
};
bookCollection.push(book4);
// Printing the updated book collection
console.log("\nUpdated Book Collection:");
bookCollection.forEach(function (book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Year Published:\n    ").concat(book.yearPublished));
});
