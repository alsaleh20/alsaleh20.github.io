// app.js - Portfolio Logic, i18n, and Chat Assistant

// --- 1. LANGUAGE AND STRINGS (i18n) ---
const translations = {
    ar: {
        site_title: "رناد الكلوب - أخصائية اجتماعية",
        hero_name: "رناد الكلوب",
        hero_role: "أخصائية اجتماعية",
        btn_consult: "ابدأ استشارتك",
        btn_cv: "عرض السيرة الذاتية",
        sec_about: "من أنا",
        txt_about: "طالبة بكالوريوس في الخدمة الاجتماعية في جامعة البلقاء التطبيقية، شغوفة بالعمل المجتمعي وتمكين الأفراد، وأسعى لإحداث أثر إيجابي من خلال العمل التطوعي والتدريب والتطوير المستمر.",
        sec_edu: "التعليم",
        edu_uni: "جامعة البلقاء التطبيقية",
        edu_deg: "بكالوريوس خدمة اجتماعية",
        sec_exp: "الخبرات والتطوع",
        exp_1: "مبادرة بادر ونحن معك",
        exp_1_ig: "انستغرام المبادرة",
        exp_1_nahno: "صفحة المبادرة على نحن",
        exp_2: "سفيرة ومتطوعة (700+ ساعة)",
        exp_3: "تدريب بالصحة النفسية لـ 40 شاب وشابة",
        exp_4: "مدربة برنامج داخل جامعة البلقاء",
        exp_5: "تطوع مع منظمة iDare",
        exp_6: "تسويق لوجستي",
        exp_7: "تسجيل كتب صوتية لمكفوفين",
        exp_8: "فعاليات وطنية ومجتمعية",
        sec_skills: "المهارات",
        sk_1: "إدارة الوقت",
        sk_2: "العمل تحت الضغط",
        sk_3: "التواصل الفعال",
        sk_4: "القيادة",
        sk_5: "العمل الجماعي",
        sk_6: "استخدام التكنولوجيا",
        sk_7: "الإبداع وحل المشكلات",
        sec_langs: "اللغات",
        lang_ar: "العربية (ممتاز)",
        lang_en: "الإنجليزية (جيد)",
        lang_tr: "التركية (جيد)",
        lang_de: "الألمانية (جيد)",
        sec_contact: "تواصل معي",
        chat_title: "المساعد الذكي",
        chat_placeholder: "اكتب ردك هنا...",
        sec_services: "الخدمات",
        srv_1_title: "الاستشارات الفردية",
        srv_1_desc: "تقديم الدعم والمشورة للحالات الفردية لفهم التحديات وإيجاد حلول فعالة.",
        srv_2_title: "إدارة الحالات",
        srv_2_desc: "المتابعة المستمرة للحالات لضمان استقرارها وتحقيق أهداف الخطة العلاجية.",
        srv_3_title: "التدريب وورش العمل",
        srv_3_desc: "تقديم جلسات توعوية وتدريبية لتعزيز الصحة النفسية وتطوير المهارات المجتمعية.",
        sec_certs: "الدورات والشهادات",
        cert_1: "تطبيقات الذكاء الاصطناعي وبناء السيرة الذاتية (أكاديمية طلال أبو غزالة)",
        cert_2: "دورة TOT (تدريب المدربين)",
        cert_3: "دورة إدارة المشاريع المجتمعية",
        sec_testimonials: "آراء المستفيدين",
        test_1_txt: "رناد تتميز بشغفها الكبير واحترافيتها العالية في التعامل، وكان لها أثر واضح في مبادراتنا.",
        test_1_author: "- زميل متطوع",
        test_2_txt: "التدريب كان ملهماً جداً، أسلوب رناد في إيصال المعلومات سلس ومؤثر.",
        test_2_author: "- متدرب في ورشة العمل",
        sec_blog: "مقطوفات ونصائح",
        blog_1_title: "أهمية الصحة النفسية للشباب",
        blog_1_desc: "خطوات بسيطة يومية تساعد في الحفاظ على التوازن النفسي في ظل ضغوط الدراسة والعمل.",
        blog_2_title: "العمل التطوعي وتطوير الذات",
        blog_2_desc: "كيف يمكن للتطوع أن يصقل مهاراتك الشخصية ويفتح لك آفاقاً مهنية جديدة.",
        toggle_btn: "English",
        dev_credit: "تم تطوير هذه الصفحة من قبل",
        profile_alt: "رناد الكلوب - أخصائية اجتماعية",

        // Chat specific strings
        chat_err_req: "هذا الحقل مطلوب، يرجى ملء الفراغ.",
        chat_err_val: "صيغة غير صحيحة. يرجى إدخال قيمة صحيحة.",
        chat_limit: "عذراً، لقد تجاوزت الحد المسموح به للمحاولات. يرجى المحاولة لاحقاً.",
        chat_sending: "جاري إرسال الطلب، يرجى الانتظار...",
        chat_success: "تم استلام طلبك بنجاح، سيتم التواصل معك قريباً.",
        chat_ref: "رقم المرجع الخاص بك:",
        chat_fail: "حدث خطأ أثناء الإرسال. قد يكون رابط Webhook غير مفعل بعد.",
        chat_skip: "التخطي"
    },
    en: {
        site_title: "Renad Al-Kloub - Social Worker",
        hero_name: "Renad Al-Kloub",
        hero_role: "Social Worker",
        btn_consult: "Start Consultation",
        btn_cv: "View CV",
        sec_about: "About Me",
        txt_about: "Bachelor's student in Social Work at Al-Balqa Applied University, passionate about community work and individual empowerment, striving to make a positive impact through volunteering, training, and continuous development.",
        sec_edu: "Education",
        edu_uni: "Al-Balqa Applied University",
        edu_deg: "Bachelor of Social Work",
        sec_exp: "Experience & Volunteering",
        exp_1: "Initiate & We Are With You Initiative",
        exp_1_ig: "Initiative Instagram",
        exp_1_nahno: "Initiative Nahno Page",
        exp_2: "Ambassador & Volunteer (700+ Hours)",
        exp_3: "Mental Health Training for 40 youths",
        exp_4: "Program Trainer at Al-Balqa University",
        exp_5: "Volunteer with iDare Organization",
        exp_6: "Logistics Marketing",
        exp_7: "Recording audiobooks for the blind",
        exp_8: "National and community events",
        sec_skills: "Skills",
        sk_1: "Time Management",
        sk_2: "Working Under Pressure",
        sk_3: "Effective Communication",
        sk_4: "Leadership",
        sk_5: "Teamwork",
        sk_6: "Modern Tech Proficiency",
        sk_7: "Creativity & Problem Solving",
        sec_langs: "Languages",
        lang_ar: "Arabic (Excellent)",
        lang_en: "English (Good)",
        lang_tr: "Turkish (Good)",
        lang_de: "German (Good)",
        sec_contact: "Contact Me",
        chat_title: "Smart Assistant",
        chat_placeholder: "Type your reply here...",
        sec_services: "Services",
        srv_1_title: "Individual Consultations",
        srv_1_desc: "Providing support and counseling to understand challenges and find effective solutions.",
        srv_2_title: "Case Management",
        srv_2_desc: "Continuous follow-up of cases to ensure stability and achieve the goals.",
        srv_3_title: "Training & Workshops",
        srv_3_desc: "Delivering awareness sessions to promote mental health and community skills.",
        sec_certs: "Certifications",
        cert_1: "AI Applications & CV Building (Talal Abu-Ghazaleh Academy)",
        cert_2: "Training of Trainers (TOT)",
        cert_3: "Community Project Management Course",
        sec_testimonials: "Testimonials",
        test_1_txt: "Renad stands out with her great passion and high professionalism. She had a clear impact on our initiatives.",
        test_1_author: "- Volunteer Colleague",
        test_2_txt: "The training was very inspiring, Renad's style in delivering information is smooth and impactful.",
        test_2_author: "- Workshop Trainee",
        sec_blog: "Tips & Articles",
        blog_1_title: "Importance of Mental Health for Youth",
        blog_1_desc: "Simple daily steps that help maintain psychological balance amidst pressures.",
        blog_2_title: "Volunteering & Self Development",
        blog_2_desc: "How volunteering can refine your personal skills and open new career horizons.",
        toggle_btn: "Turkish",
        dev_credit: "Developed by",
        profile_alt: "Renad Al-Kloub - Social Worker",

        // Chat specific strings
        chat_err_req: "This field is required. Please fill it out.",
        chat_err_val: "Invalid format. Please enter a valid value.",
        chat_limit: "Sorry, you've exceeded the maximum submission limit. Try again later.",
        chat_sending: "Sending request, please wait...",
        chat_success: "Your request was received successfully, we will contact you soon.",
        chat_ref: "Your Reference ID:",
        chat_fail: "An error occurred while sending. The webhook might not be active yet.",
        chat_skip: "Skip"
    },
    tr: {
        site_title: "Renad Al-Kloub - Sosyal Hizmet Uzmanı",
        hero_name: "Renad Al-Kloub",
        hero_role: "Sosyal Hizmet Uzmanı",
        btn_consult: "Danışmanlığa Başla",
        btn_cv: "Özgeçmişi Görüntüle",
        sec_about: "Hakkımda",
        txt_about: "Al-Balqa Uygulamalı Üniversitesi Sosyal Hizmet Lisans öğrencisiyim, toplum çalışması ve bireysel güçlendirme tutkumla gönüllülük, eğitim ve sürekli gelişim yoluyla olumlu bir etki yaratmayı hedefliyorum.",
        sec_edu: "Eğitim",
        edu_uni: "Al-Balqa Uygulamalı Üniversitesi",
        edu_deg: "Sosyal Hizmet Lisansı",
        sec_exp: "Deneyim ve Gönüllülük",
        exp_1: "Bader ve Biz Seninleyiz Girişimi",
        exp_1_ig: "Girişim Instagramı",
        exp_1_nahno: "Girişim Nahno Sayfası",
        exp_2: "Elçi ve Gönüllü (700+ Saat)",
        exp_3: "40 genç için Ruh Sağlığı Eğitimi",
        exp_4: "Al-Balqa Üniversitesi'nde Program Eğitmeni",
        exp_5: "iDare Organizasyonu ile Gönüllü",
        exp_6: "Lojistik Pazarlama",
        exp_7: "Görme engelliler için sesli kitap kaydı",
        exp_8: "Ulusal ve toplumsal etkinlikler",
        sec_skills: "Yetenekler",
        sk_1: "Zaman Yönetimi",
        sk_2: "Baskı Altında Çalışma",
        sk_3: "Etkili İletişim",
        sk_4: "Liderlik",
        sk_5: "Takım Çalışması",
        sk_6: "Modern Teknoloji Yetkinliği",
        sk_7: "Yaratıcılık ve Çözüm Odaklılık",
        sec_langs: "Diller",
        lang_ar: "Arapça (Mükemmel)",
        lang_en: "İngilizce (İyi)",
        lang_tr: "Türkçe (İyi)",
        lang_de: "Almanca (İyi)",
        sec_contact: "Benimle İletişime Geçin",
        chat_title: "Akıllı Asistan",
        chat_placeholder: "Cevabınızı buraya yazın...",
        sec_services: "Hizmetler",
        srv_1_title: "Bireysel Danışmanlık",
        srv_1_desc: "Zorlukları anlamak ve etkili çözümler bulmak için destek ve danışmanlık sağlamak.",
        srv_2_title: "Vaka Yönetimi",
        srv_2_desc: "İstikrarı sağlamak ve hedeflere ulaşmak için vakaların sürekli takibi.",
        srv_3_title: "Eğitim ve Atölye Çalışmaları",
        srv_3_desc: "Ruh sağlığını ve topluluk becerilerini geliştirmek için farkındalık oturumları düzenlemek.",
        sec_certs: "Sertifikalar",
        cert_1: "Yapay Zeka Uygulamaları ve CV Oluşturma (Talal Abu-Ghazaleh Akademisi)",
        cert_2: "Eğiticilerin Eğitimi (TOT)",
        cert_3: "Toplum Proje Yönetimi Kursu",
        sec_testimonials: "Referanslar",
        test_1_txt: "Renad, büyük tutkusu ve yüksek profesyonelliği ile öne çıkıyor. Girişimlerimiz üzerinde net bir etkisi oldu.",
        test_1_author: "- Gönüllü İş Arkadaşı",
        test_2_txt: "Eğitim çok ilham vericiydi, Renad'ın bilgi aktarma tarzı akıcı ve etkileyici.",
        test_2_author: "- Atölye Katılımcısı",
        sec_blog: "İpuçları ve Makaleler",
        blog_1_title: "Gençler İçin Ruh Sağlığının Önemi",
        blog_1_desc: "Baskılar arasında psikolojik dengeyi korumaya yardımcı olacak basit günlük adımlar.",
        blog_2_title: "Gönüllülük ve Kişisel Gelişim",
        blog_2_desc: "Gönüllülüğün kişisel becerilerinizi nasıl geliştirebileceği ve yeni kariyer ufukları açabileceği.",
        toggle_btn: "German",
        dev_credit: "Tarafından geliştirildi",
        profile_alt: "Renad Al-Kloub - Sosyal Hizmet Uzmanı",
        chat_err_req: "Bu alan zorunludur. Lütfen doldurun.",
        chat_err_val: "Geçersiz biçim. Lütfen geçerli bir değer girin.",
        chat_limit: "Üzgünüz, maksimum gönderim sınırını aştınız. Daha sonra tekrar deneyin.",
        chat_sending: "İstek gönderiliyor, lütfen bekleyin...",
        chat_success: "Talebiniz başarıyla alındı, en kısa sürede sizinle iletişime geçeceğiz.",
        chat_ref: "Referans Numaranız:",
        chat_fail: "Gönderilirken bir hata oluştu. Webhook henüz aktif olmayabilir.",
        chat_skip: "Atla"
    },
    de: {
        site_title: "Renad Al-Kloub - Sozialarbeiterin",
        hero_name: "Renad Al-Kloub",
        hero_role: "Sozialarbeiterin",
        btn_consult: "Beratung starten",
        btn_cv: "Lebenslauf anzeigen",
        sec_about: "Über mich",
        txt_about: "Bachelor-Studentin der Sozialen Arbeit an der Al-Balqa Applied University, leidenschaftlich in der Gemeindearbeit und der individuellen Befähigung, mit dem Ziel, durch Freiwilligenarbeit, Ausbildung und kontinuierliche Weiterentwicklung eine positive Wirkung zu erzielen.",
        sec_edu: "Bildung",
        edu_uni: "Al-Balqa Applied University",
        edu_deg: "Bachelor der Sozialen Arbeit",
        sec_exp: "Erfahrung & Freiwilligenarbeit",
        exp_1: "Initiative 'Bader und wir sind bei dir'",
        exp_1_ig: "Initiative Instagram",
        exp_1_nahno: "Initiative Nahno-Seite",
        exp_2: "Botschafterin & Freiwillige (700+ Stunden)",
        exp_3: "Psychologische Gesundheitsschulung für 40 Jugendliche",
        exp_4: "Programm-Trainerin an der Al-Balqa Universität",
        exp_5: "Freiwillige bei der Organisation iDare",
        exp_6: "Logistik-Marketing",
        exp_7: "Aufnahme von Hörbüchern für Blinde",
        exp_8: "Nationale und gesellschaftliche Veranstaltungen",
        sec_skills: "Fähigkeiten",
        sk_1: "Zeitmanagement",
        sk_2: "Arbeiten unter Druck",
        sk_3: "Effektive Kommunikation",
        sk_4: "Führung",
        sk_5: "Teamarbeit",
        sk_6: "Moderne Technologiekenntnisse",
        sk_7: "Kreativität & Problemlösung",
        sec_langs: "Sprachen",
        lang_ar: "Arabisch (Exzellent)",
        lang_en: "Englisch (Gut)",
        lang_tr: "Türkisch (Gut)",
        lang_de: "Deutsch (Gut)",
        sec_contact: "Kontaktiere mich",
        chat_title: "Intelligenter Assistent",
        chat_placeholder: "Schreibe deine Antwort hier...",
        sec_services: "Dienstleistungen",
        srv_1_title: "Einzelberatungen",
        srv_1_desc: "Unterstützung und Beratung, um Herausforderungen zu verstehen und effektive Lösungen zu finden.",
        srv_2_title: "Fallmanagement",
        srv_2_desc: "Kontinuierliche Begleitung von Fällen, um Stabilität zu gewährleisten und Ziele zu erreichen.",
        srv_3_title: "Schulungen & Workshops",
        srv_3_desc: "Durchführung von Sensibilisierungssitzungen zur Förderung der psychischen Gesundheit.",
        sec_certs: "Zertifikate",
        cert_1: "KI-Anwendungen & CV-Erstellung (Talal Abu-Ghazaleh Academy)",
        cert_2: "Ausbildung der Ausbilder (TOT)",
        cert_3: "Kurs für Community-Projektmanagement",
        sec_testimonials: "Referenzen",
        test_1_txt: "Renad zeichnet sich durch ihre große Leidenschaft und hohe Professionalität aus. Sie hatte einen klaren Einfluss.",
        test_1_author: "- Freiwilliger Kollege",
        test_2_txt: "Das Training war sehr inspirierend, Renads Stil bei der Vermittlung von Informationen ist flüssig.",
        test_2_author: "- Workshop-Teilnehmer",
        sec_blog: "Tipps & Artikel",
        blog_1_title: "Bedeutung der psychischen Gesundheit für die Jugend",
        blog_1_desc: "Einfache tägliche Schritte, die helfen, das psychische Gleichgewicht unter Druck zu halten.",
        blog_2_title: "Freiwilligenarbeit & Selbstentwicklung",
        blog_2_desc: "Wie Freiwilligenarbeit Ihre persönlichen Fähigkeiten verfeinern und neue Karrierehorizonte eröffnen kann.",
        toggle_btn: "العربية",
        dev_credit: "Entwickelt von",
        profile_alt: "Renad Al-Kloub - Sozialarbeiterin",
        chat_err_req: "Dieses Feld ist erforderlich. Bitte ausfüllen.",
        chat_err_val: "Ungültiges Format. Bitte geben Sie einen gültigen Wert ein.",
        chat_limit: "Entschuldigung, Sie haben das Limit überschritten. Versuchen Sie es später erneut.",
        chat_sending: "Anfrage wird gesendet, bitte warten...",
        chat_success: "Ihre Anfrage wurde erfolgreich empfangen, wir werden Sie bald kontaktieren.",
        chat_ref: "Ihre Referenz-ID:",
        chat_fail: "Fehler beim Senden. Der Webhook ist möglicherweise noch nicht aktiv.",
        chat_skip: "Überspringen"
    }
};

let currentLang = localStorage.getItem('siteLang') || 'ar'; // Default Arabic

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('siteLang', lang);

    // Apply HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update texts in DOM
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Update Placeholder explicitly
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update Alt texts
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('alt', translations[lang][key]);
        }
    });

    // Update Active Button State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Refresh chat sequence if it's already running
    if (typeof chatState !== 'undefined' && chatState.isOpen) {
        resetChat();
        openChat();
    }
}

// --- 1.5 THEME TOGGLE (Dark/Light) ---
let currentTheme = localStorage.getItem('siteTheme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('siteTheme', theme);
    const themeIcon = document.getElementById('theme-icon');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) {
            // Sun icon for light mode toggle
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeIcon) {
            // Moon icon for dark mode toggle
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    setTheme(currentTheme);
});


// --- 2. UUID GENERATOR ---
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// --- 3. CHAT STATE & DEFINITIONS ---
const chatState = {
    isOpen: false,
    currentStep: 0,
    referenceId: generateUUID(),
    clientData: { name: "", email: "", phone: "", location: "" },
    requestData: { description: "", budget: "", timeline: "" },
    conversationLog: [],
    isSubmitting: false
}

// Function to get translated steps dynamically
function getSteps(lang) {
    if (lang === 'ar') {
        return [
            { key: "name", question: "مرحباً بك، يسعدني مساعدتك. دعنا نبدأ ببعض المعلومات. ما هو اسمك الكريم؟", required: true, type: "client" },
            { key: "email", question: "أهلاً بك. يرجى إدخال بريدك الإلكتروني للتواصل:", required: true, type: "client", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { key: "phone", question: "رقم هاتفك (مع رمز البلد إذا أمكن):", required: true, type: "client" },
            { key: "location", question: "مكان الإقامة (البلد والمدينة):", required: true, type: "client" },
            { key: "description", question: "يرجى وصف طلبك أو تفاصيل الاستشارة التي ترغب بها:", required: true, type: "request" },
            { key: "budget", question: "(اختياري) هل لديك ميزانية محددة لهذه الاستشارة للاعتبار؟ يمكنك كتابة 'لا' للتخطي.", required: false, type: "request" },
            { key: "timeline", question: "(اختياري) متى ترغب في البدء؟ (مثال: خلال أسبوع، لاحقاً). اكتب 'لا' للتخطي.", required: false, type: "request" }
        ];
    } else if (lang === 'tr') {
        return [
            { key: "name", question: "Merhaba, size yardımcı olmaktan mutluluk duyarım. Bazı bilgilerle başlayalım. Adınız nedir?", required: true, type: "client" },
            { key: "email", question: "Hoş geldiniz. Sizinle iletişime geçebilmemiz için lütfen e-posta adresinizi girin:", required: true, type: "client", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { key: "phone", question: "Telefon numaranız (varsa ülke koduyla birlikte):", required: true, type: "client" },
            { key: "location", question: "Yaşadığınız yer (Ülke ve Şehir):", required: true, type: "client" },
            { key: "description", question: "Lütfen talebinizi veya istediğiniz danışmanlık detaylarını açıklayın:", required: true, type: "request" },
            { key: "budget", question: "(İsteğe bağlı) Bu danışmanlık için aklınızda belirli bir bütçe var mı? Atlamak için 'Hayır' yazabilirsiniz.", required: false, type: "request" },
            { key: "timeline", question: "(İsteğe bağlı) Ne zaman başlamak istersiniz? (Örn: Gelecek hafta, Daha sonra). Atlamak için 'Hayır' yazabilirsiniz.", required: false, type: "request" }
        ];
    } else if (lang === 'de') {
        return [
            { key: "name", question: "Willkommen, ich freue mich, Ihnen zu helfen. Lassen Sie uns mit einigen Infos beginnen. Wie ist Ihr Name?", required: true, type: "client" },
            { key: "email", question: "Hallo. Bitte geben Sie Ihre E-Mail-Adresse ein, damit wir Sie kontaktieren können:", required: true, type: "client", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { key: "phone", question: "Ihre Telefonnummer (wenn möglich mit Landesvorwahl):", required: true, type: "client" },
            { key: "location", question: "Wohnort (Land und Stadt):", required: true, type: "client" },
            { key: "description", question: "Bitte beschreiben Sie Ihre Anfrage oder die Details der gewünschten Beratung:", required: true, type: "request" },
            { key: "budget", question: "(Optional) Haben Sie ein bestimmtes Budget für diese Beratung im Sinn? Schreiben Sie 'Nein' zum Überspringen.", required: false, type: "request" },
            { key: "timeline", question: "(Optional) Wann möchten Sie beginnen? (z.B. Nächste Woche, Später). Schreiben Sie 'Nein' zum Überspringen.", required: false, type: "request" }
        ];
    } else {
        return [
            { key: "name", question: "Welcome, I am happy to help you. Let's start with some info. What is your full name?", required: true, type: "client" },
            { key: "email", question: "Hello. Please enter your email address to contact you:", required: true, type: "client", validation: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            { key: "phone", question: "Your phone number (with country code if possible):", required: true, type: "client" },
            { key: "location", question: "Location (Country and City):", required: true, type: "client" },
            { key: "description", question: "Please describe your request or the consultation details:", required: true, type: "request" },
            { key: "budget", question: "(Optional) Do you have a specific budget in mind? You can write 'No' to skip.", required: false, type: "request" },
            { key: "timeline", question: "(Optional) When do you want to start? (e.g. Next week, Later). Write 'No' to skip.", required: false, type: "request" }
        ];
    }
}

const SUBMIT_API_URL = "/api/submit";

const chatWidget = document.getElementById('chat-widget');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSubmitBtn = document.getElementById('chat-submit');


// --- 4. SEC. & UTILS ---
function stripHtmlTags(str) {
    if (!str) return "";
    return str.replace(/<\/?[^>]+(>|$)/g, "").trim();
}

function rateLimitCheck() {
    const now = Date.now();
    const limitData = JSON.parse(localStorage.getItem('formSubmits') || '{"count": 0, "firstSubmit": 0}');

    if (now - limitData.firstSubmit > 600000) {
        limitData.count = 0;
        limitData.firstSubmit = now;
    }
    if (limitData.count >= 5) {
        return false;
    }
    limitData.count++;
    localStorage.setItem('formSubmits', JSON.stringify(limitData));
    return true;
}


// --- 5. CHAT FUNCTIONS ---
function openChat() {
    chatWidget.classList.remove('hidden');
    chatState.isOpen = true;

    if (chatState.currentStep === 0 && chatState.conversationLog.length === 0) {
        setTimeout(() => askNextQuestion(), 300);
    }
    chatInput.focus();
}

function closeChat() {
    chatWidget.classList.add('hidden');
    chatState.isOpen = false;
}

function addMessageToUI(message, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender);
    msgDiv.textContent = message;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function logConversation(sender, message) {
    chatState.conversationLog.push({
        sender: sender,
        message: message,
        timestamp: new Date().toISOString()
    });
}

function handleChatSubmit(event) {
    event.preventDefault();
    if (chatState.isSubmitting) return;

    let rawVal = chatInput.value;
    let val = stripHtmlTags(rawVal);
    const stepsLang = getSteps(currentLang);
    const t = translations[currentLang];

    if (!val && stepsLang[chatState.currentStep]?.required) {
        chatInput.classList.add('shake');
        setTimeout(() => chatInput.classList.remove('shake'), 500);
        return;
    }
    if (!val && !stepsLang[chatState.currentStep]?.required) {
        val = t.chat_skip; // fallback
    }

    const currentStepDef = stepsLang[chatState.currentStep];

    if (currentStepDef && currentStepDef.validation) {
        if (!currentStepDef.validation.test(val)) {
            addMessageToUI(t.chat_err_val, 'system');
            return;
        }
    }

    // Accept Answer
    addMessageToUI(val, 'user');
    logConversation('user', val);
    chatInput.value = '';

    // Save Data
    if (currentStepDef) {
        if (currentStepDef.type === "client") {
            chatState.clientData[currentStepDef.key] = val;
        } else if (currentStepDef.type === "request") {
            chatState.requestData[currentStepDef.key] = val;
        }
    }

    // Move to next step
    chatState.currentStep++;

    if (chatState.currentStep >= stepsLang.length) {
        finishAndSubmit();
    } else {
        setTimeout(askNextQuestion, 500);
    }
}

function askNextQuestion() {
    const stepsLang = getSteps(currentLang);
    const nextQ = stepsLang[chatState.currentStep].question;
    addMessageToUI(nextQ, 'bot');
    logConversation('bot', nextQ);
}

async function finishAndSubmit() {
    const t = translations[currentLang];

    if (!rateLimitCheck()) {
        addMessageToUI(t.chat_limit, 'system');
        return;
    }

    chatInput.disabled = true;
    chatSubmitBtn.disabled = true;
    chatState.isSubmitting = true;

    addMessageToUI(t.chat_sending, 'system');

    const payload = {
        _id: generateUUID(),
        reference_id: chatState.referenceId,
        client: chatState.clientData,
        request: chatState.requestData,
        conversation: chatState.conversationLog,
        status: 'new', // new, read, done
        source: "website",
        language: currentLang,
        created_at: new Date().toISOString()
    };

    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (response.ok && result.success) {
            addMessageToUI(t.chat_success, 'bot');
            addMessageToUI(`${t.chat_ref} ${chatState.referenceId}`, 'system');
            setTimeout(resetChat, 10000);
        } else {
            throw new Error(result.error || `HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Submit Error:", error);
        addMessageToUI(t.chat_fail, 'system');
        setTimeout(resetChat, 6000);
    } finally {
        chatInput.disabled = false;
        chatSubmitBtn.disabled = false;
        chatState.isSubmitting = false;
    }
}

function resetChat() {
    chatMessages.innerHTML = "";
    chatState.currentStep = 0;
    chatState.referenceId = generateUUID();
    chatState.conversationLog = [];
    chatState.clientData = { name: "", email: "", phone: "", location: "" };
    chatState.requestData = { description: "", budget: "", timeline: "" };
    closeChat();
}

// Ensure smooth image fallback if missing
document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById('profile-img');
    if (img) {
        img.onerror = function () {
            this.style.display = "none";
            // Check if parent has a fallback icon, if not add one
            if (!this.parentElement.querySelector('.avatar-fallback')) {
                const fallback = document.createElement('div');
                fallback.className = 'avatar-fallback';
                fallback.innerHTML = '<svg viewBox="0 0 24 24" width="60" height="60" stroke="var(--primary-color)" stroke-width="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                this.parentElement.appendChild(fallback);
            }
        };
    }

    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // optional: animate only once
            }
        });
    }, observerOptions);

    // Select all sections that should animate
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});

