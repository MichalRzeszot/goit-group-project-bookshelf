//deklaracja zmiennych
const bookListHeader = document.querySelector('.bl-header');
const bookList = document.querySelector('.bl-container');

//funkcja pobierająca liste książek
async function booksFetch(category = 'top-books') {
  const baseUrl = 'https://books-backend.p.goit.global/books/';
  const response = await fetch(baseUrl + category);
  const books = await response.json();
  if (category === 'top-books') {
    allBooksRender(books);
  } else {
    categoryBooksRender(books);
  }
}

booksFetch();

//funkcja wyświetlająca wszystkie ksiązki
function allBooksRender(books) {
  bookListHeader.innerHTML = 'Best Sellers <span class="bl-span">Books</span>';
  bookList.innerHTML = '';
  books.forEach(bookCategory => {
    const bookCategoryhtml = `<p class="bl-book-category">${bookCategory.list_name}</p>`;
    bookList.insertAdjacentHTML('beforeend', bookCategoryhtml);
    bookCategory.books.forEach(book => {
      const bookCardHtml = `<li class="bl-book-card" id="${book._id}">
      <div class="bl-book-image">
      <img src="${book.book_image}" alt="${book.title}" cover/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${book.title}</p>
      <p class="bl-book-author">${book.author}</p>
      </li>`;
      bookList.insertAdjacentHTML('beforeend', bookCardHtml);
    });
    bookList.insertAdjacentHTML(
      'beforeend',
      `<button id="${bookCategory.list_name}"class="bl-see-more-btn">SEE MORE</button>`,
    );
  });
  const seeMoreBtn = document.querySelectorAll('.bl-see-more-btn');
  seeMoreBtn.forEach(btn => {
    btn.addEventListener('click', btnClickHandler);
  });
}

//funkcja wyświetlająca książki z wybranej kategorii
function categoryBooksRender(books) {
  bookListHeader.innerHTML = books[0].list_name;
  bookList.innerHTML = '';
  books.forEach(book => {
    const bookCardHtml = `<li class="bl-book-card" id="${book._id}">
      <div class="bl-book-image">
      <img src="${book.book_image}" alt="${book.title}" cover/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${book.title}</p>
      <p class="bl-book-author">${book.author}</p>
      </li>`;
    bookList.insertAdjacentHTML('beforeend', bookCardHtml);
  });
}

//funkcja przekazująca kategorię ksiązek z buttona do funkcji pobierającej listę książek
function btnClickHandler() {
  category = `category?category=${this.id}`;
  booksFetch(category);
  scroll(0, 0);
}

//funkcja przekazująca kategorię ksiązek z menu do funkcji pobierającej listę książek
placeForList.addEventListener('click', ev => {
  category = `category?category=${ev.target.textContent}`;
  if (ev.target.textContent === 'All Categories') {
    booksFetch();
    return;
  }
  booksFetch(category);
});
