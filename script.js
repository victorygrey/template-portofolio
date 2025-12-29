
// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Simpan preferensi ke localStorage
    if(document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
// Load preferensi dark mode
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Animasi on scroll (fade-in)
const revealElements = document.querySelectorAll('.about-section, .skills-section, .projects-section, .experience-section, .contact-section, .project-card, .experience-item');
const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    revealElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if(boxTop < triggerBottom) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'all 0.7s cubic-bezier(.4,2,.6,1)';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)';
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Kontak form validation (simple)
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();
        if(!name || !email || !message) {
            alert('Please fill in all fields.');
            e.preventDefault();
        } else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });
}