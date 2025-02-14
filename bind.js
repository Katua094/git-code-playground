// Basic bookshop functionality in JavaScrip.
// Sample book data code
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
    { id: 2, title: '1984', author: 'George Orwell', price: 8.99 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.99 },
];

// Cart to hold book//
let cart = [];

// Display available books/
function displayBooks() {
    console.log('Available Books:');
    books.forEach((book) => {
        console.log(`${book.id}. ${book.title} by ${book.author} - $${book.price.toFixed(2)}`);
    });
}

// Add a book to the cart
function addToCart(bookId) {
    const book = books.find((b) => b.id === bookId);
    if (book) {
        cart.push(book);
        console.log(`Added "${book.title}" to the cart.`);
    } else {
        console.log('Book not found!');
    }
}

// Remove a book from the cart
function removeFromCart(bookId) {
    const index = cart.findIndex((b) => b.id === bookId);
    if (index !== -1) {
        const removedBook = cart.splice(index, 1)[0];
        console.log(`Removed "${removedBook.title}" from the cart.`);
    } else {
        console.log('Book not found in the cart!');
    }
}

// View the cart
function viewCart() {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    console.log('Your Cart:');
    let total = 0;
    cart.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} by ${book.author} - $${book.price.toFixed(2)}`);
        total += book.price;
    });
    console.log(`Total: $${total.toFixed(2)}`);
}

// Clear the cart
function clearCart() {
    cart = [];
    console.log('Cart has been cleared.');
}

// Example Usage
displayBooks(); // Show books
addToCart(1);  // Add a book to the cart
addToCart(3);  // Add another book
viewCart();    // View current cart
removeFromCart(1); // Remove a book
viewCart();    // View cart again
clearCart();   // Clear the cart
viewCart();    // Confirm cart is empty
