const placeOfList = document.querySelector('.list-section');
const ulOfCategorys = document.querySelector('.all-category');
const placeForBooks = document.querySelector('.searched-books');
const categoris = 'https://books-backend.p.goit.global/books/category-list';
const topBooks = 'https://books-backend.p.goit.global/books/top-books';
function creatingAList() {
  fetch(`${categoris}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(elem => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-section-item-list');
        listItem.insertAdjacentHTML('afterbegin', `<a href="#">${elem.list_name}</a>`);
        placeOfList.appendChild(listItem);
      });
    })
    .catch(error => {
      console(`Fetching error during fetching category: ${error}`);
    });
}
creatingAList();
