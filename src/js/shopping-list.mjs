import trashIcon from '../images/trash-icon.svg';
import icons from '../images/icons.svg';


document.addEventListener('DOMContentLoaded', function () {
  // Sprawdzam, czy localStorage zawiera dane o książkach w koszyku lub zwracam pustą tablicę, jeśli w local storage nic nie ma
  const shoppingListData = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const shoppingListContainer = document.getElementById('shopping-list');
  const navigationButtons = document.querySelectorAll('.navigation-button');
  const itemsPerPage = 3;
  let currentPage = 1;

  function updateTotalPages() {
    totalPages = Math.ceil(shoppingListData.length / itemsPerPage);
  }

  function displayBooks(page) {
    shoppingListContainer.innerHTML = ''; // Clear previous content

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const booksToDisplay = shoppingListData.slice(startIndex, endIndex);

    booksToDisplay.forEach(book => {
      const bookCard = createBookCard(book);
      shoppingListContainer.appendChild(bookCard);
    });
  }

  function createPagination() {
    const paginationContainer = document.getElementById('pages');
    paginationContainer.innerHTML = '';

    updateTotalPages();

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.innerText = i;
      pageButton.classList.add('page-button');
      pageButton.addEventListener('click', function () {
        currentPage = i;
        displayBooks(currentPage);
        updateButtonStyles();
      });
      paginationContainer.appendChild(pageButton);
    }

    const firstPageBtn = document.getElementById('first-page');
    firstPageBtn.addEventListener('click', function () {
      currentPage = 1;
      displayBooks(currentPage);
      updateButtonStyles();
    });

    const lastPageBtn = document.getElementById('last-page');
    lastPageBtn.addEventListener('click', function () {
      currentPage = totalPages;
      displayBooks(currentPage);
      updateButtonStyles();
    });

    const prevPageBtn = document.getElementById('previous-page');
    prevPageBtn.addEventListener('click', function () {
      if (currentPage > 1) {
        currentPage--;
        displayBooks(currentPage);
        updateButtonStyles();
      }
    });

    const nextPageBtn = document.getElementById('next-page');
    nextPageBtn.addEventListener('click', function () {
      if (currentPage < totalPages) {
        currentPage++;
        displayBooks(currentPage);
        updateButtonStyles();
      }
    });

    function updateButtonStyles() {
      const buttons = document.querySelectorAll('.page-button');

      buttons.forEach((button, index) => {
        if (index + 1 === currentPage) {
          button.style.backgroundColor = 'var(--black)';
          button.style.color = 'var(--white)';
        } else {
          button.style.backgroundColor = '';
          button.style.color = '';
        }
      });
    }

    updateButtonStyles();
  }

  function displayNavigationButtons(shouldDisplay) {
    navigationButtons.forEach(button => {
      button.style.display = shouldDisplay ? 'inline-block' : 'none';
    });
  }

  if (shoppingListData.length === 0) {
    shoppingListContainer.innerHTML =
      '<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>';
    displayNavigationButtons(false);
  } else {
    displayNavigationButtons(true);
    displayBooks(currentPage);
    createPagination();
  }

  // if (shoppingListData.length === 0) {
  //   // Wyświetlam komunikat w przypadku, jeśli koszyk jest pusty
  //   shoppingListContainer.innerHTML =
  //     '<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>';
  // } else {
  //   // Wyświetlam każdą książkę z koszyka
  //   shoppingListData.forEach(book => {
  //     const bookCard = createBookCard(book);
  //     shoppingListContainer.appendChild(bookCard);
  //   });
  // }

  // Tworzę kartę dla książki w koszyku
  function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card-container');

    // Dodaję wymagane informacje o książce
    card.innerHTML = `
    <div>
    <img class="book-image" src="${book.book_image}" alt="${book.title} Cover"/>
   </div>

   <div class="text-container">
   <div class="card-book-data-container">
       <div class="book-card-header">
             <div class="card-title-container">
                    <p class="book-title">${book.title}</p>
                    <p class="book-category">${book.list_name}</p>
             </div>
             <div>
                   <button class="remove-button" onclick="removeFromShoppingList('${book._id}')">
                   <div class="remove-button-item">
                        <img src="${trashIcon}"/> 
                   </div>
                   </button>
             </div>   
       </div> 
       <div class="book-description">${book.description}</div>
    </div>
 
   <div class="card-book-footer">     
       <div class="book-author">${book.author}</div>
       <div class="purchase-links">     
        <a class="amazon-icon" href="${book.amazon_product_url}">
        <svg><use href="${icons}#icon-amazon"></use></svg>  
        </a>
        <a href="${book.buy_links[1].url}">
        <svg class="book-link-icon">
        <use href="${icons}#icon-book-icon"></use>
        </svg>
        </a>
       </div> 
   </div>
 </div>`;
    return card;
  }

  function removeFromShoppingList(bookId) {
    const updatedShoppingList = shoppingListData.filter(book => book._id !== bookId);
    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
    location.reload();
  }

  //funkcja do usuwania książki z koszyka
  document.removeFromShoppingList = function (bookId) {
    //Funkcja filter() zwraca nową tablicę, która zawiera odfiltrowane elementy
    const updatedShoppingList = shoppingListData.filter(book => book._id !== bookId);

    //Zapisuję zaktualizowaną listę zakupów do localStorage pod kluczem "shoppingList"
    localStorage.setItem('shoppingList', JSON.stringify(updatedShoppingList));
    // Przeładuj stronę, aby odświeżyć listę. Bez tego kroku użytkownik musiałby samodzielnie odświeżyć stronę, żeby zobaczyć zmiany.
    location.reload();
  };
});

{/*<use href="/src/images/icons.svg#icon-trash-03"></use></svg></div>   */}