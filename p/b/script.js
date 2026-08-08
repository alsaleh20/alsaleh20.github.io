document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: keep observing for multi-trigger
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth Scroll for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic header change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 10%';
            header.style.background = 'rgba(26, 15, 10, 0.95)';
        } else {
            header.style.padding = '20px 10%';
            header.style.background = 'rgba(26, 15, 10, 0.8)';
        }
    });

    // Add subtle hover effect to cards based on mouse position (Glassmorphism highlight)
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
