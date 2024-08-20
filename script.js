const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};


import axios from 'axios';

// Burger Menu Toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Accordion Toggle
document.querySelectorAll('.accordion-title').forEach(item => {
  item.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Validation
document.querySelector('#myForm').addEventListener('submit', function(e) {
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const agree = document.querySelector('#agree').checked;
  const gender = document.querySelector('input[name="gender"]:checked');
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
  
  if (!username) {
    e.preventDefault();
    alert('Username is required');
  } else if (!emailPattern.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email');
  } else if (!passwordPattern.test(password)) {
    e.preventDefault();
    alert('Password must be at least 8 characters long and include a number');
  } else if (!agree) {
    e.preventDefault();
    alert('You must agree to the terms');
  } else if (!gender) {
    e.preventDefault();
    alert('Please select your gender');
  }
});

function togglePassword() {
  const passwordField = document.querySelector('#password');
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

// Fetch API Data
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    const dataContainer = document.querySelector('#apiData');
    response.data.slice(0, 5).forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      dataContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
