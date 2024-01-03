const placeForList = document.querySelector('.all-category');
const categoris = 'https://books-backend.p.goit.global/books/category-list';
const toUpBtn = document.querySelector('#to-up-btn');
let clickedBook;
let clickedCategory;
function creatingAList() {
  fetch(`${categoris}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(elem => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-section-item-list');
        listItem.insertAdjacentHTML('afterbegin', `${elem.list_name}`);
        placeForList.append(listItem);
      });
    })
    .catch(error => {
      console.log(`Fetching error during fetching category: ${error}`);
    });
}
creatingAList();

// Sekcja przycisku do przewijania w góre strony
window.addEventListener('scroll', scrollhandler);
function scrollhandler() {
  let yPositionvalue = window.pageYOffset;
  if (yPositionvalue > 1000 && window.screen.availWidth > 768) {
    toUpBtn.style.display = 'block';
  } else {
    toUpBtn.style.display = 'none';
  }
}
toUpBtn.addEventListener('click', toUpBtnClickHandler);
function toUpBtnClickHandler() {
  window.scrollBy(0, -1 * window.pageYOffset);
}
