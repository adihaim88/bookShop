// Book Class: Represents a Book
class Book {
    constructor(id, title, price, imgUrl, rate, desc) {
        this.id = id;
        this.title = title;
        this.price= price;
        this.imgUrl=imgUrl;
        this.rate=rate;
        this.desc=desc;

    }
}

// UI Class: Handle UI Tasks
class UI {

    static displayBooks() {
        // const storeBooks = [
        //     {
        //         id: '123',
        //         title: 'Little prince'
        //     },
        //     {
        //         id: '2222',
        //         title: 'Harry Potter'
        //     }
        // ];
        const books= Store.getBooks();
        //const books = storeBooks;
        books.forEach((book) => UI.addBookToList(book));
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#id').value = '';
        document.querySelector('#price').value = '';

    }

    //update Price of a book
    updatePrice


    //style the alert
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        // Vanish in 2 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }


    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.id}</td>
      <td>${book.price}</td>
      <td><a href="#" class="btn btn-info btn-sm read">Read</a></td>
      <td><a href="#" class="btn btn-warning btn-sm update">Update</a></td>
      <td><a href="#" class="btn btn-danger btn-sm delete">delete</a></td>
    `;

        list.appendChild(row);
        // Event: Display Books

    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }

    }




}


 class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(id) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.id === id) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: display the  Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// // Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // // Prevent actual submit
    e.preventDefault();

    // Get form values
    const id = document.querySelector('#id').value;
    const title = document.querySelector('#title').value;
    const price = document.querySelector('#price').value;

    // Validate
    if (title === '' || id === ''|| price === '') {
        UI.showAlert('Please fill in all fields', "danger");
    } else {
        // Instatiate book
        const book = new Book(id, title,price);
        console.log(book);

        // Add Book to UI
        UI.addBookToList(book);

        // Add book to store
        Store.addBook(book);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
    }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {

    console.log(e.target)
    // Remove book from UI
    UI.deleteBook(e.target);

    // Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book Removed', 'success');


});

document.querySelector('#book-list').addEventListener('click', (e) => {

    console.log(e.target)
    // Remove book from UI
    UI.updatePrice(e.target);

    // Remove book from store
    Store.updatePrice(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Price Removed', 'success');


});





