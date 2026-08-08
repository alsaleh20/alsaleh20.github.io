/**
 * public/assets/js/main.js
 * الجافاسكريبت الرئيسي لموقع أشرف الدباس - PHP Edition
 * جميع المزايا محفوظة من النسخة الأصلية
 */

'use strict';

// ─── تهيئة AOS ────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }
    initTheme();
    initNavbar();
    initCounters();
    initScrollSpy();
    createParticles();
    initFAQ();
    initLanguageSwitcher();
});

// ─── تبديل اللغة ──────────────────────────────────────
function switchLanguage(lang) {
    // تحديث الـ Cookie والـ URL
    document.cookie = `cv_lang=${lang};path=/;max-age=${365*24*3600};SameSite=Lax`;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
}

function initLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (switcher && window.SITE_CONFIG) {
        switcher.value = window.SITE_CONFIG.lang;
    }
}

// ─── Theme Toggle ──────────────────────────────────────
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next    = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('selectedTheme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const btn  = document.getElementById('theme-toggle');
    if (!btn) return;
    const icon = btn.querySelector('i');
    if (!icon) return;
    icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ─── Navbar ────────────────────────────────────────────
function initNavbar() {
    const navbar   = document.getElementById('main-navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    // Sticky scroll effect
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });

    // Mobile Toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', toggleMenu);

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                if (navLinks.classList.contains('active')) closeMenu();
            }
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
}

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (!navLinks || !navToggle) return;
    navLinks.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    }
}

function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    const navToggle = document.getElementById('nav-toggle');
    if (navLinks) navLinks.classList.remove('active');
    if (navToggle) {
        const icon = navToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
    }
}

// ─── Counter Animation ─────────────────────────────────
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
    const target = +el.getAttribute('data-target');
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.ceil(current).toLocaleString();
        if (current < target) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(update);
}

// ─── ScrollSpy ────────────────────────────────────────
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 160;
            if (window.scrollY >= top) current = sec.id;
        });
        navLinks.forEach(a => {
            a.classList.toggle('active', a.dataset.section === current);
        });
    }, { passive: true });
}

// ─── FAQ ───────────────────────────────────────────────
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => toggleFAQ(q));
    });
}

function toggleFAQ(btn) {
    const item = btn.closest('.faq-item');
    const isActive = item.classList.contains('active');
    // Close all
    document.querySelectorAll('.faq-item.active').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').removeAttribute('style');
        const icon = i.querySelector('.faq-question i');
        if (icon) icon.style.transform = '';
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
    // Open clicked
    if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
    }
}

// ─── Particles ────────────────────────────────────────
function createParticles() {
    const container = document.getElementById('particles-js');
    if (!container) return;

    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 4 + 2}px;
            height: ${p.style.width};
            animation-delay: ${Math.random() * 10}s;
            animation-duration: ${Math.random() * 10 + 10}s;
        `;
        container.appendChild(p);
    }
}

// ─── Success Overlay ──────────────────────────────────
function closeSuccessOverlay() {
    const overlay = document.getElementById('success-overlay');
    if (overlay) overlay.classList.remove('active');
}

// ─── Smooth Scroll (Anchor links) ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
