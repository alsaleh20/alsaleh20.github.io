document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileNav = document.getElementById('mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    mobileMenu.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = scrolled + '%';
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        if (winScroll > 50) {
            navbar.style.background = 'rgba(2, 6, 23, 0.95)';
            navbar.style.height = '70px';
        } else {
            navbar.style.background = 'rgba(2, 6, 23, 0.8)';
            navbar.style.height = '80px';
        }
    });

    // Quality Cards Toggle
    const qualityCards = document.querySelectorAll('.quality-card');
    qualityCards.forEach(card => {
        card.addEventListener('click', () => {
            qualityCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Form Submission (Simulated)
    const contactForm = document.getElementById('portfolio-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'جاري الإرسال...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'تم الإرسال بنجاح!';
                btn.style.background = '#10b981';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Smooth Scroll for Internal Links
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
});
