const scriptURL = 'https://script.google.com/macros/s/AKfycbzihNnqKsYw6qONcNHC-oef_s7SiRz5PRcRix6_zssHz5YtOLOyHZB7g6G2AfnaF-3N/exec'

const form = document.forms['confirm-form']
const submitButton = form.querySelector('button[type="submit"]')

form.addEventListener('submit', e => {
  e.preventDefault()
  submitButton.disabled = true

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => {
    alert("Obrigado. Sua presença foi confirmada!" )
    form.reset()
  })
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  .finally(() => {
    submitButton.disabled = false
  })
})
