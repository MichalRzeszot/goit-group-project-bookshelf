const bookListContainer = document.querySelector('.bl-container');
const bookModal = document.querySelector('#book-modal');
const bookModalCloseBtn = document.querySelector('#book-modal-close-btn');

const bookModalImg = document.querySelector('#book-modal-image');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookDesc = document.querySelector('#book-desc');
const bookAmazonUrl = document.querySelector('#book-amazon-url');

const addToShoppingListButton = document.querySelector("#book-modal-btn");

let selectedBook = null;

const handleBookClick = async e => {
  const id = e.target.closest('.bl-book-image').parentNode.id;
  fetchSpecificBook(id);
  bookModal.classList.toggle('hidden');
};

const closeModal = () => {
  selectedBook = null;
  bookModal.classList.toggle('hidden');
};

const getShoppingList = () => {
  // Dodaj selectedBook do localStorage
  const shoppingListJson = localStorage.getItem('shoppingList');
  let shoppingList;
  
  if (JSON.parse(shoppingListJson) == null) {
    shoppingList = [];
  }
  else {
    shoppingList = JSON.parse(shoppingListJson);
  }

  return shoppingList
}

const addToShoppingList = () => {
  
  //some() sprawdza, czy w tablicy shoppingList istnieje przynajmniej jedna książka, której identyfikator id jest równy identyfikatorowi wybranej książki - selectedBook.id. Jeśli choć jedna książka o takim identyfikatorze istnieje w liście zakupów, zmienna bookAlreadyInList będzie miała wartość true
  //Mogłabym użyć find(), ale wtedy metoda zwraca ten znaleziony element, a nie wartość logiczna true lub false
  const shoppingList = getShoppingList();
  const bookAlreadyInList = shoppingList.some(book => book._id === selectedBook._id);

  if (bookAlreadyInList) {
    // jeśli książka selectedBook istnieje już w shoppingList to używając metody filter() tworzą nową tablicę zawierającą tylko te elementy, które spełaniają warunek funksji zwrotnej. Więc  updatedShoppingList zawiera wszystkie elementy z shoppingList, które nie mają tego samego identyfikatora co selectedBook. To jest wykorzystywane do usuwania wybranej książki z listy zakupów.
    const updatedShoppingList = shoppingList.filter(book => book._id !== selectedBook._id);

    // cały zaktualizowany koszyk zamieniam na stringa i wrzucam do local storage
    const updatedShoppingListJson = JSON.stringify(updatedShoppingList);
    localStorage.setItem('shoppingList', updatedShoppingListJson);

   
    addToShoppingListButton.textContent = "Add to Shopping List";
  } else {
    shoppingList.push(selectedBook);
    const updatedShoppingListJson = JSON.stringify(shoppingList);
    localStorage.setItem('shoppingList', updatedShoppingListJson);

    // zmiana nazwy przycisku
    addToShoppingListButton.textContent = "Remove from Shopping List";
  }
};

bookModalCloseBtn.addEventListener('click', closeModal);
bookListContainer.addEventListener('click', handleBookClick);
addToShoppingListButton.addEventListener('click', addToShoppingList);

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

  selectedBook = data;

  const shoppingList = getShoppingList();
  const bookAlreadyInList = shoppingList.some(book => book._id === selectedBook._id);

  if (bookAlreadyInList) {
    addToShoppingListButton.textContent = "Remove from Shopping List";

  }
  else {
    addToShoppingListButton.textContent = "Add to Shopping List";
  }
 };
