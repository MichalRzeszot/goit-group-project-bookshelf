//deklaracja zmiennych
const bookListHeader = document.querySelector('.book-list-header');
const bookList = document.querySelector('.book-list-container');

//funkcja pobierająca liste książek
async function booksFetch(category = 'top-books') {
  const baseUrl = 'https://books-backend.p.goit.global/books/';
  const response = await fetch(baseUrl + category);
  const books = await response.json();
  console.log(books);
  booksRender(books);
}

booksFetch();

//funkcja wyświetlająca ksiązki
function booksRender(books) {
  books.forEach(bookCategory => {
    console.log(bookCategory.list_name);
    const bookCategoryhtml = `<p class="book-category">${bookCategory.list_name}</p>`;
    bookList.insertAdjacentHTML('beforeend', bookCategoryhtml);
    bookCategory.books.forEach(book => {
      const bookCardHtml = `<div class="book-card"><img class="book-image" src="${book.book_image}"/><p class="book-title">${book.title}</p><p class="book-author">${book.author}</p></div>`;
      console.log(book);
      bookList.insertAdjacentHTML('beforeend', bookCardHtml);
    });
    bookList.insertAdjacentHTML(
      'beforeend',
      `<button id="${bookCategory.list_name}"class"see-more-btn">SEE MORE</button>`,
    );
  });
}
