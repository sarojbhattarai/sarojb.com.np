// Flag to track book visibility state
let booksVisible = false;

// Add event listener to the button to load books on click
document.getElementById('toggle-books').addEventListener('click', function () {
    const bookList = document.getElementById('book-list');
    const button = document.getElementById('toggle-books');

    if (booksVisible) {
        // If books are visible, hide the list and change the button text to "Show Books"
        bookList.style.display = 'none';
        button.textContent = 'Show Books';
        booksVisible = false;
    } else {
        // If books are hidden, display the list and change the button text to "Hide Books"
        if (bookList.innerHTML.trim() === "") {
            // Only display books if they haven't already been loaded
            displayBooks();  // Call the function to load books
        }
        bookList.style.display = 'block';
        button.textContent = 'Hide Books';
        booksVisible = true;
    }
});

// Function to dynamically display books (assuming you already have it in books.js)
function displayBooks() {
    const bookList = document.getElementById('book-list');

    // Sample array of favorite books
    const books = [
        { title: 'Siddhartha', author: 'Hermann Hesse' },
        {title:'Of Human Bondage', author:'Somerset Maugham'},
        { title: 'The Fountainhead', author: 'Ayn Rand' },
        { title: 'Sophie\'s World', author: 'Jostein Gaarder' },
        { title: 'Norwegian Wood', author: 'Haruki Murakami' },
        { title: 'Sapiens', author: 'Yuval Noah Harari' },
        { title: 'Palpasa Cafe', author: 'Narayan Wagle' },
        { title: 'Damini Bhir', author: 'Rajesh Koirala' }
    ];

    // Clear the book list container
    bookList.innerHTML = "";

    // Create and append books to the book list
    books.forEach(function (book) {
        const bookItem = document.createElement('p');
        bookItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(bookItem);
    });
}
