// ===================================
// Theme Management
// ===================================
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// ===================================
// Mobile Navigation
// ===================================
class MobileNav {
    constructor() {
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (!this.hamburger) return;
        
        this.hamburger.addEventListener('click', () => this.toggle());
        
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.hamburger.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    close() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

// ===================================
// Scroll Animations
// ===================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.6s ease forwards';
                }
            });
        }, this.observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
}

// ===================================
// Project Filters
// ===================================
class ProjectFilters {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projectCards = document.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        if (this.filterButtons.length === 0) return;

        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => this.filter(button));
        });
    }

    filter(button) {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        this.projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.6s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// ===================================
// Contact Form
// ===================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.message = document.getElementById('form-message');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Validate
        if (!this.validate(data)) {
            this.showMessage('Please fill in all fields correctly.', 'error');
            return;
        }

        // Simulate form submission
        this.showMessage('Thank you for your message! I will get back to you soon.', 'success');
        this.form.reset();

        // In a real implementation, you would send the data to a server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     this.showMessage('Message sent successfully!', 'success');
        //     this.form.reset();
        // })
        // .catch(error => {
        //     this.showMessage('Failed to send message. Please try again.', 'error');
        // });
    }

    validate(data) {
        return data.name && data.email && data.subject && data.message && 
               this.isValidEmail(data.email);
    }

    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showMessage(text, type) {
        this.message.textContent = text;
        this.message.className = `form-message ${type}`;
        
        setTimeout(() => {
            this.message.className = 'form-message';
        }, 5000);
    }
}

// ===================================
// FAQ Accordion
// ===================================
class FAQAccordion {
    constructor() {
        this.faqCards = document.querySelectorAll('.faq-card');
        this.init();
    }

    init() {
        if (this.faqCards.length === 0) return;

        this.faqCards.forEach(card => {
            const question = card.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggle(card));
        });
    }

    toggle(card) {
        const isActive = card.classList.contains('active');
        
        // Close all cards
        this.faqCards.forEach(c => c.classList.remove('active'));
        
        // Open clicked card if it wasn't active
        if (!isActive) {
            card.classList.add('active');
        }
    }
}

// ===================================
// Smooth Scroll
// ===================================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ===================================
// Navbar Scroll Effect
// ===================================
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.navbar.style.background = 'var(--glass-bg)';
                this.navbar.style.backdropFilter = 'blur(10px)';
                this.navbar.style.boxShadow = '0 4px 12px var(--shadow-color)';
            } else {
                this.navbar.style.background = 'var(--glass-bg)';
                this.navbar.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }
}

// ===================================
// Cursor Animation (Desktop only)
// ===================================
class CursorAnimation {
    constructor() {
        this.cursor = null;
        this.init();
    }

    init() {
        // Only on desktop devices
        if (window.innerWidth < 768) return;

        // Create cursor element
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--accent-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            display: none;
        `;
        document.body.appendChild(this.cursor);

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.display = 'block';
            this.cursor.style.left = e.clientX - 10 + 'px';
            this.cursor.style.top = e.clientY - 10 + 'px';
        });

        // Scale on clickable elements
        const clickables = document.querySelectorAll('a, button, .project-card');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
            });
        });
    }
}

// ===================================
// Typing Animation for Hero
// ===================================
class TypingAnimation {
    constructor() {
        this.element = document.querySelector('.hero-title .gradient-text');
        this.texts = ['Cybersecurity', 'Penetration Testing', 'Security Auditing', 'Threat Analysis'];
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        if (!this.element) return;
        
        // Only run on home page
        if (!window.location.pathname.includes('index.html') && 
            window.location.pathname !== '/' && 
            window.location.pathname !== '') return;

        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.element.textContent = currentText.substring(0, this.charIndex);

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed = 50;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ===================================
// Initialize Everything
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileNav();
    new ScrollAnimations();
    new ProjectFilters();
    new ContactForm();
    new FAQAccordion();
    new SmoothScroll();
    new NavbarScroll();
    new CursorAnimation();
    new TypingAnimation();

    // Add loading animation
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Reinitialize mobile nav if needed
    const navMenu = document.querySelector('.nav-menu');
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        document.querySelector('.hamburger')?.classList.remove('active');
    }
}, 250));
