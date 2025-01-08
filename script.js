const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayDetails = function() {
        console.log(this.title);
        console.log(this.author);
    };
}

const book = new Book("random title", "author", 202, false);
book.displayDetails(); 

function addBookToLibrary() {
    
}