const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {};
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  data.email = email;
  data.password = password;
  if (!data.email || !data.password) {
    alert('All form fields must be filled in');
    return;
  }
  console.log(data);
  form.reset();
});
