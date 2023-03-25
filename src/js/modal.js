(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function toggleModal() {
    refs.modal.classList.toggle('hide');
  }
  function openModal() {
    refs.modal.classList.add('show');
    refs.modal.classList.remove('hide');
  }
  function closeModal() {
    refs.modal.classList.add('hide');
    refs.modal.classList.remove('show');
  }
})();
