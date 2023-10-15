const openModal = (modal) => {
  modal.classList.add("modal__open")
}

const closeModal = (modal) => {
  modal.classList.remove("modal__open")
}

const configureModal = (modalId, buttonId, cancelCallback = () => {}) => {
  const modal = document.querySelector(`#${modalId}`)
  const button = document.querySelector(`#${buttonId}`)

  button.addEventListener("click", (e) => {
    openModal(modal)
  })

  modal.querySelector(".modal__close")?.addEventListener("click", (e) => {
    closeModal(modal)
  })

  modal.querySelector(".modal__cancel__button")?.addEventListener("click", (e) => {
    closeModal(modal)
    cancelCallback(e)
  })
}
