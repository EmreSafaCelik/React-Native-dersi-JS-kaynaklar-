let library = require('./04-ornek1.json');

// Bütün kitapları listeleyen fonksiyon
function listBooks() {
    console.log("Bütün kitaplar listeleniyor:");
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        console.log(`${i+1}. ${book.title} by ${book.author}`);
    }
}

// Ödünç alınmış kitapları listeleyen fonksiyon
function listBorrowedBooks() {
    console.log("Ödünç alınmış bütün kitaplar listeleniyor:");
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        if (book.borrowed) {
            console.log(`${i+1}. ${book.title} by ${book.author}`);
        }
    }
}

// Verilen genre'daki kitaplara listeleyen fonksiyon
function listBooksByGenre(genre) {
    console.log(`${genre} genre'sındaki tüm kitaplar listeleniyor:`);
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].genre.toLowerCase() == genre.toLowerCase()) {
            console.log(`${i+1}. ${library.books[i].title} by ${library.books[i].author}`);
        }
    }
}

// Fonksiyonların çağrılımı
// listBooks();
// listBorrowedBooks();
// listBooksByGenre("Science");


// JSON'a yazma işlemlerinde objemizi stringe çevirmemiz gerekir.
let stringLibrary = JSON.stringify(library)
console.log(stringLibrary)
console.log(typeof stringLibrary)