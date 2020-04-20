const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  // overwriting class name
  const small = formControl.querySelector('small');
  small.innerText = message;
  // ^^ inner text passed to showError
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event Listeners

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(username.value);

  if (username.value === '') {
    showError(username, 'username is required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'email is required');
  } else if (!isValidEmail(email)) {
    showError(email, 'email is not valid');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'password should match');
  } else {
    showSuccess(password2);
  }
});
