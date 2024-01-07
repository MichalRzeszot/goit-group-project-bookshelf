(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-firebase]'),
  };
  console.log(refs);
  refs.openModalBtn.forEach(elem => {
    elem.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    console.log('fssfd');
    refs.modal.classList.toggle('is-hidden');
  }
})();
