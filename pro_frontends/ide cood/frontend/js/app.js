// --- hiary cood Interactive Logic ---

// 1. Language Support (En/Ar)
const translations = {
    en: {
        title: "hiary cood",
        subtitle: "Sign in to your isolated workspace",
        username: "Username / Email",
        password: "Password",
        login: "Launch Workspace 🚀",
        error: "Login failed. Check credentials."
    },
    ar: {
        title: "إيثر-كود",
        subtitle: "سجل الدخول لمساحة عملك المعزولة",
        username: "اسم المستخدم / البريد الإلكتروني",
        password: "كلمة المرور",
        login: "إطلاق مساحة العمل 🚀",
        error: "فشل تسجيل الدخول. تأكد من البيانات."
    }
};

let currentLang = 'en';
const langToggle = document.getElementById('langToggle');

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = translations[lang][el.getAttribute('data-i18n')];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = translations[lang][el.getAttribute('data-i18n-placeholder')];
    });

    langToggle.innerText = lang === 'en' ? 'عربي' : 'English';
}

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    updateLanguage(currentLang);
});

// 2. Spatial Hover Effects (Vanilla JavaScript)
const authCard = document.getElementById('authCard');
if (authCard) {
    document.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        authCard.style.transform = `translateZ(50px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    // Reset on leave
    document.addEventListener('mouseleave', () => {
        authCard.style.transform = `translateZ(50px) rotateY(0deg) rotateX(0deg)`;
    });
}

// 3. Login API Call (Native Fetch)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('errorMsg');
        const loginBtn = document.getElementById('loginBtn');

        errorMsg.style.display = 'none';
        loginBtn.innerHTML = '<span style="animation: spin 1s linear infinite;">⏳</span> Loading...';

        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (res.ok) {
                // Save Token and Redirect
                localStorage.setItem('aether_token', data.token);
                loginBtn.style.backgroundColor = '#28a745'; // Success green
                loginBtn.innerHTML = 'Success! Redirecting...';

                setTimeout(() => {
                    window.location.href = '/dashboard.html';
                }, 1000);
            } else {
                throw new Error("Authentication Failed");
            }
        } catch (err) {
            errorMsg.innerText = translations[currentLang].error;
            errorMsg.style.display = 'block';
            loginBtn.innerHTML = translations[currentLang].login;
        }
    });
}
