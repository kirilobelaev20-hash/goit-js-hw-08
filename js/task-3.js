const nameElement = document.querySelector('#name-input');
nameElement.addEventListener('input', event => {
  const nameOutput = document.querySelector('#name-output');
  nameOutput.textContent = event.target.value.trim() === '' ? 'Anonymous' : event.target.value.trim();
});