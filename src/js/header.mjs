(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const toggleMenuBtn = document.querySelector('.js-toggle-menu');
  const header = document.querySelector('.header-frame');
  const openShoppingMenu = document.querySelector('.shopping-item');

  const toggleMenu = () => {
    console.log('toggleMenu');
    // czy menu jest otwarte
    const isMenuOpen = toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');

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

  const showShoppingList = () => {
    toggleMenu();
    console.log('showShoppingList...');
  };

  openShoppingMenu.addEventListener('click', showShoppingList);
})();
