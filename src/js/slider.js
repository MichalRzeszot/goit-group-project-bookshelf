const charities = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  // '07', '08', '09'
];

const charitiesList = document.querySelector('#charities');
const list = [];

for (const element of charities) {
  const charity = document.createElement('li');
  charity.textContent = element;
  charity.classList.add('charity');
  list.push(charity);
}

charitiesList.append(...list);
