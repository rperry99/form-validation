// Form Elements
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

// Validate form
let isValid = false;

function validateForm() {
  // USing Constraing API
  isValid = form.checkValidity();

  // Style main message for an error
  message.textContent = 'Please fill out all fields.';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
}

// Function Process Form Data
function processFormData(e) {
  e.preventDefault();
  // Validate form
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);
