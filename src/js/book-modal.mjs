const bookListContainer = document.querySelector('.bl-container');
const bookModal = document.querySelector('#book-modal');
const bookModalCloseBtn = document.querySelector('#book-modal-close-btn');

const bookModalImg = document.querySelector('#book-modal-image');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookDesc = document.querySelector('#book-desc');
const bookAmazonUrl = document.querySelector('#book-amazon-url');
const bookModalBtn = document.querySelector('#book-modal-btn');

const showModal = () => {
  bookModal.classList.remove('fade-out');
  bookModal.classList.add('fade-in');
};
const closeModal = () => {
  bookModal.classList.remove('fade-in');
  bookModal.classList.add('fade-out');
};

const handleBookClick = async e => {
  if (e.target.classList.contains('bl-container')) return;

  const id = e.target.closest('[id]').id;

  if (!id) return;

  showLoader();
  setTimeout(() => {
    disableLoader();
  }, 400);

  fetchSpecificBook(id);
  showModal();

  document.addEventListener('keydown', closeModalOnEscape);
};

const closeModalOnEscape = e => {
  if (e.key === 'Escape' || e.key === 'Esc') {
    closeModal();
  }
};

bookModalCloseBtn.addEventListener('click', closeModal);
bookListContainer.addEventListener('click', handleBookClick);

const fetchSpecificBook = async id => {
  const url = `https://books-backend.p.goit.global/books/${id}`;

  const res = await fetch(url);
  const data = await res.json();

  const { author, title, description, book_image, amazon_product_url } = data;

  bookTitle.textContent = title;
  bookAuthor.textContent = author;
  bookDesc.textContent = description;

  bookModalImg.setAttribute('src', book_image);
  bookAmazonUrl.setAttribute('href', amazon_product_url);
};

const addToShoppingList = () => {
  const title = bookTitle.textContent;
  const author = bookAuthor.textContent;
  const description = bookDesc.textContent;
  const bookImage = bookModalImg.getAttribute('src');
  const amazonUrl = bookAmazonUrl.getAttribute('href');

  const bookInfo = {
    title,
    author,
    description,
    bookImage,
    amazonUrl,
  };

  let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

  shoppingList.push(bookInfo);

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

  closeModal();
};

bookModalBtn.addEventListener('click', addToShoppingList);
