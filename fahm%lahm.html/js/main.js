// Fahm & Lahm Main JavaScript Engine - Bilingual Support (Arabic & English)

let currentLang = localStorage.getItem('fahm_lang') || 'ar';

// i18n Translations Dictionary
const translations = {
    ar: {
        topBarPhone: "الرقم الموحد للطلبات والاستفسارات:",
        topBar24h: "فروع وادي الشجرة وأبو نصير تعمل 24 ساعة!",
        brandSubtitle: "شركة رائد وعصام العمايرة",
        navHome: "الرئيسية",
        navMenu: "قائمة الطعام",
        navBranches: "الفروع والتقييمات",
        navAbout: "عن المطعم",
        navContact: "تواصل معنا",
        phoneBtn: "053500600",
        langToggleBtn: "English",
        
        // Hero
        heroBadge: "طعم الشواء البلدي الأصيل على الفحم",
        heroTitle: "أشهى المشويات البلدية و<span>الشاورما الطازجة</span> يومياً",
        heroDesc: "نحن في مطعم <strong>فحم ولحم</strong> (شركة رائد وعصام العمايرة) نقدم لكم أجود أنواع اللحوم الطازجة (غنم بلدي وروماني) المشوية بطريقتنا التقليدية الخاصة، مع وجبات الشاورما والبرجر والبروستد.",
        heroBtnMenu: "استعرض المنيو والأسعار",
        heroBtnCall: "اطلب الآن 053500600",
        stat1Title: "4.2 ★",
        stat1Desc: "تقييم أكثر من 2,900 زبون",
        stat2Title: "4 فروع",
        stat2Desc: "في السلط وعمان (أبو نصير)",
        stat3Title: "24 ساعة",
        stat3Desc: "خدمة متواصلة في بعض الفروع",
        
        // Features
        feat1Title: "لحوم طازجة 100%",
        feat1Desc: "نختار أجود أنواع اللحم الروماني والبلدي يومياً لضمان نكهة شواء لا تُنسى.",
        feat2Title: "شواء على الفحم",
        feat2Desc: "طريقة الطهي التقليدية على الفحم الطبيعي التي تمنح الأطباق رائحتها الزكية.",
        feat3Title: "توصيل سريع",
        feat3Desc: "خدمة توصيل تغطي السلط وعمان عبر الرقم الموحد 053500600 وتطبيقات التوصيل.",
        feat4Title: "أجواء عائلية",
        feat4Desc: "صالات مريحة، غرف طعام خاصة، وألعاب للأطفال في فروعنا لراحتكم.",
        
        // Menu Page
        menuPageTitle: "قائمة الطعام <span>والأسعار المفصلة</span>",
        menuPageDesc: "استمتع بتشكيلة فريدة من المشويات البلدية على الفحم، الشاورما، الوجبات العائلية الكبرى والوجبات السريعة",
        previewTitle: "مختارات من قائمة <span>فحم ولحم</span>",
        previewSubtitle: "أشهر الأطباق والوجبات",
        btnFullMenu: "عرض قائمة الطعام الكاملة والأسعار",
        searchPlaceholder: "ابحث عن طبق أو ساندويش...",
        
        // Menu Tabs
        tabAll: "الكل",
        tabKilograms: "المشويات بالوزن (كيلو)",
        tabIndividual: "الوجبات الفردية",
        tabShawarma: "الشاورما والساندويشات",
        tabFamily: "وجبات عالي العائلية",
        tabFastfood: "البرجر والبروستد",
        addToCartBtn: "إضافة",
        currency: "د.أ",
        
        // Branches Page
        branchesPageTitle: "فروعنا في <span>السلط وعمان</span>",
        branchesPageDesc: "نصلكم أينما كنتم عبر 4 فروع مجهزة بأعلى المعايير، وخدمة توصيل سريعة على الرقم 053500600",
        
        // About Page
        aboutPageTitle: "نبذة عن المطعم <span>والهوية التجارية</span>",
        aboutPageDesc: "شركة رائد وعصام العمايرة - التزام بالأصالة والجودة الشعبية بأسلوب عصري يخدم الجميع",
        
        // Contact Page
        contactPageTitle: "تواصل معنا <span>وخدمة الطلبات</span>",
        contactPageDesc: "نحن هنا لخدمتكم دائماً. اطلب مباشرة عبر الرقم الموحد 053500600 أو عبر الواتساب وتطبيقات التوصيل",
        
        // Cart Drawer
        cartHeader: "سلة الطلبات",
        cartEmpty: "سلة الطلبات فارغة حالياً",
        cartTotalLabel: "المجموع الكلي:",
        cartCheckoutBtn: "إرسال الطلب عبر الهاتف (053500600)",
        
        // Footer
        footerSubtitle: "شركة رائد وعصام العمايرة",
        footerTagline: "أجود المشويات البلدية على الفحم والشاورما في الأردن.",
        footerUnifiedPhone: "الرقم الموحد: 053500600",
        footerQuickLinks: "روابط سريعة",
        footerMainBranches: "الفروع الرئيسية",
        footerContactOrder: "تواصل واطلب",
        footerTalabat: "متوفر على تطبيقات التوصيل (طلبات)",
        footerRights: "© 2026 مطعم فحم ولحم (شركة رائد وعصام العمايرة). جميع الحقوق محفوظة."
    },
    en: {
        topBarPhone: "Unified Delivery & Order Number:",
        topBar24h: "Wadi Al-Shajara & Abu Nseir branches open 24/7!",
        brandSubtitle: "Raed & Essam Al-Amayreh Co.",
        navHome: "Home",
        navMenu: "Menu",
        navBranches: "Branches",
        navAbout: "About Us",
        navContact: "Contact",
        phoneBtn: "053500600",
        langToggleBtn: "العربية",
        
        // Hero
        heroBadge: "Authentic Charcoal Grilled Flavour",
        heroTitle: "Finest Local Grills & <span>Fresh Shawarma</span> Daily",
        heroDesc: "At <strong>Fahem & Lahem Restaurant</strong> (Raed & Essam Al-Amayreh Co.), we serve fresh local lamb & roman beef grilled on natural charcoal, alongside shawarma, burgers, and broasted chicken.",
        heroBtnMenu: "Explore Menu & Prices",
        heroBtnCall: "Order Now 053500600",
        stat1Title: "4.2 ★",
        stat1Desc: "Over 2,900+ Google Reviews",
        stat2Title: "4 Branches",
        stat2Desc: "In Salt & Amman (Abu Nseir)",
        stat3Title: "24/7 Service",
        stat3Desc: "Non-stop service in select branches",
        
        // Features
        feat1Title: "100% Fresh Meat",
        feat1Desc: "Handpicked premium local lamb & meat daily for an unforgettable barbecue flavor.",
        feat2Title: "Charcoal Barbecue",
        feat2Desc: "Traditional grilling over natural wood charcoal giving rich smoky aromas.",
        feat3Title: "Fast Delivery",
        feat3Desc: "Covering Salt & Amman via hotline 053500600 and food delivery apps.",
        feat4Title: "Family Friendly",
        feat4Desc: "Spacious seating, private dining rooms, and kids play areas in our branches.",
        
        // Menu Page
        menuPageTitle: "Food Menu <span>& Detailed Prices</span>",
        menuPageDesc: "Enjoy our wide variety of charcoal grills, shawarma platters, mega family meals, and fast food.",
        previewTitle: "Featured <span>Fahm & Lahm</span> Dishes",
        previewSubtitle: "POPULAR DISHES & MEALS",
        btnFullMenu: "View Full Menu & All Prices",
        searchPlaceholder: "Search dish or sandwich...",
        
        // Menu Tabs
        tabAll: "All",
        tabKilograms: "Grills by KG",
        tabIndividual: "Single Meals",
        tabShawarma: "Shawarma & Sandwiches",
        tabFamily: "Aali Family Meals",
        tabFastfood: "Burgers & Broasted",
        addToCartBtn: "Add to Cart",
        currency: "JOD",
        
        // Branches Page
        branchesPageTitle: "Our Branches in <span>Salt & Amman</span>",
        branchesPageDesc: "Reaching you across 4 prime locations with top quality service and fast delivery via 053500600",
        
        // About Page
        aboutPageTitle: "About Us <span>& Brand Identity</span>",
        aboutPageDesc: "Raed & Essam Al-Amayreh Co. - Commitment to authentic quality, great taste, and affordable prices.",
        
        // Contact Page
        contactPageTitle: "Contact Us <span>& Direct Orders</span>",
        contactPageDesc: "We are always at your service. Call hotline 053500600, WhatsApp, or order via Talabat.",
        
        // Cart Drawer
        cartHeader: "Your Order Cart",
        cartEmpty: "Your order cart is currently empty",
        cartTotalLabel: "Grand Total:",
        cartCheckoutBtn: "Send Order via Phone (053500600)",
        
        // Footer
        footerSubtitle: "Raed & Essam Al-Amayreh Co.",
        footerTagline: "The finest charcoal grills & shawarma in Jordan.",
        footerUnifiedPhone: "Hotline: 053500600",
        footerQuickLinks: "Quick Links",
        footerMainBranches: "Main Branches",
        footerContactOrder: "Contact & Order",
        footerTalabat: "Available on Delivery Apps (Talabat)",
        footerRights: "© 2026 Fahm & Lahm Restaurant (Raed & Essam Al-Amayreh Co.). All Rights Reserved."
    }
};

// Real Data extracted strictly from documents in AR & EN
const menuItems = [
    // Category: kilograms
    {
        id: 1,
        name: { ar: "شقف لحم 1 كيلو", en: "1 KG Lamb Tikka / Shish Kebab" },
        category: "kilograms",
        price: 14.00,
        desc: { 
            ar: "لحم روماني بلدي طازج مشوي على الفحم الطبيعي المباشر، يخدم مع البصل، الطماطم المشوية والخبز", 
            en: "Fresh local lamb tikka grilled over wood charcoal, served with grilled onions, tomatoes & bread" 
        },
        icon: "fa-fire",
        badge: { ar: "الأكثر طلباً", en: "Best Seller" }
    },
    {
        id: 2,
        name: { ar: "كباب لحم 1 كيلو", en: "1 KG Lamb Kebab" },
        category: "kilograms",
        price: 10.00,
        desc: { 
            ar: "كباب لحم روماني بلدي طازج متبل بتتبيلتنا الخاصة المشوية على الفحم", 
            en: "Fresh seasoned minced lamb kebab grilled over hot charcoal" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "مميز", en: "Featured" }
    },
    {
        id: 3,
        name: { ar: "مشكل 1 كيلو (لحم ودجاج)", en: "1 KG Mixed Grill (Lamb & Chicken)" },
        category: "kilograms",
        price: 12.00,
        desc: { 
            ar: "تشكيلة فاخرة تجمع بين شقف اللحم، الكباب، والشيش طاووق المشوي على الفحم", 
            en: "Premium mixed platter of lamb tikka, lamb kebab, and shish tawook" 
        },
        icon: "fa-layer-group",
        badge: { ar: "خيار العائلات", en: "Family Choice" }
    },
    {
        id: 4,
        name: { ar: "عرايس لحم 1 كيلو", en: "1 KG Lamb Arayes" },
        category: "kilograms",
        price: 10.00,
        desc: { 
            ar: "عرايس باللحم البلدي المتبل والمشوي داخل الخبز العربي على الفحم حتى القرمشة", 
            en: "Crispy grilled Arabic pita stuffed with spiced fresh minced lamb" 
        },
        icon: "fa-bread-slice",
        badge: { ar: "", en: "" }
    },
    {
        id: 5,
        name: { ar: "دجاجة مشوية على الفحم", en: "Whole Charcoal Grilled Chicken" },
        category: "kilograms",
        price: 6.00,
        desc: { 
            ar: "دجاجة كاملة متبلة وموضوعة على الفحم المباشر، تقدم مع الخبز الطازج والثومية", 
            en: "Whole marinated chicken slow-grilled on charcoal, served with garlic dip & pita" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "شهي", en: "Delicious" }
    },

    // Category: individual
    {
        id: 6,
        name: { ar: "وجبة شقف لحم فردية", en: "Single Lamb Tikka Meal" },
        category: "individual",
        price: 3.50,
        desc: { 
            ar: "قطع شقف لحم بلدي مشوية تقدم مع البصل، الطماطم المشوية والخبز الطازج", 
            en: "Single portion of grilled lamb tikka served with onions, tomatoes & bread" 
        },
        icon: "fa-utensils",
        badge: { ar: "", en: "" }
    },
    {
        id: 7,
        name: { ar: "وجبة كباب لحم فردية", en: "Single Lamb Kebab Meal" },
        category: "individual",
        price: 2.50,
        desc: { 
            ar: "أسياخ كباب لحم مشوية على الفحم مع الخضار المشوية والخبز", 
            en: "Single portion of charcoal grilled lamb kebab skewers" 
        },
        icon: "fa-utensils",
        badge: { ar: "", en: "" }
    },
    {
        id: 8,
        name: { ar: "وجبة شيش طاووق", en: "Shish Tawook Meal" },
        category: "individual",
        price: 2.00,
        desc: { 
            ar: "قطع دجاج شيش طاووق متبلة ومعدة على الفحم مع الثومية والخبز", 
            en: "Marinated chicken breast skewers grilled over charcoal" 
        },
        icon: "fa-utensils",
        badge: { ar: "", en: "" }
    },
    {
        id: 9,
        name: { ar: "وجبة مشكل (لحم ودجاج)", en: "Single Mixed Grill Meal" },
        category: "individual",
        price: 3.00,
        desc: { 
            ar: "مزيج مشويات فردي متنوع من اللحم البلدي والدجاج المشوي", 
            en: "Single combination platter of lamb and chicken grills" 
        },
        icon: "fa-star",
        badge: { ar: "مفضل", en: "Popular" }
    },

    // Category: shawarma
    {
        id: 10,
        name: { ar: "شاورما عادي (60غ)", en: "Regular Shawarma (60g)" },
        category: "shawarma",
        price: 0.65,
        desc: { 
            ar: "ساندويش شاورما دجاج كلاسيك بالخبز العربي والتومية والمخلل", 
            en: "Classic chicken shawarma sandwich in Arabic pita with garlic sauce" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 11,
        name: { ar: "شاورما سوبر (180غ)", en: "Super Shawarma (180g)" },
        category: "shawarma",
        price: 1.25,
        desc: { 
            ar: "حجم سوبر غني بالشاورما والمقبلات والتومية", 
            en: "Large super-sized chicken shawarma sandwich" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 12,
        name: { ar: "ساندويش شاورما فرنسي (100غ)", en: "French Shawarma Sandwich (100g)" },
        category: "shawarma",
        price: 1.30,
        desc: { 
            ar: "ساندويش شاورما بالخبز الفرنسي المحمص الخاص", 
            en: "Shawarma sandwich in toasted French baguette bread" 
        },
        icon: "fa-bread-slice",
        badge: { ar: "", en: "" }
    },
    {
        id: 13,
        name: { ar: "ساندويش سوبر زنجر (180غ)", en: "Super Zinger Sandwich (180g)" },
        category: "shawarma",
        price: 1.30,
        desc: { 
            ar: "قطع زنجر دجاج مقرمشة حارة مع الخس والصوص الخاص", 
            en: "Crispy spicy chicken zinger sandwich with lettuce & sauce" 
        },
        icon: "fa-pepper-hot",
        badge: { ar: "", en: "" }
    },
    {
        id: 14,
        name: { ar: "ساندويش هامر (200غ)", en: "Hammer Sandwich (200g)" },
        category: "shawarma",
        price: 1.75,
        desc: { 
            ar: "ساندويش هامر المميز مع الجبنة الذائبة والبطاطس المقرمشة", 
            en: "Signature Hammer sandwich packed with melted cheese & fries" 
        },
        icon: "fa-cheese",
        badge: { ar: "جديد", en: "New" }
    },
    {
        id: 15,
        name: { ar: "وجبة شاورما عادي (200غ)", en: "Regular Shawarma Meal (200g)" },
        category: "shawarma",
        price: 2.00,
        desc: { 
            ar: "شاورما عربية مقطعة تقدم مع بطاطس مقلية، صوص ثوم، ومخلل", 
            en: "Sliced Arabic shawarma meal served with fries, garlic dip & pickles" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 16,
        name: { ar: "وجبة شاورما سوبر", en: "Super Shawarma Meal" },
        category: "shawarma",
        price: 2.75,
        desc: { 
            ar: "وجبة شاورما سوبر مقطعة مع سرفيس بطاطس ومقبلات متنوعة", 
            en: "Sliced super shawarma meal with fries and extra garlic dips" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 17,
        name: { ar: "وجبة شاورما دبل (240غ)", en: "Double Shawarma Meal (240g)" },
        category: "shawarma",
        price: 3.40,
        desc: { 
            ar: "وجبة مضاعفة لشخصين تحتوي على 240 غرام شاورما مع البطاطس والصوصات", 
            en: "Double portion shawarma meal (240g) served with fries & dips" 
        },
        icon: "fa-boxes-stacked",
        badge: { ar: "قيمة عالية", en: "Great Value" }
    },
    {
        id: 18,
        name: { ar: "وجبة شاورما تريل (360غ)", en: "Triple Shawarma Meal (360g)" },
        category: "shawarma",
        price: 4.60,
        desc: { 
            ar: "وجبة ثلاثية ضخمة تحتوي على 360 غرام شاورما مع كمية مضاعفة من الثومية والبطاطس", 
            en: "Triple size shawarma meal (360g) with double fries & garlic dips" 
        },
        icon: "fa-boxes-stacked",
        badge: { ar: "مشبعة", en: "Mega Portion" }
    },

    // Category: family
    {
        id: 19,
        name: { ar: "وجبة عالي 1 العائلية", en: "Aali 1 Family Meal" },
        category: "family",
        price: 10.25,
        desc: { 
            ar: "وجبة شاورما عائلية كبرى مع سرافيس البطاطس، الصوصات، والمشروب الغازي العائلي", 
            en: "Large family shawarma meal with family fries, garlic dips & 1L drink" 
        },
        icon: "fa-people-group",
        badge: { ar: "عائلي", en: "Family" }
    },
    {
        id: 20,
        name: { ar: "وجبة عالي 2 العائلية", en: "Aali 2 Family Meal" },
        category: "family",
        price: 13.50,
        desc: { 
            ar: "وجبة عائلية ضخمة تشمل كمية وفيرة من الشاورما العربي والملحقات الكاملة", 
            en: "Extra large family shawarma feast with complete sides & drinks" 
        },
        icon: "fa-people-group",
        badge: { ar: "عائلي", en: "Family" }
    },
    {
        id: 21,
        name: { ar: "وجبة عالي 3 العائلية (1 كيلو شاورما)", en: "Aali 3 Family Meal (1 KG Shawarma)" },
        category: "family",
        price: 16.85,
        desc: { 
            ar: "كيلوغرام كامل من الشاورما المقطعة مع سرافيس البطاطس الضخمة، الصوصات والمشروبات العائلية", 
            en: "1 Full KG of sliced chicken shawarma with massive fries platter & family drinks" 
        },
        icon: "fa-crown",
        badge: { ar: "الأضخم", en: "Mega Feast" }
    },

    // Category: fastfood
    {
        id: 22,
        name: { ar: "وجبة برجر ترند / باربيكيو / سبايسي", en: "Burger Meal (Trend / BBQ / Spicy)" },
        category: "fastfood",
        price: 2.80,
        desc: { 
            ar: "وجبة برجر متكاملة مع بطاطس ومشروب وصوص الهني ماسترد المميز", 
            en: "Complete burger meal with french fries, soft drink & honey mustard sauce" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 23,
        name: { ar: "وجبة بروستد (4 قطع)", en: "Broasted Meal (4 Pcs)" },
        category: "fastfood",
        price: 2.70,
        desc: { 
            ar: "4 قطع دجاج بروستد مقرمش مع بطاطس مقلية، ثومية، وخبز طازج", 
            en: "4 Pieces crispy broasted chicken with fries, garlic dip & bread" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 24,
        name: { ar: "وجبة بروستد (8 قطع)", en: "Broasted Meal (8 Pcs)" },
        category: "fastfood",
        price: 4.70,
        desc: { 
            ar: "8 قطع دجاج بروستد مقرمش لجميع أفراد الأسرة مع المقبلات والبطاطس", 
            en: "8 Pieces crispy broasted chicken meal for the family with fries & garlic" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "عرض رائع", en: "Great Offer" }
    },
    {
        id: 25,
        name: { ar: "وجبة بروستد عائلية كبرى (24 قطعة)", en: "Mega Family Broasted Meal (24 Pcs)" },
        category: "fastfood",
        price: 20.50,
        desc: { 
            ar: "وجبة رقم 181 الضخمة: 24 قطعة بروستد ذهبي مقرمش مع البطاطس الكبيرة، الصوصات، والخبز", 
            en: "Mega Meal #181: 24 pieces crispy golden broasted chicken with large fries & dips" 
        },
        icon: "fa-fire",
        badge: { ar: "حفلات وعائلات", en: "Parties & Events" }
    }
];

// Persistent Cart in LocalStorage
let cart = JSON.parse(localStorage.getItem('fahm_cart') || '[]');

// Language Switcher Function
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('fahm_lang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const html = document.documentElement;
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[currentLang];

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Re-render menu grid if present
    if (document.getElementById('menuGrid')) {
        const activeTab = document.querySelector('.menu-tab.active');
        const activeCategory = activeTab ? activeTab.getAttribute('data-category') || 'all' : 'all';
        filterMenu(activeCategory, activeTab);
    }

    updateCartUI();
}

// Render Menu Function
function renderMenu(items, targetContainerId = 'menuGrid') {
    const container = document.getElementById(targetContainerId);
    if (!container) return;

    if (items.length === 0) {
        const emptyMsg = currentLang === 'ar' ? 'لم يتم العثور على أطباق تطابق بحثك.' : 'No items match your search.';
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-size: 1.1rem; padding: 40px;">${emptyMsg}</p>`;
        return;
    }

    const t = translations[currentLang];

    container.innerHTML = items.map(item => {
        const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
        const desc = typeof item.desc === 'object' ? item.desc[currentLang] : item.desc;
        const badge = typeof item.badge === 'object' ? item.badge[currentLang] : item.badge;

        return `
            <div class="menu-card">
                ${badge ? `<span class="menu-badge">${badge}</span>` : ''}
                <div class="menu-card-header">
                    <div class="item-icon-box">
                        <i class="fa-solid ${item.icon}"></i>
                    </div>
                </div>
                <div class="menu-card-body">
                    <h3 class="menu-item-title">${name}</h3>
                    <p class="menu-item-desc">${desc}</p>
                    <div class="menu-card-footer">
                        <div class="item-price">${item.price.toFixed(2)} <span>${t.currency}</span></div>
                        <button class="add-cart-btn" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-cart-plus"></i> ${t.addToCartBtn}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Filter Menu Categories
function filterMenu(category, element) {
    document.querySelectorAll('.menu-tab').forEach(tab => tab.classList.remove('active'));
    if (element) element.classList.add('active');

    if (category === 'all') {
        renderMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Search Input Filter
function searchMenu() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    const filtered = menuItems.filter(item => {
        const nameAr = typeof item.name === 'object' ? item.name.ar.toLowerCase() : item.name.toLowerCase();
        const nameEn = typeof item.name === 'object' ? item.name.en.toLowerCase() : item.name.toLowerCase();
        const descAr = typeof item.desc === 'object' ? item.desc.ar.toLowerCase() : item.desc.toLowerCase();
        const descEn = typeof item.desc === 'object' ? item.desc.en.toLowerCase() : item.desc.toLowerCase();

        return nameAr.includes(query) || nameEn.includes(query) || descAr.includes(query) || descEn.includes(query);
    });
    renderMenu(filtered);
}

// Cart Drawer Handlers
function toggleCart() {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer || !overlay) return;
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
}

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const cartItem = cart.find(i => i.id === itemId);

    if (cartItem) {
        cartItem.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    saveAndUpdateCart();
    
    // Notification feedback
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => cartBtn.style.transform = 'scale(1)', 200);
    }
}

function updateCartQty(itemId, change) {
    const cartItem = cart.find(i => i.id === itemId);
    if (!cartItem) return;

    cartItem.qty += change;
    if (cartItem.qty <= 0) {
        cart = cart.filter(i => i.id !== itemId);
    }

    saveAndUpdateCart();
}

function saveAndUpdateCart() {
    localStorage.setItem('fahm_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartBodyEl = document.getElementById('cartBody');
    const cartTotalEl = document.getElementById('cartTotal');

    if (!cartCountEl || !cartBodyEl || !cartTotalEl) return;

    const t = translations[currentLang];
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    cartCountEl.textContent = totalItems;
    cartTotalEl.textContent = `${totalPrice.toFixed(2)} ${t.currency}`;

    if (cart.length === 0) {
        cartBodyEl.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 50px;">${t.cartEmpty}</p>`;
    } else {
        cartBodyEl.innerHTML = cart.map(item => {
            const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
            return `
                <div class="cart-item">
                    <div>
                        <div class="cart-item-title">${name}</div>
                        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} ${t.currency} (${item.price.toFixed(2)} ${t.currency} × ${item.qty})</div>
                    </div>
                    <div class="cart-controls">
                        <button onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span style="font-weight: 700; font-size: 0.9rem;">${item.qty}</span>
                        <button onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function checkoutOrder() {
    if (cart.length === 0) {
        const msg = currentLang === 'ar' ? 'سلة الطلبات فارغة! الرجاء إضافة أطباق أولاً.' : 'Cart is empty! Please add items first.';
        alert(msg);
        return;
    }

    const t = translations[currentLang];
    let orderText = currentLang === 'ar' ? 'مرحباً مطعم فحم ولحم، أود طلب الأطباق التالية:\n\n' : 'Hello Fahm & Lahm Restaurant, I would like to order:\n\n';
    
    cart.forEach(item => {
        const name = typeof item.name === 'object' ? item.name[currentLang] : item.name;
        orderText += `• ${name} (x${item.qty}) = ${(item.price * item.qty).toFixed(2)} ${t.currency}\n`;
    });
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    orderText += `\n${t.cartTotalLabel} ${total.toFixed(2)} ${t.currency}`;

    const promptMsg = currentLang === 'ar' 
        ? `المجموع الكلي: ${total.toFixed(2)} د.أ\n\nانقر (موافق) للاتصال الهاتفي المباشر 053500600\nأو (إلغاء) للإرسال عبر واتساب` 
        : `Total: ${total.toFixed(2)} JOD\n\nClick (OK) for Direct Hotline Call 053500600\nor (Cancel) to send order via WhatsApp`;

    const choice = confirm(promptMsg);
    if (choice) {
        window.location.href = `tel:053500600`;
    } else {
        const encodedText = encodeURIComponent(orderText);
        window.open(`https://wa.me/96253500600?text=${encodedText}`, '_blank');
    }
}

function highlightBranch(branchId) {
    const card = document.getElementById(branchId);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.style.transition = 'all 0.5s ease';
    card.style.borderColor = '#f59e0b';
    card.style.boxShadow = '0 0 30px rgba(245, 158, 11, 0.8)';
    card.style.transform = 'scale(1.04)';
    
    setTimeout(() => {
        card.style.borderColor = 'var(--border-color)';
        card.style.boxShadow = 'none';
        card.style.transform = 'none';
    }, 2500);
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.right = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#171717';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #333';
    }
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    
    // Auto highlight branch if hash exists in URL
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        setTimeout(() => highlightBranch(targetId), 300);
    }
});
