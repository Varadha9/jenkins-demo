// Navbar scroll effect
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => document.querySelector('.nav-links').classList.remove('open'));
});

// Cart
let cart = [];

function addToCart(name, price) {
    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    updateCart();
    toggleCart();
}

function removeFromCart(name) {
    cart = cart.filter(i => i.name !== name);
    updateCart();
}

function updateCart() {
    const container = document.getElementById('cart-items');
    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    document.getElementById('cart-total').textContent = `₹${total}`;
    document.querySelector('.cart-count').textContent = cart.reduce((sum, i) => sum + i.qty, 0);

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        return;
    }

    container.innerHTML = cart.map(i => `
        <div class="cart-item">
            <span>${i.name} x${i.qty}</span>
            <span>₹${i.price * i.qty}</span>
            <button onclick="removeFromCart('${i.name}')"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('open');
    document.getElementById('cart-overlay').classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) return alert('Your cart is empty!');
    alert('Order placed successfully! Thank you ☕');
    cart = [];
    updateCart();
    toggleCart();
}

// Auth Modal
function toggleModal(id) {
    document.getElementById(id).classList.toggle('open');
}

function closeModal(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
    }
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('login-form').style.display = tab === 'login' ? 'flex' : 'none';
    document.getElementById('register-form').style.display = tab === 'register' ? 'flex' : 'none';
}

function handleAuth(e, type) {
    e.preventDefault();
    alert(type === 'login' ? 'Logged in successfully! ☕' : 'Account created! Welcome to The Arise ☕');
    toggleModal('auth-modal');
}

// Contact form
function submitForm(e) {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon ☕');
    e.target.reset();
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
