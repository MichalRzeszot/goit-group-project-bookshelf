const bookListHeader = document.querySelector('.bl-header');
const blPlaceForList = document.querySelector('.all-category');
const bookList = document.querySelector('.bl-container');

bookListHeader.innerHTML = 'Best Sellers <span class="bl-span">Books</span>';

async function booksFetch(category = 'top-books') {
  let categoryId = category;
  if (category === 'All Categories' || category === 'top-books') {
    try {
      const response = await fetch('https://books-backend.p.goit.global/books/top-books');
      const books = await response.json();
      allBooksRender(books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  } else {
    try {
      const response = await fetch(
        `https://books-backend.p.goit.global/books/category?category=${categoryId}`,
      );
      const books = await response.json();
      categoryBooksRender(books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
}

booksFetch();

//funkcja wyświetlająca wszystkie książki
function allBooksRender(books) {
  let booksArr = books;
  let bookListHtml = '';
  booksArr.forEach(bookCategory => {
    bookListHtml += `<p class="bl-book-category">${bookCategory.list_name}</p><ul class="bl-books-list">`;
    bookCategory.books.forEach(book => {
      bookListHtml += `<li class="bl-book-card bl-all-books" id="${book._id}">
      <div class="bl-book-image">
      <img src="${book.book_image}" alt="${book.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${book.title}</p>
      <p class="bl-book-author">${book.author}</p>
      </li>`;
    });
    bookListHtml += `</ul><button id="${bookCategory.list_name}"class="bl-see-more-btn">SEE MORE</button>`;
  });
  bookList.innerHTML = bookListHtml;
}

//funkcja wyświetlająca wszystkie książki z danej kategorii
function categoryBooksRender(books) {
  let booksArr = books;
  let bookListHtml = '<ul class="bl-books-list">';
  booksArr.forEach(book => {
    bookListHtml += `<li class="bl-book-card" id="${book._id}">
      <div class="bl-book-image">
      <img src="${book.book_image}" alt="${book.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${book.title}</p>
      <p class="bl-book-author">${book.author}</p>
      </li>`;
  });
  bookListHtml += '</ul>';
  bookList.innerHTML = bookListHtml;
}

//funkcja przekazująca kategorię ksiązek z buttona do funkcji pobierającej listę książek
bookList.addEventListener('click', ev => {
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }
  headerRender(ev.target.id);
  booksFetch(ev.target.id);
});

//funkcja przekazująca kategorię ksiązek z menu do funkcji pobierającej listę książek
blPlaceForList.addEventListener('click', ev => {
  if (ev.target.nodeName !== 'LI') {
    return;
  }
  headerRender(ev.target.textContent);
  booksFetch(ev.target.textContent);
});

//funkcja renderująca tytuł kategorii
function headerRender(categoryName) {
  if (categoryName === 'All Categories') {
    categoryName = 'Best Sellers Books';
  }
  const headerArr = categoryName.split(' ');
  const lastWord = headerArr.pop();
  const header = headerArr.join(' ');
  bookListHeader.innerHTML = `${header} <span class="bl-span">${lastWord} </span>`;
}
