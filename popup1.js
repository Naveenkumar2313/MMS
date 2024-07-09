const scriptURL = 'https://script.google.com/macros/s/AKfycbyEKqrOLlpGW6S1OCIQ1lbd22lbSCbR9EkPHmb84IgMVGPx1kgi1fLoFcaPZG64GvG0/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Student marks have been updated succesfully" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})