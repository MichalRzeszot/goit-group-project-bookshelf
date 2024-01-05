const loader = document.querySelector('#loader-container');

const showLoader = () => {
  loader.classList.remove('fade-out');
  loader.classList.add('fade-in');
};

const disableLoader = () => {
  loader.classList.remove('fade-in');
  loader.classList.add('fade-out');
};
