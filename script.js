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

const addBookToDOM = (book) => {
    const bookObj = document.createElement("div");
    bookObj.classList.add("book");
    const title = document.createElement("p");
    title.classList.add("title");
    const author = document.createElement("p");
    author.classList.add("author");
    const pages = document.createElement("p");
    pages.classList.add("pages");
    const read = document.createElement("p");
    read.classList.add("read");

    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.pages;
    read.innerHTML = (book.read) ? "Read" : "Not Read";

    bookObj.appendChild(title);
    bookObj.appendChild(author);
    bookObj.appendChild(pages);
    bookObj.appendChild(read);

    document.getElementById("books").appendChild(bookObj);
};









const myLibrary = [];
myLibrary.push((new Book("Never Split The Difference", "Napoleon Hill", 144, true)));
myLibrary.push((new Book("Rani Tatt", "Harmanjeet Singh", 99, false)));

myLibrary.forEach( (book) => {
    addBookToDOM(book);
} );