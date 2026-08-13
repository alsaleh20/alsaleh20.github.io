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
        heroBadge: "طعم الشاورما والدجاج البلدي الأصيل على الفحم",
        heroTitle: "أشهى وجبات الشاورما و<span>الدجاج المشوي</span> يومياً",
        heroDesc: "نحن في مطعم <strong>فحم ولحم</strong> (شركة رائد وعصام العمايرة) نقدم لكم أشهى وجبات الشاورما الطازجة، ودجاج البروستد المقرمش، والدجاج المشوي على الفحم بتتبيلتنا الخاصة.",
        heroBtnMenu: "استعرض المنيو والأسعار",
        heroBtnCall: "اطلب الآن 053500600",
        stat1Title: "4.2 ★",
        stat1Desc: "تقييم أكثر من 2,900 زبون",
        stat2Title: "4 فروع",
        stat2Desc: "في السلط وعمان (أبو نصير)",
        stat3Title: "24 ساعة",
        stat3Desc: "خدمة متواصلة في بعض الفروع",
        
        // Features
        feat1Title: "دجاج طازج 100%",
        feat1Desc: "نستخدم الدجاج الطازج يومياً لضمان نكهة وجودة لا تُنسى في كل وجبة.",
        feat2Title: "شواء على الفحم",
        feat2Desc: "طريقة الطهي التقليدية على الفحم الطبيعي التي تمنح الأطباق رائحتها الزكية.",
        feat3Title: "توصيل سريع",
        feat3Desc: "خدمة توصيل تغطي السلط وعمان عبر الرقم الموحد 053500600 وتطبيقات التوصيل.",
        feat4Title: "أجواء عائلية",
        feat4Desc: "صالات مريحة، غرف طعام خاصة، وألعاب للأطفال في فروعنا لراحتكم.",
        
        // Menu Page
        menuPageTitle: "قائمة الطعام <span>والأسعار المفصلة</span>",
        menuPageDesc: "استمتع بتشكيلة فريدة من الشاورما الطازجة، دجاج الفحم، وجبات البروستد المقرمشة، والوجبات العائلية الكبرى",
        previewTitle: "مختارات من قائمة <span>فحم ولحم</span>",
        previewSubtitle: "أشهر الأطباق والوجبات",
        btnFullMenu: "عرض قائمة الطعام الكاملة والأسعار",
        searchPlaceholder: "ابحث عن طبق أو ساندويش...",
        
        // Menu Tabs
        tabAll: "الكل",
        tabCharcoal: "دجاج الفحم والبخاري",
        tabBroasted: "البروستد والكرسبي",
        tabShawarma: "الشاورما والساندويشات",
        tabBurgers: "البرجر وجبات الأطفال",
        tabFamily: "وجبات عالي العائلية",
        tabWings: "الوينجز والبوبس",
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
        footerTagline: "أشهى وجبات الشاورما والدجاج المشوي على الفحم والبروستد في الأردن.",
        footerUnifiedPhone: "الرقم الموحد: 053500600",
        footerQuickLinks: "روابط سريعة",
        footerMainBranches: "الفروع الرئيسية",
        footerContactOrder: "تواصل واطلب",
        footerTalabat: "متوفر على تطبيقات التوصيل (طلبات)",
        footerRights: "© 2026 مطعم فحم ولحم (شركة رائد وعصام العمايرة). جميع الحقوق محفوظة.",
        quickCall: "اتصل الآن",
        quickWhatsapp: "واتساب",
        quickMenu: "المنيو"
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
        quickCall: "Call Now",
        quickWhatsapp: "WhatsApp",
        quickMenu: "Menu",
        
        // Hero
        heroBadge: "Authentic Chicken & Shawarma Grilled Flavour",
        heroTitle: "Charcoal Grilled Chicken & <span>Fresh Shawarma</span> Daily",
        heroDesc: "At <strong>Fahm & Lahm Restaurant</strong> (Raed & Essam Al-Amayreh Co.), we serve fresh chicken shawarma, crispy broasted chicken, and charcoal-grilled chicken with our signature spices.",
        heroBtnMenu: "Explore Menu & Prices",
        heroBtnCall: "Order Now 053500600",
        stat1Title: "4.2 ★",
        stat1Desc: "Over 2,900+ Google Reviews",
        stat2Title: "4 Branches",
        stat2Desc: "In Salt & Amman (Abu Nseir)",
        stat3Title: "24/7 Service",
        stat3Desc: "Non-stop service in select branches",
        
        // Features
        feat1Title: "100% Fresh Chicken",
        feat1Desc: "We use 100% fresh chicken daily to ensure unforgettable taste and quality in every meal.",
        feat2Title: "Charcoal Barbecue",
        feat2Desc: "Traditional grilling over natural wood charcoal giving rich smoky aromas.",
        feat3Title: "Fast Delivery",
        feat3Desc: "Covering Salt & Amman via hotline 053500600 and food delivery apps.",
        feat4Title: "Family Friendly",
        feat4Desc: "Spacious seating, private dining rooms, and kids play areas in our branches.",
        
        // Menu Page
        menuPageTitle: "Food Menu <span>& Detailed Prices</span>",
        menuPageDesc: "Enjoy our wide variety of fresh shawarma, charcoal-grilled chicken, crispy broasted chicken, and mega family meals.",
        previewTitle: "Featured <span>Fahm & Lahm</span> Dishes",
        previewSubtitle: "POPULAR DISHES & MEALS",
        btnFullMenu: "View Full Menu & All Prices",
        searchPlaceholder: "Search dish or sandwich...",
        
        // Menu Tabs
        tabAll: "All",
        tabCharcoal: "Charcoal Chicken & Bukhari",
        tabBroasted: "Broasted & Crispy",
        tabShawarma: "Shawarma & Sandwiches",
        tabBurgers: "Burgers & Kids Meals",
        tabFamily: "Aali Family Meals",
        tabWings: "Wings & Bites",
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
        footerTagline: "The finest shawarma, charcoal-grilled chicken & broasted in Jordan.",
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
    // Category: charcoal (دجاج الفحم والبخاري)
    {
        id: 1,
        name: { ar: "دجاجة مشوية على الفحم", en: "Charcoal Grilled Chicken" },
        category: "charcoal",
        price: 5.00,
        desc: { 
            ar: "دجاجة مشوية كاملة على الفحم تقدم مع بطاطس 200غم، خبز، ثومية عادي، ثومية حار وثومية مايونيز عادي", 
            en: "Whole charcoal grilled chicken served with 200g fries, bread, regular garlic, spicy garlic & regular mayo garlic" 
        },
        icon: "fa-fire",
        badge: { ar: "الأكثر طلباً", en: "Best Seller" }
    },
    {
        id: 2,
        name: { ar: "نصف دجاجة مشوية على الفحم", en: "Half Charcoal Grilled Chicken" },
        category: "charcoal",
        price: 2.75,
        desc: { 
            ar: "نصف دجاجة مشوية على الفحم تقدم مع بطاطس 200غم، خبز، ثومية عادي وثومية حار", 
            en: "Half charcoal grilled chicken served with 200g fries, bread, regular garlic & spicy garlic" 
        },
        icon: "fa-fire",
        badge: { ar: "", en: "" }
    },
    {
        id: 3,
        name: { ar: "دجاجة مشوية سادة", en: "Whole Grilled Chicken (Plain)" },
        category: "charcoal",
        price: 4.20,
        desc: { 
            ar: "دجاجة كاملة مشوية على الفحم بدون إضافات", 
            en: "Whole grilled chicken on charcoal without sides" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 4,
        name: { ar: "نصف دجاجة مشوية سادة", en: "Half Grilled Chicken (Plain)" },
        category: "charcoal",
        price: 2.25,
        desc: { 
            ar: "نصف دجاجة مشوية على الفحم بدون إضافات", 
            en: "Half grilled chicken on charcoal without sides" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 5,
        name: { ar: "وجبة البخاري نصف دجاجة", en: "Bukhari Rice Meal with Half Chicken" },
        category: "charcoal",
        price: 2.75,
        desc: { 
            ar: "نصف دجاجة شواية مع 300 غرام أرز بخاري وصوص حار", 
            en: "Half rotisserie chicken served with 300g Bukhari rice & spicy sauce" 
        },
        icon: "fa-bowl-rice",
        badge: { ar: "شعبي", en: "Popular" }
    },
    {
        id: 6,
        name: { ar: "علبة أرز بخاري سادة (300 غم)", en: "Plain Bukhari Rice Box (300g)" },
        category: "charcoal",
        price: 1.00,
        desc: { 
            ar: "علبة أرز بخاري سادة بوزن 300 غم تقدم مع الصوص الخاص", 
            en: "Plain Bukhari rice portion (300g) served with special sauce" 
        },
        icon: "fa-bowl-rice",
        badge: { ar: "", en: "" }
    },
    {
        id: 7,
        name: { ar: "صدر أرز بخاري 1 كيلو", en: "1 KG Bukhari Rice Platter" },
        category: "charcoal",
        price: 2.25,
        desc: { 
            ar: "صدر أرز بخاري بوزن 1 كيلو يقدم مع 3 علب صوص", 
            en: "1 KG platter of Bukhari rice served with 3 sauce boxes" 
        },
        icon: "fa-bowl-rice",
        badge: { ar: "", en: "" }
    },
    {
        id: 8,
        name: { ar: "صدر أرز بخاري 2 كيلو", en: "2 KG Bukhari Rice Platter" },
        category: "charcoal",
        price: 3.25,
        desc: { 
            ar: "صدر أرز بخاري بوزن 2 كيلو يقدم مع 5 علب صوص", 
            en: "2 KG platter of Bukhari rice served with 5 sauce boxes" 
        },
        icon: "fa-bowl-rice",
        badge: { ar: "", en: "" }
    },
    {
        id: 9,
        name: { ar: "صدر أرز بخاري 3 كيلو", en: "3 KG Bukhari Rice Platter" },
        category: "charcoal",
        price: 4.00,
        desc: { 
            ar: "صدر أرز بخاري بوزن 3 كيلو يقدم مع 6 علب صوص", 
            en: "3 KG platter of Bukhari rice served with 6 sauce boxes" 
        },
        icon: "fa-bowl-rice",
        badge: { ar: "", en: "" }
    },

    // Category: broasted (البروستد والكرسبي)
    {
        id: 10,
        name: { ar: "وجبة كرسبي 8 قطع", en: "8 Pcs Crispy Chicken Meal" },
        category: "broasted",
        price: 4.00,
        desc: { 
            ar: "8 قطع كرسبي (400غ)، بطاطا 200غم، ثومية حار وعادي 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "8 pieces crispy chicken (400g), 200g fries, regular & spicy garlic (50g), bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-cookie",
        badge: { ar: "مميز", en: "Featured" }
    },
    {
        id: 11,
        name: { ar: "وجبة كرسبي 5 قطع", en: "5 Pcs Crispy Chicken Meal" },
        category: "broasted",
        price: 3.00,
        desc: { 
            ar: "5 قطع كرسبي (250غ)، بطاطا 200غم، ثومية عادي 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "5 pieces crispy chicken (250g), 200g fries, regular garlic (50g), bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-cookie",
        badge: { ar: "", en: "" }
    },
    {
        id: 12,
        name: { ar: "وجبة بروستد نصف دجاجة (4 قطع)", en: "Half Chicken Broasted Meal (4 Pcs)" },
        category: "broasted",
        price: 2.70,
        desc: { 
            ar: "4 قطع دجاج بروستد مقرمش، بطاطا 200غم، ثومية 50غم، وخبز طازج", 
            en: "4 pieces crispy broasted chicken, 200g fries, 50g garlic dip & fresh bread" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 13,
        name: { ar: "وجبة بروستد دجاجة كاملة (8 قطع)", en: "Whole Chicken Broasted Meal (8 Pcs)" },
        category: "broasted",
        price: 4.70,
        desc: { 
            ar: "8 قطع دجاج بروستد مقرمش، بطاطا 200غم، ثومية 50غم، وخبز طازج", 
            en: "8 pieces crispy broasted chicken, 200g fries, 50g garlic dip & fresh bread" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "قيمة ممتازة", en: "Best Value" }
    },
    {
        id: 14,
        name: { ar: "وجبة بروستد رقم (1) - قطعتين دجاج", en: "Broasted Meal #1 (2 Pcs)" },
        category: "broasted",
        price: 2.25,
        desc: { 
            ar: "قطعتين دجاج بروستد، بطاطا 200غم، ثومية 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "2 pieces broasted chicken, 200g fries, 50g garlic dip, bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 15,
        name: { ar: "وجبة بروستد رقم (2) - 3 قطع دجاج", en: "Broasted Meal #2 (3 Pcs)" },
        category: "broasted",
        price: 3.00,
        desc: { 
            ar: "3 قطع دجاج بروستد، بطاطا 200غم، ثومية 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "3 pieces broasted chicken, 200g fries, 50g garlic dip, bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 16,
        name: { ar: "وجبة بروستد رقم (3) - 4 قطع دجاج", en: "Broasted Meal #3 (4 Pcs)" },
        category: "broasted",
        price: 3.65,
        desc: { 
            ar: "4 قطع دجاج بروستد، بطاطا 200غم، ثومية 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "4 pieces broasted chicken, 200g fries, 50g garlic dip, bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 17,
        name: { ar: "وجبة بروستد رقم (4) - 9 قطع (دجاجة كاملة)", en: "Broasted Meal #4 (9 Pcs - Whole Chicken)" },
        category: "broasted",
        price: 7.00,
        desc: { 
            ar: "9 قطع دجاج بروستد، بطاطا 400غم، ثومية 50غم، خبز، علبة ماتريكس 250مل، كاتشاب وسلطة كولسلو 100غم", 
            en: "9 pieces broasted chicken, 400g fries, 50g garlic dip, bread, Matrix 250ml, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 18,
        name: { ar: "وجبة بروستد رقم (5) - 15 قطعة (دجاجة ونصف)", en: "Broasted Meal #5 (15 Pcs)" },
        category: "broasted",
        price: 10.75,
        desc: { 
            ar: "15 قطعة دجاج بروستد، بطاطا 400غم، ثومية 50غم، 5 خبز، علبة ماتريكس 2 لتر، كاتشاب وسلطة كولسلو 100غم", 
            en: "15 pieces broasted chicken, 400g fries, 50g garlic dip, 5 bread, Matrix 2L, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "حجم عائلي", en: "Family Size" }
    },
    {
        id: 19,
        name: { ar: "وجبة بروستد رقم (6) - 15 قطعة (دجاج وعظم)", en: "Broasted Meal #6 (15 Pcs - Bone-In)" },
        category: "broasted",
        price: 14.20,
        desc: { 
            ar: "15 قطعة دجاج وعظم بروستد مع البطاطا المقلية، الثومية والخبز ومشروب عائلي", 
            en: "15 pieces bone-in broasted chicken served with fries, garlic dip, bread & family size drink" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 20,
        name: { ar: "وجبة بروستد رقم (7) - 20 قطعة (دجاج وعظم)", en: "Broasted Meal #7 (20 Pcs - Bone-In)" },
        category: "broasted",
        price: 17.50,
        desc: { 
            ar: "20 قطعة دجاج وعظم بروستد، بطاطا 400غم، ثومية 50غم، 8 خبز، علبة ماتريكس 2 لتر، كاتشاب وسلطة كولسلو 100غم", 
            en: "20 pieces bone-in broasted chicken, 400g fries, 50g garlic, 8 bread, Matrix 2L, ketchup & 100g coleslaw" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 21,
        name: { ar: "وجبة بروستد رقم (8) - 24 قطعة (دجاج وعظم)", en: "Broasted Meal #8 (24 Pcs - Bone-In)" },
        category: "broasted",
        price: 20.50,
        desc: { 
            ar: "24 قطعة دجاج وعظم بروستد، بطاطا 400غم، 4 علب ثومية 50غم، 10 خبز، علبة ماتريكس 2 لتر، كاتشاب وسلطة كولسلو 100غم", 
            en: "24 pieces bone-in broasted chicken, 400g fries, 4x 50g garlic, 10 bread, Matrix 2L, ketchup & 100g coleslaw" 
        },
        icon: "fa-fire",
        badge: { ar: "الأضخم للجمعات", en: "Mega Feast" }
    },

    // Category: shawarma (الشاورما والساندويشات)
    {
        id: 22,
        name: { ar: "شاورما عادي (60 غم)", en: "Regular Shawarma Sandwich (60g)" },
        category: "shawarma",
        price: 0.65,
        desc: { 
            ar: "ساندويش شاورما دجاج كلاسيك بالخبز العربي والتومية والمخلل", 
            en: "Classic chicken shawarma sandwich in Arabic pita with garlic sauce & pickles" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 23,
        name: { ar: "شاورما سوبر (120 غم)", en: "Super Shawarma Sandwich (120g)" },
        category: "shawarma",
        price: 1.25,
        desc: { 
            ar: "ساندويش شاورما حجم سوبر غني بالثومية والمخلل في خبز الشراك", 
            en: "Super chicken shawarma sandwich wrapped in Shrak bread with garlic & pickles" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 24,
        name: { ar: "ساندويش شيش طاووق (120 غم)", en: "Shish Tawook Sandwich (120g)" },
        category: "shawarma",
        price: 1.30,
        desc: { 
            ar: "ساندويش قطع شيش طاووق دجاج مشوية على الفحم مع الثومية والبطاطا والمخلل", 
            en: "Charcoal grilled shish tawook chicken cubes wrapped in bread with garlic, fries & pickles" 
        },
        icon: "fa-bread-slice",
        badge: { ar: "", en: "" }
    },
    {
        id: 25,
        name: { ar: "ساندويش شاورما فرنسي (100 غم)", en: "French Shawarma Sandwich (100g)" },
        category: "shawarma",
        price: 1.30,
        desc: { 
            ar: "ساندويش شاورما دجاج بالخبز الفرنسي المحمص الخاص مع الثومية", 
            en: "Chicken shawarma sandwich in toasted French baguette with garlic sauce" 
        },
        icon: "fa-bread-slice",
        badge: { ar: "", en: "" }
    },
    {
        id: 26,
        name: { ar: "ساندويش هامر (200 غم)", en: "Hammer Sandwich (200g)" },
        category: "shawarma",
        price: 1.75,
        desc: { 
            ar: "ساندويش هامر المميز الغني بالدجاج والجبنة والبطاطس المقرمشة", 
            en: "Signature Hammer chicken sandwich packed with melted cheese & fries" 
        },
        icon: "fa-cheese",
        badge: { ar: "جديد", en: "New" }
    },
    {
        id: 27,
        name: { ar: "ساندويش سوبر زنجر (120 غم)", en: "Super Zinger Sandwich (120g)" },
        category: "shawarma",
        price: 1.30,
        desc: { 
            ar: "قطع صدر دجاج زنجر مقرمش وحار مع الخس والمايونيز والجبنة", 
            en: "Crispy spicy chicken zinger sandwich with lettuce, mayo & cheese" 
        },
        icon: "fa-pepper-hot",
        badge: { ar: "", en: "" }
    },
    {
        id: 28,
        name: { ar: "وجبة شاورما عادي (120 غم)", en: "Regular Shawarma Meal (120g)" },
        category: "shawarma",
        price: 2.00,
        desc: { 
            ar: "وجبة شاورما عربي مقطعة تقدم مع بطاطس 200غم، مخلل، صوص خضار وكاتشب", 
            en: "Sliced Arabic shawarma served with 200g fries, pickles, vegetable sauce & ketchup" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 29,
        name: { ar: "وجبة شاورما فرنسي (100 غم)", en: "French Shawarma Meal (100g)" },
        category: "shawarma",
        price: 2.10,
        desc: { 
            ar: "ساندويش شاورما بالخبز الفرنسي مقطع يقدم مع بطاطس مقلية متبلة ومقبلات وصوص شاورما", 
            en: "Sliced French bread shawarma sandwich served with seasoned fries, pickles & shawarma sauce" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 30,
        name: { ar: "وجبة الهامر (200 غم)", en: "Hammer Sandwich Meal (200g)" },
        category: "shawarma",
        price: 2.90,
        desc: { 
            ar: "وجبة ساندويش هامر دجاج وجبنة مقطع يقدم مع البطاطس المقلية المتبلة والمايونيز", 
            en: "Sliced Hammer chicken & cheese sandwich meal served with seasoned fries & mayo" 
        },
        icon: "fa-box",
        badge: { ar: "الأكثر طلباً", en: "Best Seller" }
    },
    {
        id: 31,
        name: { ar: "وجبة الزنجر (120 غم)", en: "Zinger Sandwich Meal (120g)" },
        category: "shawarma",
        price: 2.25,
        desc: { 
            ar: "وجبة ساندويش زنجر دجاج مقرمش حار يقدم مع بطاطس مقلية 200 غم ومشروب ماتريكس 250 مل", 
            en: "Crispy spicy chicken zinger meal served with 200g fries & Matrix 250ml" 
        },
        icon: "fa-pepper-hot",
        badge: { ar: "", en: "" }
    },
    {
        id: 32,
        name: { ar: "وجبة شاورما سوبر (180 غم)", en: "Super Shawarma Meal (180g)" },
        category: "shawarma",
        price: 2.75,
        desc: { 
            ar: "وجبة شاورما سوبر عربي مقطع، تقدم مع بطاطس 200 غم، مخلل، 2 صوص، خس وكاتشب", 
            en: "Sliced super shawarma meal served with 200g fries, pickles, 2 sauces, lettuce & ketchup" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 33,
        name: { ar: "وجبة شاورما دبل (240 غم)", en: "Double Shawarma Meal (240g)" },
        category: "shawarma",
        price: 3.40,
        desc: { 
            ar: "وجبة شاورما عربي دبل، تقدم مع بطاطس 200 غم، مخلل، 2 صوص، خس وكاتشب", 
            en: "Double sliced Arabic shawarma meal with 200g fries, pickles, 2 sauces, lettuce & ketchup" 
        },
        icon: "fa-boxes-stacked",
        badge: { ar: "عائلي خفيف", en: "Mini Family" }
    },
    {
        id: 34,
        name: { ar: "وجبة شاورما تريبل (360 غم)", en: "Triple Shawarma Meal (360g)" },
        category: "shawarma",
        price: 4.60,
        desc: { 
            ar: "وجبة شاورما عربي تريبل ضخمة، تقدم مع بطاطس 200 غم، مخلل، 2 صوص، خس وكاتشب", 
            en: "Triple sliced Arabic shawarma meal with 200g fries, pickles, 2 sauces, lettuce & ketchup" 
        },
        icon: "fa-boxes-stacked",
        badge: { ar: "مشبعة جداً", en: "Mega Portion" }
    },

    // Category: burgers (البرجر وجبات الأطفال)
    {
        id: 35,
        name: { ar: "وجبة برجر للأطفال", en: "Kids Burger Meal" },
        category: "burgers",
        price: 1.95,
        desc: { 
            ar: "ساندويش برجر صدر دجاج 100 غم مع عصير 250 مل وبطاطا 200 غرام ولعبة هدية للأطفال", 
            en: "100g chicken breast burger sandwich served with 250ml juice, 200g fries & a free toy" 
        },
        icon: "fa-child-reaching",
        badge: { ar: "وجبة طفل", en: "Kids Special" }
    },
    {
        id: 36,
        name: { ar: "ساندويش برجر هني ماسترد (120 غم)", en: "Honey Mustard Burger Sandwich (120g)" },
        category: "burgers",
        price: 1.85,
        desc: { 
            ar: "ساندويش صدر دجاج مقرمش 120 غم مع الخس، جبنة الموزاريلا وصوص الهني ماسترد الخاص", 
            en: "120g crispy chicken breast sandwich with lettuce, mozzarella cheese & signature honey mustard sauce" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 37,
        name: { ar: "وجبة برجر هني ماسترد", en: "Honey Mustard Burger Meal" },
        category: "burgers",
        price: 2.80,
        desc: { 
            ar: "وجبة صدر دجاج هني ماسترد تقدم مع بطاطس هني ماسترد متبلة، صوص هني ماسترد وعلبة ماتريكس", 
            en: "Honey mustard chicken burger meal served with seasoned fries, extra sauce & Matrix can" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 38,
        name: { ar: "ساندويش برجر ترند (120 غم)", en: "Trend Burger Sandwich (120g)" },
        category: "burgers",
        price: 1.85,
        desc: { 
            ar: "ساندويش صدر دجاج مقرمش 120 غم مع الجبن والجرجير والصوص الخاص بالخبز المحمص", 
            en: "120g crispy chicken breast sandwich with cheese, arugula & special sauce in toasted bun" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 39,
        name: { ar: "وجبة برجر ترند", en: "Trend Burger Meal" },
        category: "burgers",
        price: 2.80,
        desc: { 
            ar: "وجبة صدر دجاج ترند تقدم مع بطاطس ترند متبلة، صوص ترند وعلبة ماتريكس", 
            en: "Trend chicken burger meal served with seasoned Trend fries, special sauce & Matrix can" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 40,
        name: { ar: "ساندويش برجر سبايسي كرنش (120 غم)", en: "Spicy Crunch Burger Sandwich (120g)" },
        category: "burgers",
        price: 1.85,
        desc: { 
            ar: "ساندويش صدر دجاج سبايسي مقرمش وحار 120 غم مع الخس، الجبنة والبهارات الحارة", 
            en: "120g extra crispy spicy chicken breast sandwich with lettuce, cheese & hot spices" 
        },
        icon: "fa-pepper-hot",
        badge: { ar: "", en: "" }
    },
    {
        id: 41,
        name: { ar: "وجبة برجر سبايسي كرنش", en: "Spicy Crunch Burger Meal" },
        category: "burgers",
        price: 2.80,
        desc: { 
            ar: "وجبة صدر دجاج سبايسي كرنش تقدم مع بطاطس سبايسي متبلة، صوص حار وعلبة ماتريكس", 
            en: "Spicy Crunch chicken burger meal served with seasoned spicy fries, hot sauce & Matrix can" 
        },
        icon: "fa-pepper-hot",
        badge: { ar: "حار", en: "Spicy" }
    },
    {
        id: 42,
        name: { ar: "ساندويش برجر باربيكيو (120 غم)", en: "BBQ Burger Sandwich (120g)" },
        category: "burgers",
        price: 1.85,
        desc: { 
            ar: "ساندويش صدر دجاج مقرمش 120 غم غني بجبنة الشيدر وصوص الباربيكيو المدخن", 
            en: "120g crispy chicken breast sandwich with cheddar cheese & smoky BBQ sauce" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },
    {
        id: 43,
        name: { ar: "وجبة برجر باربيكيو", en: "BBQ Burger Meal" },
        category: "burgers",
        price: 2.80,
        desc: { 
            ar: "وجبة صدر دجاج باربيكيو تقدم مع بطاطس باربيكيو متبلة، صوص باربيكيو وعلبة ماتريكس", 
            en: "BBQ chicken burger meal served with seasoned BBQ fries, extra sauce & Matrix can" 
        },
        icon: "fa-burger",
        badge: { ar: "", en: "" }
    },

    // Category: family (وجبات عالي العائلية)
    {
        id: 44,
        name: { ar: "وجبة شاورما عالي (1) - 6 ساندويشات", en: "Aali 1 Family Meal (6 Sandwiches)" },
        category: "family",
        price: 10.25,
        desc: { 
            ar: "وجبة شاورما عائلية تتكون من 6 ساندويشات شاورما مقطعة مع سرفيس بطاطس، صوصات وكاتشب وماتريكس", 
            en: "Family shawarma platter of 6 sliced sandwiches served with fries, dipping sauces, ketchup & Matrix" 
        },
        icon: "fa-people-group",
        badge: { ar: "عائلي", en: "Family Choice" }
    },
    {
        id: 45,
        name: { ar: "وجبة شاورما عالي (2) - 8 ساندويشات", en: "Aali 2 Family Meal (8 Sandwiches)" },
        category: "family",
        price: 13.50,
        desc: { 
            ar: "وجبة شاورما عائلية كبرى من 8 ساندويشات شاورما مقطعة مع سرفيس بطاطس دبل، صوصات ومقبلات ومشروب غازي", 
            en: "Large family shawarma platter of 8 sliced sandwiches with double fries, sauces, sides & drinks" 
        },
        icon: "fa-people-group",
        badge: { ar: "عائلي كبير", en: "Large Family" }
    },
    {
        id: 46,
        name: { ar: "وجبة شاورما عالي (3) - 10 ساندويشات", en: "Aali 3 Family Meal (10 Sandwiches)" },
        category: "family",
        price: 16.85,
        desc: { 
            ar: "وجبة شاورما عائلية ضخمة تتكون من 10 ساندويشات شاورما مقطعة مع صنفين سرفيس بطاطس وصحن سرفيس صوصات كامل ومشروبات عائلية", 
            en: "Mega family shawarma platter of 10 sliced sandwiches with two fries platters, complete dipping sides & family drinks" 
        },
        icon: "fa-crown",
        badge: { ar: "الأضخم للشاورما", en: "Shawarma Feast" }
    },

    // Category: wings (الوينجز والبوبس)
    {
        id: 47,
        name: { ar: "وجبة وينجز 6 قطع", en: "6 Pcs Chicken Wings Meal" },
        category: "wings",
        price: 1.95,
        desc: { 
            ar: "6 قطع أجنحة دجاج مقرمشة مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "6 pieces of crispy chicken wings served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 48,
        name: { ar: "وجبة وينجز 10 قطع", en: "10 Pcs Chicken Wings Meal" },
        category: "wings",
        price: 2.50,
        desc: { 
            ar: "10 قطع أجنحة دجاج مقرمشة مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "10 pieces of crispy chicken wings served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 49,
        name: { ar: "وجبة وينجز 16 قطعة", en: "16 Pcs Chicken Wings Meal" },
        category: "wings",
        price: 3.55,
        desc: { 
            ar: "16 قطعة أجنحة دجاج مقرمشة مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "16 pieces of crispy chicken wings served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "قيمة عالية", en: "Great Value" }
    },
    {
        id: 50,
        name: { ar: "8 قطع وينجز سادة", en: "8 Pcs Chicken Wings (Plain)" },
        category: "wings",
        price: 1.20,
        desc: { 
            ar: "8 قطع أجنحة دجاج مقرمشة سادة بدون إضافات", 
            en: "8 pieces of crispy chicken wings served plain" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 51,
        name: { ar: "10 قطع وينجز سادة", en: "10 Pcs Chicken Wings (Plain)" },
        category: "wings",
        price: 1.75,
        desc: { 
            ar: "10 قطع أجنحة دجاج مقرمشة سادة بدون إضافات", 
            en: "10 pieces of crispy chicken wings served plain" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 52,
        name: { ar: "16 قطعة وينجز سادة", en: "16 Pcs Chicken Wings (Plain)" },
        category: "wings",
        price: 2.75,
        desc: { 
            ar: "16 قطعة أجنحة دجاج مقرمشة سادة بدون إضافات", 
            en: "16 pieces of crispy chicken wings served plain" 
        },
        icon: "fa-drumstick-bite",
        badge: { ar: "", en: "" }
    },
    {
        id: 53,
        name: { ar: "وجبة بوبس 6 قطع", en: "6 Pcs Chicken Bites Meal" },
        category: "wings",
        price: 2.00,
        desc: { 
            ar: "6 قطع بوبس دجاج مقرمش (بايتس) مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "6 pieces crispy chicken bites served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 54,
        name: { ar: "وجبة بوبس 10 قطع", en: "10 Pcs Chicken Bites Meal" },
        category: "wings",
        price: 2.55,
        desc: { 
            ar: "10 قطع بوبس دجاج مقرمش (بايتس) مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "10 pieces crispy chicken bites served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 55,
        name: { ar: "وجبة بوبس 16 قطعة", en: "16 Pcs Chicken Bites Meal" },
        category: "wings",
        price: 3.60,
        desc: { 
            ar: "16 قطع بوبس دجاج مقرمش (بايتس) مع علبة ماتريكس 250 مل وبطاطا مقلية 200 غم", 
            en: "16 pieces crispy chicken bites served with Matrix 250ml & 200g fries" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 56,
        name: { ar: "6 قطع بوبس سادة", en: "6 Pcs Chicken Bites (Plain)" },
        category: "wings",
        price: 1.25,
        desc: { 
            ar: "6 قطع بوبس دجاج مقرمش (بايتس) سادة بدون إضافات", 
            en: "6 pieces crispy chicken bites served plain" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 57,
        name: { ar: "10 قطع بوبس سادة", en: "10 Pcs Chicken Bites (Plain)" },
        category: "wings",
        price: 1.80,
        desc: { 
            ar: "10 قطع بوبس دجاج مقرمش (بايتس) سادة بدون إضافات", 
            en: "10 pieces crispy chicken bites served plain" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
    },
    {
        id: 58,
        name: { ar: "16 قطعة بوبس سادة", en: "16 Pcs Chicken Bites (Plain)" },
        category: "wings",
        price: 2.80,
        desc: { 
            ar: "16 قطع بوبس دجاج مقرمش (بايتس) سادة بدون إضافات", 
            en: "16 pieces crispy chicken bites served plain" 
        },
        icon: "fa-box",
        badge: { ar: "", en: "" }
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
    const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');
    if (!navLinks) return;
    
    const isOpen = navLinks.classList.toggle('active');
    if (mobileBtnIcon) {
        if (isOpen) {
            mobileBtnIcon.classList.remove('fa-bars');
            mobileBtnIcon.classList.add('fa-xmark');
        } else {
            mobileBtnIcon.classList.remove('fa-xmark');
            mobileBtnIcon.classList.add('fa-bars');
        }
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

    // Close mobile nav menu when clicking outside or clicking any nav link
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        if (!navLinks || !navLinks.classList.contains('active')) return;

        const isClickInsideMenu = navLinks.contains(e.target);
        const isClickOnBtn = mobileBtn && mobileBtn.contains(e.target);
        const isLinkClick = e.target.tagName === 'A' || e.target.closest('a');

        if (!isClickInsideMenu && !isClickOnBtn || (isClickInsideMenu && isLinkClick)) {
            navLinks.classList.remove('active');
            const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');
            if (mobileBtnIcon) {
                mobileBtnIcon.classList.remove('fa-xmark');
                mobileBtnIcon.classList.add('fa-bars');
            }
        }
    });
});
