const bookListContainer = document.querySelector('.bl-container');

const handleBookClick = async e => {
  const id = e.target.closest('.bl-book-image').parentNode.id;
  console.log(id);
};

bookListContainer.addEventListener('click', handleBookClick);

const fetchSpecificBook = id => {
  const url = `https://books-backend.p.goit.global/books/${id}`;
};
