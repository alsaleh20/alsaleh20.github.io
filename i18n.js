/* ============================================================
   Portfolio i18n (Bilingual Arabic / English System)
   ============================================================ */

const translations = {
  ar: {
    pageTitle: "الصفحة الشخصية والمشاريع - الصالح حياري",
    name: "الصالح أحمد الحياري",
    location: "الأردن 🇯🇴",
    bio: '"إدارة سيرفرات | أتمتة n8n | تطوير ويب"',
    
    // Quick Icons & vCard
    vcardBtn: "📇 حفظ الكرت بالهاتف (.vcf)",
    qrBtn: "📱 QR Code",
    
    // Sidebar Links
    linkCreations: "🎨 إبداعات مختارة",
    linkAllProjects: "🚀 جميع المشاريع والأعمال",
    
    // WhatsApp Inquiry Box
    waTitle: "طلب خدمة سريع عبر WhatsApp 💬",
    waServiceLabel: "الخدمة المطلوبة:",
    waPhoneLabel: "الرقم المفصل للتواصل:",
    waTimelineLabel: "الإطار الزمني المتوقع:",
    waDetailsLabel: "تفاصيل أو وصف مختصر للمشروع:",
    waDetailsPlaceholder: "أكتب هنا ملخص الفكرة...",
    waSubmitBtn: "إرسال الطلب عبر WhatsApp الآن",
    
    // WhatsApp Form Options
    waOptService1: "⚡ أتمتة المهام والعمليات (n8n Automations)",
    waOptService2: "🖥️ تجهيز وإدارة السيرفرات (Linux Server Setup & Management)",
    waOptService3: "🌐 تطوير موقع ويب إلكتروني (Web Development)",
    waOptService4: "🔗 ربط وتكامل API (API Integration & Webhooks)",
    waOptService5: "💡 استشارة تقنية شاملة (Technical Consultation)",
    
    waOptTimeline1: "⚡ عاجل (خلال 24-48 ساعة)",
    waOptTimeline2: "📅 خلال أسبوع",
    waOptTimeline3: "⏳ مرن / حسب حجم المشروع",
    
    // About Me
    aboutTitle: "نبذة عني",
    aboutText: 'أنا <strong>الصالح أحمد الحياري</strong>، أعمل في مجال إدارة وتجهيز السيرفرات، وبناء أتمتة للمهام والعمليات باستخدام <strong>n8n</strong>، بالإضافة لتطوير مواقع الويب. أركز على تقديم حلول عملية ومباشرة تساعد في تنظيم العمل وتسهيل الربط بين الخدمات.',
    skillServer: "إدارة سيرفرات",
    skillWeb: "تطوير ويب",
    
    // GitHub Section
    githubTitle: "مشاريعي على GitHub",
    viewAllGithubBtn: "🚀 عرض جميع المشاريع صفحة مستقلة",
    loadingProjects: "جاري تحميل المشاريع...",
    noProjects: "لا توجد مشاريع عامة حالياً.",
    
    // Developed Websites Section
    websitesTitle: "مواقع قمت بتطويرها",
    descPureTouch: "موقع شركة Pure Touch Plus المتخصصة في خدمات التنظيف والتعقيم الاحترافية الشاملة.",
    descSaltTime: "موقع إخباري مخصص لنشر أخبار مدينة السلط والمملكة الأردنية الهاشمية.",
    
    // CLI Terminal
    cliTitle: "my CLI",
    cliDesc: 'واجهة تفاعلية لاستكشاف مشاريعي ومهاراتي في الأتمتة وإدارة السيرفرات. اكتب <code dir="ltr">help</code> للبدء.',
    cliWelcome: "مرحباً بك في نظام الصالح حياري! اكتب 'help' للبدء.",
    cliExpandBtn: "⛶ تكبير الشاشة",
    
    // Server CLI
    serverCliDesc: 'تيرمينال إدارة السيرفرات المتقدمة (Server Management Node). اكتب <code dir="ltr">help</code> لرؤية أوامر السيرفر.',
    serverCliWelcome: "[SERVER NODE CONNECTED] أهلاً بك في تيرمينال إدارة السيرفرات (Server CLI)!",
    
    // n8n Section
    n8nTitle: "أحدث أتمتة وسير العمل (n8n)",
    loadingN8n: "جاري تحميل أتمتة n8n...",
    noN8n: "لا توجد أتمتة نشطة حالياً.",
    n8nActive: "نشط",
    n8nInactive: "غير نشط",
    n8nDownload: "📥 تحميل JSON",
    
    // Side Projects Section
    sideProjectsTitle: "مشاريع جانبية",
    descAshraf: "خبير الإعلام الرقمي وتطوير المحتوى الصحفي والإخباري.",
    descRaad: "مدير عمليات وضيافة. استعراض الخبرات العملية والمهارات القيادية.",
    descEhab: "استعراض السيرة الذاتية المهنية والمشاريع المنجزة.",
    descRenad: "أخصائية اجتماعية. تمكين الأفراد والعمل المجتمعي والتمكين الشبابي.",
    descEman: "أستاذ مساعد في كلية الحقوق. مسيرة أكاديمية وبحثية وقانونية حافلة.",
    descAya: "استعراض السيرة الذاتية والمهارات التدريبية والأكاديمية.",
    descOmar: "عرض السيرة الذاتية والمهارات بتصميم مبسط وفعال.",
    
    // Random Creations Section
    randomTitle: "إبداعات عشوائية 🎨",
    descFahm: "موقع تفاعلي متكامل لمطعم فحم ولحم (قائمة الطعام، الفروع، والطلبات).",
    descAlis: "موقع وتطبيق ويب لمطعم عليز (فرع أبو نصير) - وجبات البروستد والشاورما والبرجر.",
    descArmy: "موقع تفاعلي بطابع عسكري تكتيكي لمطعم آرمي برقر (Army Burger) في عمان.",
    descSushi: "موقع فاخر لمطعم فودو سوشي (Fugu Sushi) تجربة السوشي الياباني في عمان.",
    descGolden: "تطبيق وجبات طعام وتصميم واجهة تفاعلية.",
    descZO1: "تصميم واجهة المنصة التعليمية والأكاديمية.",
    descIDE: "واجهة بيئة تطوير برمجية كود ومحرر نصوص.",
    descPayflow: "مشروع إدارة وتسهيل عمليات الدفع والتدفق المالي (PayFlow).",
    livePreview: "🌐 معاينة مباشرة",
    
    // Automation ROI Calculator
    roiTitle: "حاسبة توفير الوقت والمال بالأتمتة 🧮",
    roiDesc: "احسب كم من الوقت والمبالغ المالية يمكنك توفيرها شهرياً عند تحويل المهام الروتينية إلى أتمتة ذكية باستخدام n8n:",
    roiEmployeesLabel: "عدد الموظفين / فريق العمل:",
    roiHoursLabel: "ساعات المهام اليدوية يومياً (لكل شخص):",
    roiRateLabel: "متوسط أجر الساعة التقديري ($):",
    roiSavedHoursLabel: "الوقت الموفر شهرياً:",
    roiSavedMoneyLabel: "التوفير المالي الشهري:",
    hoursUnit: "ساعة ⏳",
    moneyUnit: "دولار 💰",
    
    // All Projects Page Specific
    allProjectsPageTitle: "جميع المشاريع والأعمال - الصالح حياري",
    allProjectsHeaderTitle: "🚀 جميع المشاريع والأعمال",
    allProjectsHeaderSub: "استكشف مستودعات GitHub، أتمتات n8n، المواقع الإلكترونية، والمشاريع الجانبية في مكان واحد.",
    backHomeBtn: "🏠 الصفحة الرئيسية",
    searchPlaceholder: "🔍 ابحث باسم المشروع أو الكلمات المفتاحية...",
    
    // Category Tabs
    catAll: "🌐 الكل",
    catGithub: "💻 مشاريع GitHub",
    catN8n: "⚡ أتمتة n8n",
    catWebsites: "🌐 مواقع إلكترونية",
    catSide: "👤 مشاريع جانبية",
    catCreations: "🎨 إبداعات عشوائية",
    
    // Footer
    footerRights: "جميع الحقوق محفوظة © الصالح أحمد الحياري"
  },

  en: {
    pageTitle: "Portfolio & Projects - Alsaleh Al-Hayari",
    name: "Alsaleh Ahmad Al-Hayari",
    location: "Jordan 🇯🇴",
    bio: '"Server Management | n8n Automation | Web Development"',
    
    // Quick Icons & vCard
    vcardBtn: "📇 Save Contact Card (.vcf)",
    qrBtn: "📱 QR Code",
    
    // Sidebar Links
    linkCreations: "🎨 Selected Creations",
    linkAllProjects: "🚀 All Projects & Automations",
    
    // WhatsApp Inquiry Box
    waTitle: "Quick Service Request via WhatsApp 💬",
    waServiceLabel: "Requested Service:",
    waPhoneLabel: "Preferred Contact Number:",
    waTimelineLabel: "Expected Timeline:",
    waDetailsLabel: "Project Details or Summary:",
    waDetailsPlaceholder: "Write a brief summary of your idea...",
    waSubmitBtn: "Send Request via WhatsApp Now",
    
    // WhatsApp Form Options
    waOptService1: "⚡ Task & Workflow Automation (n8n)",
    waOptService2: "🖥️ Linux Server Setup & Management (VPS)",
    waOptService3: "🌐 Web Application Development",
    waOptService4: "🔗 API Integration & Webhooks",
    waOptService5: "💡 Comprehensive Technical Consultation",
    
    waOptTimeline1: "⚡ Urgent (Within 24-48 hours)",
    waOptTimeline2: "📅 Within 1 week",
    waOptTimeline3: "⏳ Flexible / Depending on project scope",
    
    // About Me
    aboutTitle: "About Me",
    aboutText: 'I am <strong>Alsaleh Ahmad Al-Hayari</strong>, specializing in server setup & management, workflow automation via <strong>n8n</strong>, and modern web development. I focus on delivering practical, scalable tech solutions that streamline business operations.',
    skillServer: "Server Management",
    skillWeb: "Web Development",
    
    // GitHub Section
    githubTitle: "My GitHub Projects",
    viewAllGithubBtn: "🚀 View All Projects (Dedicated Page)",
    loadingProjects: "Loading projects...",
    noProjects: "No public repositories found.",
    
    // Developed Websites Section
    websitesTitle: "Developed Websites",
    descPureTouch: "Official website for Pure Touch Plus, specializing in commercial cleaning and disinfection services.",
    descSaltTime: "News portal dedicated to reporting news from As-Salt city and Hashemite Kingdom of Jordan.",
    
    // CLI Terminal
    cliTitle: "my CLI",
    cliDesc: 'Interactive CLI terminal to explore my automation & server projects. Type <code dir="ltr">help</code> to start.',
    cliWelcome: "Welcome to Alsaleh's System! Type 'help' to start.",
    cliExpandBtn: "⛶ Fullscreen",
    
    // Server CLI
    serverCliDesc: 'Advanced Server Management CLI Node. Type <code dir="ltr">help</code> to see server commands.',
    serverCliWelcome: "[SERVER NODE CONNECTED] Welcome to Server Management CLI!",
    
    // n8n Section
    n8nTitle: "Latest n8n Automations & Workflows",
    loadingN8n: "Loading n8n automations...",
    noN8n: "No active workflows currently.",
    n8nActive: "Active",
    n8nInactive: "Inactive",
    n8nDownload: "📥 Download JSON",
    
    // Side Projects Section
    sideProjectsTitle: "Side Portfolios & Projects",
    descAshraf: "Digital media expert and press content developer.",
    descRaad: "Operations & hospitality manager. Showcasing leadership and operational expertise.",
    descEhab: "Professional CV & portfolio showcasing completed projects.",
    descRenad: "Social worker & youth empowerment specialist.",
    descEman: "Assistant Professor at College of Law. Academic, legal, and research journey.",
    descAya: "Professional CV showcasing training and academic achievements.",
    descOmar: "Streamlined CV & skills presentation.",
    
    // Random Creations Section
    randomTitle: "Random Creations 🎨",
    descFahm: "Interactive website for Fahm & Lahm Restaurant (Menu, branches, orders).",
    descAlis: "Interactive website for Alis Restaurant (Abu Nseir branch) - Broasted, Shawarma & Burgers.",
    descArmy: "Tactical military themed website for Army Burger restaurant in Amman.",
    descSushi: "Luxury website for Fugu Sushi restaurant showcasing Japanese sushi in Amman.",
    descGolden: "Food ordering app frontend and interactive layout.",
    descZO1: "Educational and academic platform interface.",
    descIDE: "Cloud IDE code editor & terminal layout.",
    descPayflow: "Payment management & financial flow system (PayFlow).",
    livePreview: "🌐 Live Preview",
    
    // Automation ROI Calculator
    roiTitle: "Automation Time & Money Saved Calculator 🧮",
    roiDesc: "Calculate how much time and money you can save monthly by automating routine tasks with n8n:",
    roiEmployeesLabel: "Number of Team Members:",
    roiHoursLabel: "Manual Task Hours / Day (Per Person):",
    roiRateLabel: "Estimated Hourly Wage ($):",
    roiSavedHoursLabel: "Monthly Hours Saved:",
    roiSavedMoneyLabel: "Monthly Cost Savings:",
    hoursUnit: "Hours ⏳",
    moneyUnit: "USD 💰",
    
    // All Projects Page Specific
    allProjectsPageTitle: "All Projects & Automations - Alsaleh Al-Hayari",
    allProjectsHeaderTitle: "🚀 All Projects & Automations",
    allProjectsHeaderSub: "Explore all GitHub repositories, n8n workflows, websites, and side projects in one unified directory.",
    backHomeBtn: "🏠 Back to Home",
    searchPlaceholder: "🔍 Search by project name or keywords...",
    
    // Category Tabs
    catAll: "🌐 All",
    catGithub: "💻 GitHub Repos",
    catN8n: "⚡ n8n Automations",
    catWebsites: "🌐 Live Websites",
    catSide: "👤 Side Portfolios",
    catCreations: "🎨 Random Creations",
    
    // Footer
    footerRights: "All Rights Reserved © Alsaleh Ahmad Al-Hayari"
  }
};

/* Keys added with the redesigned layout */
Object.assign(translations.ar, {
  founderOf: "مؤسس",
  startupTitle: "شركتي الناشئة",
  startupDesc: 'GLTCH شركة <strong>Agentic Media-Tech Heavy</strong>: إعلام بحجم كبير يقوم على تقنية ثقيلة ووكلاء ذكاء اصطناعي. نعمل مع عملائنا اليوم، وما زلنا نبني المزيد.',
  pillarAgentic: '<li>وكلاء AI ينتجون المحتوى</li><li>نشر وإدارة آلية للحسابات</li><li>نؤتمت حياتك وعملك</li>',
  pillarMedia: '<li>ندير الميديا ونخلّيك تنتشر بشكل فيروسي</li><li>نصمّم الميديا تبعتك لتوصل لعملائك</li><li>نصوّر ونخرج البثوث</li><li>إنتاج إبداعي</li>',
  pillarTech: '<li>عندنا داتا سنتر</li><li>نبرمج لك شيئاً خارجاً عن المألوف</li><li>نهكّر ونصلّح</li><li>نحميك</li><li>بنية تقنية للإعلام</li>',
  startupRole: "المؤسس",
  navAbout: "نبذة",
  navServices: "الخدمات",
  navProjects: "المشاريع",
  navTerminal: "التيرمينال",
  navContact: "تواصل",
  heroLead: "أبني أتمتة للمهام باستخدام n8n، أجهّز وأدير السيرفرات، وأطوّر مواقع ويب عملية ومباشرة.",
  heroContactBtn: "اطلب خدمة",
  servicesTitle: "الخدمات",
  svc1Title: "أتمتة n8n",
  svc1Desc: "بناء سير عمل يربط أدواتك ببعضها وينفّذ المهام المتكررة تلقائياً.",
  svc2Title: "إدارة السيرفرات",
  svc2Desc: "تجهيز وإدارة سيرفرات Linux و VPS ونشر التطبيقات عليها.",
  svc3Title: "تطوير الويب",
  svc3Desc: "مواقع وواجهات ويب سريعة ومتجاوبة مع جميع الشاشات.",
  svc4Title: "ربط API و Webhooks",
  svc4Desc: "تكامل الخدمات والأنظمة المختلفة عبر API و Webhooks.",
  platformsTitle: "حساباتي ومنصات العمل",
  contactTitle: "تواصل معي",
  contactLead: "اختر الخدمة واكتب ملخص فكرتك، وسيُفتح WhatsApp برسالة جاهزة للإرسال."
});

Object.assign(translations.en, {
  founderOf: "Founder of",
  startupTitle: "My Startup",
  startupDesc: 'GLTCH is an <strong>agentic, media-tech heavy</strong> company: high-volume media built on heavy technology and AI agents. We work with clients today and are still building more.',
  pillarAgentic: '<li>AI agents that produce content</li><li>Automated publishing and account management</li><li>We automate your life and work</li>',
  pillarMedia: '<li>We run your media and make you go viral</li><li>We design your media so it reaches your clients</li><li>We shoot and direct live streams</li><li>Creative production</li>',
  pillarTech: '<li>Our own data center</li><li>We build software out of the ordinary</li><li>We hack and we fix</li><li>We protect you</li><li>Technical infrastructure for media</li>',
  startupRole: "Founder",
  navAbout: "About",
  navServices: "Services",
  navProjects: "Projects",
  navTerminal: "Terminal",
  navContact: "Contact",
  heroLead: "I build task automation with n8n, set up and manage servers, and develop practical, straightforward websites.",
  heroContactBtn: "Request a service",
  servicesTitle: "Services",
  svc1Title: "n8n Automation",
  svc1Desc: "Workflows that connect your tools and run repetitive tasks automatically.",
  svc2Title: "Server Management",
  svc2Desc: "Setting up and managing Linux and VPS servers and deploying apps on them.",
  svc3Title: "Web Development",
  svc3Desc: "Fast websites and interfaces that work on every screen size.",
  svc4Title: "API & Webhook Integration",
  svc4Desc: "Connecting different services and systems through APIs and webhooks.",
  platformsTitle: "Profiles & Platforms",
  contactTitle: "Get in Touch",
  contactLead: "Pick a service and describe your idea; WhatsApp opens with the message ready to send."
});

/* Shifa project section */
Object.assign(translations.ar, {
  shifaTitle: "Shifa: عيادة بلا أوراق",
  shifaKicker: "قصة المشروع",
  shifaStory: "تواصل معنا عميل يملك عيادة وكان غارقاً في الأوراق، فبنينا له Shifa: منصة تنقل عمل العيادة اليومي من الورق إلى شاشة واحدة.",
  shifaIntro: "Shifa منصة ويب لإدارة العيادات (الطب العام وطب الأسنان): ملف إلكتروني لكل مريض، وصفات وفواتير تُطبع بضغطة زر، مخطط أسنان تفاعلي، ومساعد ذكاء اصطناعي في باقات AI+. وهي منشورة وتعمل بالعربية والإنجليزية.",
  shifaF1T: "ملف المريض الإلكتروني",
  shifaF1D: "الاسم والهوية والهاتف والحساسية والتاريخ المرضي، مع السجلات الطبية والمواعيد القادمة في صفحة واحدة، وبحث سريع بالاسم أو الهوية أو الهاتف.",
  shifaF2T: "مخطط الأسنان والأشعة",
  shifaF2D: "مخطط تفاعلي للأسنان من 1 إلى 32: حالة كل سن وعلاجه وتكلفته، مع إرفاق صور الأشعة (حتى 10 ميغابايت) في تخزين خاص.",
  shifaF3T: "الوصفات الطبية",
  shifaF3D: "التشخيص والأدوية والجرعات، مع إظهار حساسية المريض أثناء الكتابة، ثم طباعة الوصفة من صفحتها وحفظها في ملف المريض.",
  shifaF4T: "الفواتير والمالية",
  shifaF4D: "فواتير بأرقام متسلسلة (مثل INV-2026-0001) تحسب الإجمالي والمتبقي وحالة الدفع، وتُطبع أو تُحمّل PDF، مع لوحة تتابع دخل العيادة.",
  shifaF5T: "مساعد الذكاء الاصطناعي (AI+)",
  shifaF5D: "يجيب عن الأسئلة ويحلل الملفات النصية المرفقة، ويلخّص ملف أي مريض بضغطة واحدة قبل الزيارة.",
  shifaF6T: "الخصوصية والأمان",
  shifaF6D: "بيانات كل عيادة معزولة عن غيرها، والدخول بكود تحقق من 6 أرقام يصل بالبريد مع قفل بعد المحاولات الخاطئة، وصور الأشعة لا يفتحها إلا صاحب الملف.",
  shifaFlowTitle: "كيف تبدأ العيادة",
  shifaFlow1: "تنشئ العيادة حسابها وتختار الباقة.",
  shifaFlow2: "يراجع فريقنا الطلب ويفعّل الاشتراك، وتصلها رسالة.",
  shifaFlow3: "تضيف المرضى وتصدر الوصفات والفواتير من اليوم الأول.",
  shifaMore: "يعمل على الجوال والكمبيوتر مع وضع فاتح وداكن، ويمكن الطباعة من الهاتف. قريباً: إدارة الصيدلية والمخزون، والربط مع الصيدليات، وتطبيق ويندوز (نسخة تجريبية متاحة)."
});

/* Shifa project section */
Object.assign(translations.en, {
  shifaTitle: "Shifa: a paper-free clinic",
  shifaKicker: "The story",
  shifaStory: "A client who runs a clinic contacted us, drowning in paperwork. So we built Shifa for them: a platform that moves the clinic’s daily work from paper onto one screen.",
  shifaIntro: "Shifa is a web platform for running clinics (general medicine and dentistry): an electronic file for every patient, prescriptions and invoices printed in one click, an interactive dental chart, and an AI assistant in the AI+ plans. It is live and works in Arabic and English.",
  shifaF1T: "Electronic patient file",
  shifaF1D: "Name, ID, phone, allergies and medical history, with medical records and upcoming appointments on one page, and quick search by name, ID or phone.",
  shifaF2T: "Dental chart and X-rays",
  shifaF2D: "An interactive chart of teeth 1 to 32: each tooth’s condition, treatment and cost, with X-ray images (up to 10 MB) kept in private storage.",
  shifaF3T: "Prescriptions",
  shifaF3D: "Diagnosis, medicines and doses, with the patient’s allergies shown while writing, then printed from the prescription page and kept in the patient file.",
  shifaF4T: "Invoices and finances",
  shifaF4D: "Numbered invoices (such as INV-2026-0001) that work out the total, balance and payment status, printed or downloaded as PDF, with a dashboard that follows the clinic’s income.",
  shifaF5T: "AI assistant (AI+)",
  shifaF5D: "Answers questions, analyses attached text files, and summarises any patient’s record in one click before the visit.",
  shifaF6T: "Privacy and security",
  shifaF6D: "Each clinic’s data is kept separate, sign-in uses a 6-digit code sent by email with a lock-out after wrong attempts, and X-ray images open only for the file’s owner.",
  shifaFlowTitle: "How a clinic gets started",
  shifaFlow1: "The clinic creates its account and picks a plan.",
  shifaFlow2: "Our team reviews the request and activates the subscription, and a message is sent.",
  shifaFlow3: "It adds patients and issues prescriptions and invoices from day one.",
  shifaMore: "Works on phone and desktop with light and dark modes, and prints from a phone. Coming soon: pharmacy and inventory management, pharmacy connection, and a Windows app (a beta is available)."
});

/* Keys for stats, the case study and the GLTCH page */
Object.assign(translations.ar, {
  statClientSites: "مواقع عملاء على الإنترنت",
  statClinic: "منصة عيادات منشورة",
  statFrontends: "واجهات تصميمية",
  statWorkflows: "سير عمل n8n منشورة",
  shifaCaseBtn: "اقرأ دراسة الحالة",
  gltchPageBtn: "صفحة GLTCH الكاملة",
  navShifaLink: "Shifa",
  caseBack: "عودة إلى Shifa",
  caseKicker: "دراسة حالة",
  caseShifaTitle: "Shifa — منصة لإدارة العيادة بلا أوراق",
  caseShifaSummary: "منصة ويب لإدارة العيادات بُنيت لعميل كان غارقاً في الأوراق.",
  caseProblemH: "المشكلة",
  caseProblem: "تواصل معنا عميل يملك عيادة وكان غارقاً في الأوراق في عمله اليومي.",
  caseSolutionH: "الحل",
  caseSolution: "بنينا Shifa لتنقل عمل العيادة من الورق إلى شاشة واحدة: ملف لكل مريض، ووصفات وفواتير تُصدر وتُطبع من النظام.",
  caseBuiltH: "ما بنيناه",
  caseBuilt: "<li><strong>ملف المريض:</strong> بيانات شخصية وحساسية وتاريخ مرضي وسجلات طبية، ومواعيد قادمة لا تقبل تاريخاً سابقاً.</li><li><strong>مخطط الأسنان:</strong> الأسنان من 1 إلى 32 بعشر حالات (سليم، تسوس، حشوة، تاج، علاج عصب، مفقود، يحتاج خلعاً، زرعة، جسر، أخرى) مع العلاج والتشخيص والتكلفة وصورة أشعة حتى 10 ميغابايت.</li><li><strong>الوصفات:</strong> تشخيص وعدة أدوية بالاسم والجرعة والكمية، وتظهر حساسية المريض أثناء الكتابة، وتُطبع من صفحتها.</li><li><strong>الفواتير:</strong> بنود (كشف، علاج، إجراء سني برقم السن، جراحة، أدوية) مع الخصم والضريبة وطرق الدفع (نقداً، بطاقة، CliQ، تأمين)، وترقيم متسلسل مثل INV-2026-0001 وحالة (مدفوعة، جزئية، غير مدفوعة)، وطباعة أو PDF.</li><li><strong>مساعد AI+:</strong> أسئلة وملفات نصية وتلخيص لملف المريض بضغطة واحدة، بحصة أسبوعية تتجدد كل يوم أحد في السادسة صباحاً.</li><li><strong>الأمان:</strong> كلمة مرور ثم كود من 6 أرقام صالح 10 دقائق، وقفل 30 دقيقة بعد المحاولات الخاطئة، وعزل بيانات كل عيادة، وصور أشعة في تخزين خاص بلا رابط عام.</li><li><strong>الاشتراكات:</strong> باقة أساسية وثلاث باقات AI+، شهرياً أو سنوياً بخصم، وعقود مخصصة للمستشفيات والشبكات (ملف موحد بين الفروع وحسابات بلا حد)، يفعّلها فريقنا بعد مراجعة الطلب.</li><li><strong>الواجهة:</strong> عربي وإنجليزي، ووضع فاتح وداكن، ويعمل على الجوال.</li>",
  caseTechH: "التقنيات",
  caseOutcomeH: "المُخرَج",
  caseOutcome: "منصة منشورة تعمل بالعربية والإنجليزية وتخدم العيادات بالاشتراك. قريباً: إدارة الصيدلية والمخزون، والربط مع الصيدليات، وتطبيق ويندوز (نسخة تجريبية متاحة).",
  gltchHeroLead: "شركة ناشئة Agentic Media-Tech Heavy: إعلام بحجم كبير يقوم على تقنية ثقيلة ووكلاء ذكاء اصطناعي. نعمل مع عملائنا اليوم، وما زلنا نبني المزيد.",
  gltchRequestBtn: "اطلب خدمة من GLTCH",
  gltchFounderLine: "المؤسس: الصالح أحمد الحياري",
  gltchServicesTitle: "ماذا نقدّم",
  gltchProcessTitle: "كيف نعمل",
  gltchCtaTitle: "عندك مشروع؟",
  gltchCtaText: "احكِ لنا عن فكرتك على WhatsApp ونرجع لك بخطة واضحة.",
  gltchAgenticLead: "وكلاء ذكاء اصطناعي يشتغلون عنك: ينتجون، ينشرون، ويتابعون.",
  gltchMediaLead: "نصنع حضورك الإعلامي من التصوير إلى الانتشار.",
  gltchTechLead: "هندسة ثقيلة تشغّل كل ذلك وتحميه.",
  gltchStep1T: "نسمعك",
  gltchStep1D: "نفهم مشروعك وجمهورك وما تريد الوصول إليه.",
  gltchStep2T: "نخطّط",
  gltchStep2D: "نحدد الميديا والتقنية والوكلاء المناسبين لهدفك.",
  gltchStep3T: "ننفّذ",
  gltchStep3D: "نصوّر ونصمّم ونبرمج ونؤتمت.",
  gltchStep4T: "نشغّل ونحمي",
  gltchStep4D: "ندير التشغيل اليومي، نراقب، ونحمي ما بنيناه."
});

/* Keys for stats, the case study and the GLTCH page */
Object.assign(translations.en, {
  statClientSites: "Client websites live",
  statClinic: "Clinic platform live",
  statFrontends: "Design front-ends",
  statWorkflows: "Published n8n workflows",
  shifaCaseBtn: "Read the case study",
  gltchPageBtn: "Full GLTCH page",
  navShifaLink: "Shifa",
  caseBack: "Back to Shifa",
  caseKicker: "Case study",
  caseShifaTitle: "Shifa — a platform for running a paper-free clinic",
  caseShifaSummary: "A web platform for running clinics, built for a client who was drowning in paperwork.",
  caseProblemH: "The problem",
  caseProblem: "A client who runs a clinic contacted us, drowning in paperwork in their daily work.",
  caseSolutionH: "The solution",
  caseSolution: "We built Shifa to move the clinic’s work from paper onto one screen: a file for every patient, with prescriptions and invoices issued and printed from the system.",
  caseBuiltH: "What we built",
  caseBuilt: "<li><strong>Patient file:</strong> personal details, allergies, medical history and records, plus upcoming appointments that cannot be set in the past.</li><li><strong>Dental chart:</strong> teeth 1 to 32 with ten conditions (healthy, decay, filling, crown, root canal, missing, extraction needed, implant, bridge, other), with treatment, diagnosis, cost and an X-ray image up to 10 MB.</li><li><strong>Prescriptions:</strong> a diagnosis and several medicines with name, dose and quantity, the patient’s allergies shown while writing, and printing from the prescription page.</li><li><strong>Invoices:</strong> items (consultation, treatment, tooth procedure with the tooth number, surgery, medicines) with discount, tax and payment methods (cash, card, CliQ, insurance), sequential numbering such as INV-2026-0001 and a status (paid, partially paid, unpaid), printed or exported as PDF.</li><li><strong>AI+ assistant:</strong> questions, text files and a one-click summary of a patient’s record, with a weekly allowance that renews every Sunday at 6 AM.</li><li><strong>Security:</strong> a password then a 6-digit code valid for 10 minutes, a 30-minute lock-out after wrong attempts, each clinic’s data kept separate, and X-ray images in private storage with no public link.</li><li><strong>Subscriptions:</strong> a basic plan and three AI+ plans, monthly or annual with a discount, and custom contracts for hospitals and networks (a unified file across branches and unlimited accounts), activated by our team after reviewing the request.</li><li><strong>Interface:</strong> Arabic and English, light and dark modes, and it works on a phone.</li>",
  caseTechH: "Technology",
  caseOutcomeH: "Outcome",
  caseOutcome: "A live platform in Arabic and English that serves clinics by subscription. Coming soon: pharmacy and inventory management, pharmacy connection, and a Windows app (a beta is available).",
  gltchHeroLead: "An agentic, media-tech heavy startup: high-volume media built on heavy technology and AI agents. We work with clients today and are still building more.",
  gltchRequestBtn: "Request a GLTCH service",
  gltchFounderLine: "Founder: Alsaleh Ahmad Al-Hayari",
  gltchServicesTitle: "What we do",
  gltchProcessTitle: "How we work",
  gltchCtaTitle: "Have a project?",
  gltchCtaText: "Tell us about your idea on WhatsApp and we will come back with a clear plan.",
  gltchAgenticLead: "AI agents that work for you: they produce, publish and follow up.",
  gltchMediaLead: "We build your media presence, from the shoot to going viral.",
  gltchTechLead: "Heavy engineering that runs all of it and keeps it safe.",
  gltchStep1T: "We listen",
  gltchStep1D: "We learn your project, your audience and where you want to get to.",
  gltchStep2T: "We plan",
  gltchStep2D: "We pick the media, technology and agents that fit your goal.",
  gltchStep3T: "We build",
  gltchStep3D: "We shoot, design, code and automate.",
  gltchStep4T: "We run and protect",
  gltchStep4D: "We handle day-to-day operation, monitor it, and protect what we built."
});

let currentLang = localStorage.getItem('portfolio_lang') || 'ar';

function setLanguage(lang) {
  if (!translations[lang]) lang = 'ar';
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update document title if present
  if (document.querySelector('meta[name="i18n-title"]')) {
    document.title = dict.pageTitle;
  }
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.hasAttribute('placeholder')) {
          el.placeholder = dict[key];
        }
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Translate placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update switcher button label if exists
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = lang === 'ar' ? '🌐 English' : '🌐 عربي';
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
  // Trigger custom event so page scripts can re-render dynamic content if needed
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: newLang } }));
}

// Auto initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
