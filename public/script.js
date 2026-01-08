// API Configuration
const API_URL = window.location.origin;

// Load posts from API
async function loadPosts() {
    try {
        const res = await fetch(`${API_URL}/api/posts`);
        const posts = await res.json();

        const grid = document.getElementById('postsGrid');
        if (!grid) return;

        const categoryFilter = grid.getAttribute('data-category');
        const displayedPosts = categoryFilter
            ? posts.filter(post => post.category === categoryFilter)
            : posts;

        if (displayedPosts.length === 0) {
            grid.innerHTML = '<p>No stories found in this category yet.</p>';
            return;
        }

        const images = {
            'Cooking Tips': 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070',
            'Morning Routine': 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006',
            'Restaurant Reviews': 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974',
            'Recipes': 'https://images.unsplash.com/photo-1495521821758-02dce8a5422f?q=80&w=2000',
            'default': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070'
        };

        grid.innerHTML = displayedPosts.map(post => `
            <article class="post-card">
                <img src="${images[post.category] || images.default}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <div class="post-meta">${post.category || 'Food'}</div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="/post/${post._id}" class="read-more">Read Story <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
                </div>
            </article>
        `).join('');
    } catch (error) {
        console.error('Failed to load posts:', error);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Newsletter form submission
document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert('Thank you for subscribing! We\'ll send you the latest food updates.');
    this.reset();
});

// Subscribe button functionality
document.querySelector('.order-btn')?.addEventListener('click', function () {
    const newsletterSection = document.querySelector('.newsletter');
    if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            document.querySelector('.newsletter-form input').focus();
        }, 500);
    }
});

// Load posts when page loads
if (document.getElementById('postsGrid')) {
    loadPosts();
}

console.log('ALIENTO Food Blog - Welcome! 🌊');

