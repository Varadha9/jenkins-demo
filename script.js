document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Message sent successfully!');
    e.target.reset();
});
