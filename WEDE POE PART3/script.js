const searchIcon = document.querySelector('.search-icon');
const searchForm = document.querySelector('.search-form');
const cartIcon = document.querySelector('.cart-icon');
const cartItemsContainer = document.querySelector('.cart-items-container');


if (searchIcon && searchForm && cartIcon && cartItemsContainer) {
    searchIcon.addEventListener("click", () => {
        searchForm.classList.add('active');
        cartItemsContainer.classList.remove('active');
    });

   
    cartIcon.addEventListener("click", () => {
        cartItemsContainer.classList.add('active');
        searchForm.classList.remove('active');
    });
}
window.addEventListener('scroll', () => {
    const container = document.querySelector('.container');
    
  
    if (container) {
        const scrollPosition = window.scrollY;
        container.style.top = `${100 - scrollPosition * 0.1}%`;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');


    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', () => {
            input.placeholder = '';
        });
    });

   
    form.addEventListener('submit', (event) => {
        if (!nameInput.value.trim()) {
            alert('Name is required.');
            event.preventDefault();
            nameInput.focus();
        } else if (!emailInput.value.trim()) {
            alert('Email is required.');
            event.preventDefault();
            emailInput.focus(); 
        } else if (!messageInput.value.trim()) {
            alert('Message is required.');
            event.preventDefault(); 
            messageInput.focus();
        }
    });
});


const dateStamp = new Date().toLocaleDateString();
            document.getElementById('date-stamp').textContent = `Last updated: ${dateStamp}`;


            