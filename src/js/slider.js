const charities = ['1', '2', '3', '4', '5'];

const charitiesList = document.querySelector('#charities');
const list = [];

for (const element of charities) {
  const charity = document.createElement('li');
  charity.textContent = element;
  charity.classList.add('item');
  list.push(charity);
}

charitiesList.append(...list);
