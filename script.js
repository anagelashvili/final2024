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
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const agree = document.getElementById('agree').checked;
    if (!username || !email || !password || !agree) {
        alert('Please fill all fields and agree to the terms.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
    }

    alert('Form submitted successfully!');
});

function togglePassword() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
}

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        document.getElementById('apiData').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);

document.getElementById('filterInput').addEventListener('input', function() {
    const filterText = this.value.toLowerCase();
    const products = document.querySelectorAll('.pro');
    products.forEach(product => {
        const productName = product.querySelector('.des h5').innerText.toLowerCase();
        product.style.display = productName.includes(filterText) ? '' : 'none';
    });
});

document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    });
});

const scrollToTopButton = document.querySelector('.scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

import _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
    console.log(_.join(['Page', 'Loaded'], ' '));
});
