// // UI Class: Handle UI Tasks
// class UI {
//
//     static  displayBooks() {
//         const storeBooks = [
//             {
//                 id: '123',
//                 title: 'aaa'
//             },
//             {
//                 id: '2222',
//                 title: 'harry Potter'
//
//             }
//         ];
//
//         const  books=storeBooks;
//         books.forEach((book) => UI.addBookToList(book));
//     }
//
//
//
//     // static displayBooks() {
//     //     const books = Store.getBooks();
//     //
//     //     books.forEach((book) => UI.addBookToList(book));
//     // }
//
//     static addBookToList(book) {
//         const list = document.querySelector('#book-list');
//
//         const row = document.createElement('tr');
//
//         row.innerHTML = `
//       <td>${book.title}</td>
//       <td>${book.id}</td>
//       <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//     `;
//
//         list.appendChild(row);
//         // Event: Display Books
//         document.addEventListener('DOMContentLoaded', UI.displayBooks);
//     }
//
//
//     static deleteBook(el) {
//         if (el.classList.contains('delete')) {
//             el.parentElement.parentElement.remove();
//         }
//     }
//
//     static showAlert(message, className) {
//         const div = document.createElement('div');
//         div.className = `alert alert-${className}`;
//         div.appendChild(document.createTextNode(message));
//         const container = document.querySelector('.container');
//         const form = document.querySelector('#book-form');
//         container.insertBefore(div, form);
//
//         // Vanish in 3 seconds
//         setTimeout(() => document.querySelector('.alert').remove(), 3000);
//     }
//
//     static clearFields() {
//         document.querySelector('#title').value = '';
//         document.querySelector('#id').value = '';
//
//     }
// }
//
//
