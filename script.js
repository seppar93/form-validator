// Elements
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

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(input).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at lease ${min}`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}
// Event Listeners

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);

  // if (username.value === '') {
  //   showError(username, 'username is required');
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === '') {
  //   showError(email, 'email is required');
  // } else if (!isValidEmail(email)) {
  //   showError(email, 'email is not valid');
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value === '') {
  //   showError(password, 'password is required');
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === '') {
  //   showError(password2, 'password should match');
  // } else {
  //   showSuccess(password2);
  // }
});
