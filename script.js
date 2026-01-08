// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! We\'ll send you the latest food updates.');
    this.reset();
});

// Add hover effects to cards
document.querySelectorAll('.post-card, .category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// Subscribe button functionality
document.querySelector('.order-btn').addEventListener('click', function() {
    document.querySelector('.newsletter').scrollIntoView({
        behavior: 'smooth'
    });
    setTimeout(() => {
        document.querySelector('.newsletter-form input').focus();
    }, 500);
});

console.log('ALIENTO Food Blog - Welcome! 🌊');

