//deklaracja zmiennych
const bookListHeader = document.querySelector('.bl-header');
const bookList = document.querySelector('.bl-container');

bookListHeader.innerHTML = 'Best Sellers <span class="bl-span">Books</span>';

//funkcja pobierająca liste książek
async function booksFetch(category = 'top-books') {
  if (category === 'All Categories') {
    category = 'top-books';
  }
  const baseUrl = 'https://books-backend.p.goit.global/books/';
  if (category != 'top-books') {
    category = `category?category=${category}`;
  }
  const response = await fetch(baseUrl + category);
  const books = await response.json();
  if (category === 'top-books') {
    allBooksRender(books);
  } else {
    categoryBooksRender(books);
  }
}

booksFetch();

//funkcja wyświetlająca wszystkie książki
function allBooksRender(books) {
  let bookListHtml = '';
  books.forEach(bookCategory => {
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
  const seeMoreBtn = document.querySelectorAll('.bl-see-more-btn');
  seeMoreBtn.forEach(btn => {
    btn.addEventListener('click', btnClickHandler);
  });
}

//funkcja wyświetlająca wszystkie książki z danej kategorii
function categoryBooksRender(books) {
  let bookListHtml = '<ul class="bl-books-list">';
  books.forEach(book => {
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
function btnClickHandler() {
  headerRender(this.id);
  booksFetch(this.id);
  scroll(0, 0);
}

//funkcja przekazująca kategorię ksiązek z menu do funkcji pobierającej listę książek
placeForList.addEventListener('click', ev => {
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
