const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputPages = document.getElementById("pages");
const inputRead = document.getElementById("read");
let myLibrary = [];

function Book(title, author, pages, read) {
    this.id = (myLibrary.length<1) ? 1 : myLibrary[myLibrary.length - 1].id+1 ;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayDetails = function() {
        console.log(this.title);
        console.log(this.author);
    };
}

function removeBookFromDOM(id){
    const requiredBook = document.getElementById(id);
    requiredBook.remove();
}

function removeBookFromCollection(id){
    myLibrary = myLibrary.filter((book) => book.id != id);
}

function removeBook(bookID){
    removeBookFromDOM(bookID);
    removeBookFromCollection(bookID);
}
const addBookToDOM = (book) => {
    const bookObj = document.createElement("div");
    bookObj.classList.add("book");
    const bookID = book.id;
    bookObj.id = bookID;
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

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => removeBook(bookID));
    bookObj.appendChild(removeBtn);

    document.getElementById("books").appendChild(bookObj);
};

const showBtn = document.getElementById("showBtn");
const dialog = document.getElementById("dialog");
const closeBtn = document.getElementById("closeBtn");
showBtn.addEventListener("click", (e) => {
    dialog.showModal();
})
closeBtn.addEventListener("click", (e) => {
    dialog.close();
})

myLibrary.push((new Book("Never Split The Difference", "Napoleon Hill", 144, true)));
myLibrary.push((new Book("Rani Tatt", "Harmanjeet Singh", 99, false)));

myLibrary.forEach( (book) => {
    addBookToDOM(book);
} );

const submit = document.getElementById("submit");
submit.addEventListener("click",(e) => {
    const newTitle = inputTitle.value;
    const newAuthor = inputAuthor.value;
    const newPages  = inputPages.value;
    const newRead = inputRead.checked;
    
    console.log("Title:", newTitle);
    console.log("Author:", newAuthor);
    console.log("Pages:", newPages);
    console.log("Read:", newRead);

    const newBook = new Book(newTitle,newAuthor,newPages,newRead);
    myLibrary.push(newBook);
    addBookToDOM(newBook);
    console.log(myLibrary);
});