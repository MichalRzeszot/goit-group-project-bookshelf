const placeForList = document.querySelector('.all-category');

const categoris = 'https://books-backend.p.goit.global/books/category-list';
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
placeForList.addEventListener('click', ev => {
  clickedBook = sessionStorage.setItem('clickedBook', ev.target.textContent);
  clickedCategory = sessionStorage.getItem('clickedBook');
  console.log(clickedCategory);
});
