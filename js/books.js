var BOOKS = [
    { title: 'Siddhartha',       author: 'Hermann Hesse'     },
    { title: 'Of Human Bondage', author: 'Somerset Maugham'  },
    { title: 'The Fountainhead', author: 'Ayn Rand'          },
    { title: "Sophie's World",   author: 'Jostein Gaarder'   },
    { title: 'Norwegian Wood',   author: 'Haruki Murakami'   },
    { title: 'Sapiens',          author: 'Yuval Noah Harari' },
    { title: 'Palpasa Cafe',     author: 'Narayan Wagle'     },
    { title: 'Damini Bhir',      author: 'Rajesh Koirala'    }
];

function displayBooks() {
    var list = document.getElementById('book-list');
    if (!list) return;
    list.innerHTML = '';
    var onBooksPage = !document.getElementById('toggle-books');
    BOOKS.forEach(function(book, i) {
        var li = document.createElement('li');
        if (onBooksPage) {
            li.className = 'book-item';
            li.innerHTML = '<span class="book-number">'
                + String(i+1).padStart(2,'0')
                + '</span><span class="book-info">'
                + '<span class="book-title">' + book.title + '</span>'
                + '<span class="book-author">' + book.author + '</span>'
                + '</span>';
        } else {
            li.className = 'book-list-inline-item';
            li.innerHTML = '<span class="book-title">' + book.title + '</span>'
                + '<span class="book-author">' + book.author + '</span>';
        }
        list.appendChild(li);
    });
}

var toggleBtn = document.getElementById('toggle-books');
if (toggleBtn) {
    var visible = false;
    toggleBtn.addEventListener('click', function() {
        var list = document.getElementById('book-list');
        if (visible) {
            list.style.display = 'none';
            toggleBtn.textContent = 'Show Books';
            visible = false;
        } else {
            if (!list.innerHTML.trim()) displayBooks();
            list.style.display = 'block';
            toggleBtn.textContent = 'Hide Books';
            visible = true;
        }
    });
} else if (document.getElementById('book-list')) {
    displayBooks();
}
