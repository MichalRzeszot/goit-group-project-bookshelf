(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  const header = document.querySelector('.header-frame');
  const openShoppingMenu = document.querySelector('.shopping-item');
  const signUpBtn = document.querySelector('.sign-up-btn');
  const signUpForm = document.querySelector('.sign-up-form');
  const signUpFormBtn = document.querySelector('.sign-up-form-btn');
  const signUpContent = document.querySelector('.sign-up-content');
  const userMenuContent = document.querySelector('.user-menu');

  const toggleMenu = () => {
    console.log('toggleMenu');
    // czy menu jest otwarte
    const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    mobileMenu.classList.remove('bg-form');

    if (isMenuOpen) {
      console.log('opened menu');
      header.classList.remove('menu-opened');
      toggleMenuBtn.classList.add('hamburger-button');
      toggleMenuBtn.classList.remove('close-btn');
    } else {
      console.log('closed menu');
      header.classList.add('menu-opened');
      mobileMenu.classList.remove('bg-white');
      mobileMenu.classList.add('bg-books');

      toggleMenuBtn.classList.remove('hamburger-button');
      toggleMenuBtn.classList.add('close-btn');
    }
  };

  toggleMenuBtn.addEventListener('click', toggleMenu);

  const signUpClick = () => {
    signUpBtn.classList.add('hidden');
    signUpForm.classList.remove('hidden');
    header.classList.add('hidden');
    mobileMenu.classList.remove('bg-books');
    mobileMenu.classList.add('bg-form');
  };
  signUpBtn.addEventListener('click', signUpClick);

  const userMenu = () => {
    header.classList.remove('hidden');
    signUpForm.classList.add('hidden');
    mobileMenu.classList.add('bg-books');
    mobileMenu.classList.remove('bg-form');
    signUpContent.classList.add('hidden');
    userMenuContent.classList.remove('hidden');
  };
  signUpFormBtn.addEventListener('click', userMenu);

  const showShoppingList = () => {
    //dodanie shopping-list
    toggleMenu();
    console.log('showShoppingList...');
  };

  openShoppingMenu.addEventListener('click', showShoppingList);
})();
