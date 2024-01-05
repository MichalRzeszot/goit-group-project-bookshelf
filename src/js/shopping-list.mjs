document.addEventListener('DOMContentLoaded', function () {
  // Sprawdzam, czy localStorage zawiera dane o książkach w koszyku lub zwracam pustą tablicę, jeśli w local storage nic nie ma
  const shoppingListData = JSON.parse(localStorage.getItem('shoppingList')) || [];

  const shoppingListContainer = document.getElementById('shopping-list');

  if (shoppingListData.length === 0) {
    // Wyświetlam komunikat w przypadku, jeśli koszyk jest pusty
    shoppingListContainer.innerHTML =
      '<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>';
  } else {
    // Wyświetlam każdą książkę z koszyka
    shoppingListData.forEach(book => {
      const bookCard = createBookCard(book);
      shoppingListContainer.appendChild(bookCard);
    });
  }

  // Tworzę kartę dla książki w koszyku
  function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card-container');

    // Dodaję wymagane informacje o książce
    card.innerHTML = `
        <div class="image-container">
         <img class="book-image" src="${book.book_image}" alt="${book.title} Cover"/>
        </div>

      <div class="text-container">
          <div class="book-card-header">
              <div class="card-title-container">
                    <p class="book-title">${book.title}</p>
                    <p class="book-category">${book.list_name}</p>
              </div>
             <div>
                    <button class="remove-button" onclick="removeFromShoppingList('${book._id}')">
                    <svg class="remove-button-item"><use href="./images/icons.svg#icon-trash-03"></use></svg>
                    </button>
              </div>
          </div>

        <p class="book-description">${book.description}</p>

          <div class="book-author">${book.author}</div>
          
          <div class="purchase-links">
                <a href="${book.buy_links[0].url}">
                    LINK
                </a>
          </div> 
      </div>`;

    return card;
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
