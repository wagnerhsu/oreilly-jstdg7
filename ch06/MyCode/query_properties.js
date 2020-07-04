let book = {};
let surname = undefined;
if (book) {
    if (book.author) {
        surname = book.author.surname;
    }
};
console.log(surname);

surname = book && book.author && book.author.surname;
console.log(surname);

// ES2020
surname = book?.author?.surname;
console.log(surname);