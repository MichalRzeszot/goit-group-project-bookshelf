import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const mobileMenu = document.querySelector('.js-menu-container');
const toggleMenuBtn = document.querySelector('.js-toggle-menu');
const header = document.querySelector('.header-frame');
const openShoppingMenu = document.querySelector('.shopping-item');
const signUpBtnHeader = document.querySelector('sign-up-btn-header');
const homeHeader = document.querySelector('home-item-header');
const signUpBtn = document.querySelector('.sign-up-btn');
const signUpForm = document.querySelector('.sign-up-form');
const signUpFormBtn = document.querySelector('#sign-up-form .modal__send');
const signUpContent = document.querySelector('.sign-up-content');
const userMenuContent = document.querySelector('.user-menu');
const logOutBtn = document.querySelector('.log-out-btn');

const auth = getAuth();

// funkcja uruchamiana, gdy wykryto zalogowanego uytkownika
function userArleadyLoggedIn() {
  console.log('userArleadyLoggedIn');
  document.querySelector('body').classList.add('user-logged-in');
  // zmiana treści przycisku na nazwę usera
  document.querySelector('.user-name-change').textContent = auth.currentUser.displayName;
  // przęłączenie menu na menu usera
  userMenu();
}

function closeHamburgerMenu() {
  header.classList.remove('menu-opened');
  toggleMenuBtn.classList.add('hamburger-button');
  toggleMenuBtn.classList.remove('close-btn');
}

function openHamburgerMenu() {
  header.classList.add('menu-opened');
  mobileMenu.classList.remove('bg-white');
  mobileMenu.classList.add('bg-books');
  toggleMenuBtn.classList.remove('hamburger-button');
  toggleMenuBtn.classList.add('close-btn');

  if (auth.currentUser) {
    userArleadyLoggedIn();
  }
}

const toggleMenu = () => {
  console.log('toggleMenu');
  // czy menu jest otwarte
  const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  mobileMenu.classList.remove('bg-form');

  if (isMenuOpen) {
    console.log('opened menu');
    closeHamburgerMenu();
  } else {
    console.log('closed menu');
    openHamburgerMenu();
  }
};

toggleMenuBtn.addEventListener('click', toggleMenu);

// const signUpClickFirst = () => {
//   signUpForm.classList.remove('hidden');
// };
// signUpBtnHeader.addEventListener('click', signUpClickFirst);

const signUpClick = () => {
  signUpBtn.classList.add('hidden');
  signUpForm.classList.remove('hidden');
  mobileMenu.classList.remove('bg-books');
  mobileMenu.classList.remove('is-open');

  closeHamburgerMenu();
};
signUpBtn.addEventListener('click', signUpClick);

const userMenu = () => {
  header.classList.remove('hidden');
  signUpForm.classList.add('hidden');
  mobileMenu.classList.add('bg-books');
  mobileMenu.classList.remove('bg-form');
  signUpContent.classList.add('hidden');
  userMenuContent.classList.remove('hidden');
  document.querySelector('.user-menu .button-user .user-text').textContent =
    auth.currentUser.displayName;
  // console.log(auth.currentUser.displayName);
};
// signUpFormBtn.addEventListener('click', userMenu);

const showShoppingList = () => {
  //dodanie shopping-list
  toggleMenu();
  console.log('showShoppingList...');
};

openShoppingMenu.addEventListener('click', showShoppingList);

// Dark-mode switcher
let darkMode = localStorage.getItem('darkMode');
const htmlTag = document.querySelector('html');
const checkbox = document.querySelector('#switch');
checkbox.addEventListener('change', changeHandler);

console.log(darkMode);

if (darkMode === 'enabled') {
  enableDarkMode();
  checkbox.checked = true;
}
function changeHandler(ev) {
  darkMode = localStorage.getItem('darkMode');
  if (ev.target.checked === true) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
function enableDarkMode() {
  htmlTag.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}
function disableDarkMode() {
  htmlTag.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
}

// tworzymy trwałą sesję uywając local storage jako miejsca przechowywania (browserLocalPersistence)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    // czy user zalogowany?
    if (auth.currentUser) {
      console.log(auth.currentUser);
      userArleadyLoggedIn();
    } else {
      // uytkownik nie zalogowany
    }
  })
  .catch(error => {
    console.error('Error setting persistence:', error);
  });
