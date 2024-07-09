const scriptURL = 'https://script.google.com/macros/s/AKfycbxjLVGrbKB8I-RJ89s7wMykz3-1tBA8lTvbqtEU86fdF4BX7sh_ongBL0lSQ8HyupQf/exec'

const form = document.forms['contact-form1']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Student marks have been updated succesfully" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})