/**
 * =====================================================
 * ملف المنطق الأساسي - Main JavaScript File
 * =====================================================
 * يتحكم في:
 * 1. تبديل الثيمات (Dark/Light) وحفظ التفضيلات
 * 2. تأثيرات التمرير (Scroll Effects)
 * 3. قائمة الموبايل
 * 4. التحريكات السلسة
 * 
 * Controls:
 * 1. Theme Toggle (Dark/Light) and persistence
 * 2. Scroll Effects
 * 3. Mobile Menu
 * 4. Smooth Animations
 * ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // =====================================================
    // 1. منطق تبديل الثيم - Theme Toggle Logic
    // =====================================================
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    // تحديث الأيقونات بناءً على الثيم الحالي / Update icons based on current theme
    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    }

    // التهيئة الأولية / Initial state
    const currentTheme = document.documentElement.getAttribute('data-theme');
    updateIcons(currentTheme);

    // حدث النقر / Click event
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        let newTheme = theme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    });


    // =====================================================
    // 2. تأثيرات التمرير - Scroll Effects
    // =====================================================
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // تحديث الرابط النشط / Update Active Link
        updateActiveLink();
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }


    // =====================================================
    // 3. قائمة الموبايل - Mobile Menu
    // =====================================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinks');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('mobile-active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = navLinksContainer.classList.contains('mobile-active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link / إغلاق القائمة عند النقر على رابط
        const navLinks = navLinksContainer.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('mobile-active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }


    // =====================================================
    // 4. تحريكات التمرير - Scroll Animations (Intersection Observer)
    // =====================================================
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


    // =====================================================
    // 5. تأثير الكتابة - Typing Effect
    // =====================================================
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const wordsAR = JSON.parse(typingElement.getAttribute('data-words-ar'));
        const wordsEN = JSON.parse(typingElement.getAttribute('data-words-en'));
        const words = document.documentElement.lang.startsWith('ar') ? wordsAR : wordsEN;
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                charIndex--;
                typeSpeed = 50;
            } else {
                charIndex++;
                typeSpeed = 150;
            }

            typingElement.textContent = currentWord.substring(0, charIndex);

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        setTimeout(type, 1000); // تأخير بداية الكتابة قليلاً
    }


    // =====================================================
    // 6. شريط تقدم التمرير - Scroll Progress
    // =====================================================
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });


    // =====================================================
    // 7. تأثير الأزرار المغناطيسية - Magnetic Buttons
    // =====================================================
    const magneticBtns = document.querySelectorAll('.btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });


    // =====================================================
    // 8. شعاع يتبع الماوس - Cursor Glow
    // =====================================================
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});
