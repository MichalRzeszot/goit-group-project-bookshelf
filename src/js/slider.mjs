const charities = [
  `<p>01</p><img class="slider-img-01" src="${require('../images/slider-img/01.png')}" />`,
  `<p>02</p><img class="slider-img-02" src="${require('../images/slider-img/02.png')}" />`,
  `<p>03</p><img class="slider-img-03" src="${require('../images/slider-img/03.png')}" />`,
  `<p>04</p><img class="slider-img-04" src="${require('../images/slider-img/04.png')}" />`,
  `<p>05</p><img class="slider-img-05" src="${require('../images/slider-img/05.png')}" />`,
  `<p>06</p><img class="slider-img-06" src="${require('../images/slider-img/06.png')}" />`,
  `<p>07</p><img class="slider-img-07" src="${require('../images/slider-img/07.png')}" />`,
  `<p>08</p><img class="slider-img-08" src="${require('../images/slider-img/08.png')}" />`,
  `<p>09</p><img class="slider-img-09" src="${require('../images/slider-img/09.png')}" />`,
];

const array = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];
const button = document.querySelector('.slider-button');

const charitiesList = document.querySelector('#charities');
let paginationValue = 1;
function creatingCharityList(value) {
  let list = [];
  charitiesList.innerHTML = '';
  if (value === 1) {
    let arr = charities.slice(0, 6);
    arr.forEach((element, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<a class="charity-container" href="${array[index].url}">${element}</a>`;
      li.classList.add('charity');
      list.push(li);
    });
  } else if (value !== 1) {
    let arr = charities.slice(3);
    arr.forEach((element, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<a class="charity-container" href="${array[index].url}">${element}</a>`;
      li.classList.add('charity');
      list.push(li);
    });
  }
  charitiesList.append(...list);
}
creatingCharityList(paginationValue);

button.addEventListener('click', _ev => {
  charitiesList.innerHTML = '';
  if (paginationValue === 1) {
    paginationValue++;
    creatingCharityList(paginationValue);
    button.style.transform = 'rotate(180deg)';
  } else if (paginationValue === 2) {
    paginationValue--;
    creatingCharityList(paginationValue);
    button.style.transform = 'rotate(0deg)';
  }
});
