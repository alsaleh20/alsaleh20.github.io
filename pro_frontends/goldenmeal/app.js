/* ==========================================================================
   GOLDEN MEAL - DYNAMIC INTERACTIVE LOGIC (OUT OF THE BOX BENTO SYSTEM)
   ========================================================================== */

// Translation Database
const i18n = {
    ar: {
        "brand-name": "الوجبة الذهبية",
        "nav-home": "الرئيسية",
        "nav-showcase": "الطبق الدوار",
        "nav-menu": "القائمة",
        "nav-branches": "الفروع",
        "hero-welcome": "🔥 طعم أصيل بلون الموجة الذهبية",
        "hero-title-1": "الوجبة الذهبية",
        "hero-title-2": "اختبر الطعم الأصلي",
        "hero-subtitle": "مرحباً بك في عالم المذاق المبتكر. شاورما مشوية بامتياز، بروستد ذهبي فائق القرمشة، ومشاوي بنكهات شرقية مميزة.",
        "hero-cta-order": "اطلب الآن 🚀",
        "hero-cta-branches": "الفروع 📍",
        "showcase-title": "الطبق الدوار التفاعلي",
        "stat-fresh": "طازج يومياً",
        "stat-experience": "عاماً من الخبرة",
        "stat-reviews": "تقييم العملاء",
        "cats-title": "اختر الفئة المفضلة",
        "products-title": "قائمة الطعام",
        "branches-title": "فروعنا المتاحة",
        "footer-news-title": "النشرة البريدية",
        "footer-news-desc": "اشترك لتلقي أحدث العروض والوجبات الحصرية.",
        "search-placeholder": "ابحث عن وجبة...",
        "cart-title": "سلة المشتريات",
        "cart-total": "المجموع الإجمالي:",
        "btn-checkout": "إرسال الطلب للواتساب",
        "jd": "د.ا",
        "added-success": "تمت إضافة الوجبة للسلة",
        "cart-empty": "السلة فارغة حالياً. اضف وجبتك المفضلة!"
    },
    en: {
        "brand-name": "Golden Meal",
        "nav-home": "Home",
        "nav-showcase": "Rotating Plate",
        "nav-menu": "Menu",
        "nav-branches": "Branches",
        "hero-welcome": "🔥 Authentic Taste & Golden Colors",
        "hero-title-1": "Golden Meal",
        "hero-title-2": "Test The Original Taste",
        "hero-subtitle": "Welcome to the world of innovative taste. Perfectly grilled shawarma, golden crispy broasted, and grills with special oriental flavors.",
        "hero-cta-order": "Order Now 🚀",
        "hero-cta-branches": "Branches 📍",
        "showcase-title": "Interactive Platter Showcase",
        "stat-fresh": "Fresh Daily",
        "stat-experience": "Years Experience",
        "stat-reviews": "Client Reviews",
        "cats-title": "Choose Category",
        "products-title": "Menu List",
        "branches-title": "Our Active Locations",
        "footer-news-title": "Newsletter Signup",
        "footer-news-desc": "Subscribe to receive latest offers and exclusive meals.",
        "search-placeholder": "Search meals...",
        "cart-title": "Shopping Cart",
        "cart-total": "Total Sum:",
        "btn-checkout": "Send Order to WhatsApp",
        "jd": "JD",
        "added-success": "Meal added successfully",
        "cart-empty": "Your cart is currently empty. Add some delicious meals!"
    }
};

// Interactive Platter Database
const platterItems = [
    {
        id: 1,
        nameAr: "بروستد الموجة الذهبية سوبر",
        nameEn: "Super Golden Broasted Chicken",
        descAr: "وجبة دجاج مقرمش طازج مع بطاطس وصوص الثومية المميز.",
        descEn: "Fresh crispy fried chicken meal served with fries and signature garlic dip.",
        price: 8.50,
        img: "assets/chicken_hero.jpg"
    },
    {
        id: 2,
        nameAr: "شاورما عربي دبل ذهبية",
        nameEn: "Golden Double Arabic Shawarma",
        descAr: "شاورما دجاج بخبز الصاج المحمص تعلوها الثومية والمخللات الفريش.",
        descEn: "Toasted chicken shawarma wrapped in saj bread, served with garlic paste and pickles.",
        price: 4.50,
        img: "assets/golden_meal_hero.jpg"
    }
];

// Products Database
const products = [
    {
        id: 1,
        category: 'chicken',
        nameAr: 'وجبة بروستد سوبر (8 قطع)',
        nameEn: 'Super Broasted Meal (8 Pcs)',
        descAr: '8 قطع دجاج مقلي ومقرمش بخلطتنا الحارة المميزة، بطاطا، ثومية، ومخللات.',
        descEn: '8 pieces of crispy fried chicken in our signature spicy blend, with fries, garlic dip, and pickles.',
        price: 8.50,
        emoji: '🍗'
    },
    {
        id: 2,
        category: 'shawarma',
        nameAr: 'وجبة شاورما دبل صاج عربي',
        nameEn: 'Double Saj Arabic Shawarma Meal',
        descAr: 'شاورما دجاج بخبز الصاج المحمص، مقطع ومقدم مع بطاطا وثومية ومخلل.',
        descEn: 'Toasted chicken shawarma in saj bread, sliced and served with fries, garlic sauce, and pickles.',
        price: 4.50,
        emoji: '🌯'
    },
    {
        id: 3,
        category: 'grills',
        nameAr: 'شيش طاووق على الفحم (صحن)',
        nameEn: 'Charcoal Grilled Shish Taouk Plate',
        descAr: 'شيش طاووق دجاج مشوي على الفحم متبل بالبهارات الشرقية الطازجة.',
        descEn: 'Charcoal grilled chicken shish taouk skewers seasoned with fresh oriental spices.',
        price: 6.50,
        emoji: '🍢'
    },
    {
        id: 4,
        category: 'rice',
        nameAr: 'أرز الوجبة الفخم مع الدجاج',
        nameEn: 'Premium Golden Rice with Chicken',
        descAr: 'أرز بسمتي مبهر بطريقتنا الخاصة يعلوه دجاج مشوي متبل ولذيذ ومكسرات.',
        descEn: 'Spiced basmati rice cooked in our style, topped with tasty seasoned grilled chicken and nuts.',
        price: 6.00,
        emoji: '🍛'
    },
    {
        id: 5,
        category: 'sandwich',
        nameAr: 'برجر زنجر الموجة الذهبية الفخم',
        nameEn: 'Premium Golden Zinger Burger',
        descAr: 'صدر دجاج مقرمش حار، خس، صوص جبنة شيدر، داخل خبز كايزر طازج.',
        descEn: 'Crispy spicy chicken breast, lettuce, cheddar cheese sauce, inside fresh kaiser bun.',
        price: 3.50,
        emoji: '🍔'
    },
    {
        id: 6,
        category: 'sides',
        nameAr: 'بطاطا مقرمشة مغطاة بالجبنة',
        nameEn: 'Crispy Cheese Loaded Fries',
        descAr: 'أصابع بطاطا مقلية مقرمشة مغطاة بصوص الجبنة الشيدر الدافئ.',
        descEn: 'Crispy french fries loaded with warm cheddar cheese sauce.',
        price: 2.50,
        emoji: '🍟'
    }
];

// App State
let currentLang = 'ar';
let selectedCategory = 'all';
let searchQuery = '';
let cart = [];
let rotationDegree = 0;
let activePlatterIndex = 0;

// Document Ready Setup
document.addEventListener("DOMContentLoaded", () => {
    initCursorAndGlow();
    initLanguage();
    initSearch();
    renderCategories();
    renderProducts();
    initPlatterShowcase();
    initBranches();
    initNewsletter();
    initCartCheckout();
});

// Ambient Glow and Cyber Cursor Coordinates Tracking
function initCursorAndGlow() {
    const glow = document.getElementById("ambient-mouse-glow");
    const cursor = document.getElementById("custom-cursor");
    const cursorDot = document.getElementById("custom-cursor-dot");

    window.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        if (glow) {
            glow.style.left = x + "px";
            glow.style.top = y + "px";
        }
        if (cursor && cursorDot) {
            cursor.style.left = x + "px";
            cursor.style.top = y + "px";
            cursorDot.style.left = x + "px";
            cursorDot.style.top = y + "px";
        }
    });

    // Hover Scaling effect
    const interactiveEls = document.querySelectorAll("a, button, .bento-cat-item, .bento-loc-btn, .btn-bento-add");
    interactiveEls.forEach(el => {
        el.addEventListener("mouseenter", () => {
            if(cursor) {
                cursor.style.width = "45px";
                cursor.style.height = "45px";
                cursor.style.borderColor = "var(--color-red)";
                cursor.style.backgroundColor = "rgba(196, 30, 58, 0.08)";
            }
        });
        el.addEventListener("mouseleave", () => {
            if(cursor) {
                cursor.style.width = "30px";
                cursor.style.height = "30px";
                cursor.style.borderColor = "var(--color-gold)";
                cursor.style.backgroundColor = "transparent";
            }
        });
    });
}

// Multilingual Switching
function initLanguage() {
    const btn = document.getElementById("lang-switch");
    btn.addEventListener("click", () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        translateDOM();
    });

    translateDOM();
}

function translateDOM() {
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if(i18n[currentLang][key]) {
            if(el.tagName === "INPUT") {
                el.placeholder = i18n[currentLang][key];
            } else {
                el.innerText = i18n[currentLang][key];
            }
        }
    });

    const html = document.documentElement;
    if(currentLang === 'ar') {
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
        document.getElementById("lang-text").innerText = "EN";
    } else {
        html.setAttribute("lang", "en");
        html.setAttribute("dir", "ltr");
        document.getElementById("lang-text").innerText = "AR";
    }

    renderCategories();
    renderProducts();
    updatePlatterDetails();
    renderCart();
}

// Search input bindings
function initSearch() {
    const searchInput = document.getElementById("bento-search");
    if(searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }
}

// Interactive Categories Renderer
function renderCategories() {
    const list = document.getElementById("bento-categories-list");
    if(!list) return;
    list.innerHTML = "";

    const categories = [
        { id: 'all', nameAr: 'الكل', nameEn: 'All' },
        { id: 'shawarma', nameAr: 'شاورما', nameEn: 'Shawarma' },
        { id: 'chicken', nameAr: 'بروستد ودجاج', nameEn: 'Fried Chicken' },
        { id: 'grills', nameAr: 'مشاوي', nameEn: 'Grills' },
        { id: 'rice', nameAr: 'أرز الوجبة', nameEn: 'Rice Meals' },
        { id: 'sandwich', nameAr: 'ساندويشات', nameEn: 'Sandwiches' },
        { id: 'sides', nameAr: 'جوانب ومقبلات', nameEn: 'Sides' }
    ];

    categories.forEach(cat => {
        const item = document.createElement("div");
        item.className = `bento-cat-item ${selectedCategory === cat.id ? 'active' : ''}`;
        item.innerText = currentLang === 'ar' ? cat.nameAr : cat.nameEn;

        item.addEventListener("click", () => {
            selectedCategory = cat.id;
            document.querySelectorAll(".bento-cat-item").forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            renderProducts();

            // Interactive Plate Spinning Action
            rotatePlateMockup();
        });

        list.appendChild(item);
    });
}

function rotatePlateMockup() {
    const plate = document.getElementById("interactive-plate");
    if(plate) {
        rotationDegree += 180;
        plate.style.transform = `rotate(${rotationDegree}deg)`;
        
        // Toggle platter item content
        activePlatterIndex = activePlatterIndex === 0 ? 1 : 0;
        setTimeout(() => {
            updatePlatterDetails();
        }, 300);
    }
}

// Interactive Plate Content Updater
function initPlatterShowcase() {
    const addBtn = document.getElementById("add-platter-to-cart");
    if(addBtn) {
        addBtn.addEventListener("click", () => {
            const currentItem = platterItems[activePlatterIndex];
            addToCart(currentItem.id === 1 ? 1 : 2); // Map to products ID 1 or 2
        });
    }
    updatePlatterDetails();
}

function updatePlatterDetails() {
    const item = platterItems[activePlatterIndex];
    const titleEl = document.getElementById("platter-item-title");
    const descEl = document.getElementById("platter-item-desc");
    const priceEl = document.getElementById("platter-item-price");
    const imgEl = document.getElementById("plate-food-img");

    if(titleEl && descEl && priceEl && imgEl) {
        titleEl.innerText = currentLang === 'ar' ? item.nameAr : item.nameEn;
        descEl.innerText = currentLang === 'ar' ? item.descAr : item.descEn;
        priceEl.innerText = `${item.price.toFixed(2)} ${i18n[currentLang]["jd"]}`;
        imgEl.src = item.img;
    }
}

// Render Products Menu List
function renderProducts() {
    const container = document.getElementById("bento-products-container");
    const countBadge = document.getElementById("menu-items-count");
    if(!container) return;
    container.innerHTML = "";

    let filtered = products;

    if(selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if(searchQuery !== '') {
        filtered = filtered.filter(p => {
            const arName = p.nameAr.toLowerCase();
            const enName = p.nameEn.toLowerCase();
            return arName.includes(searchQuery) || enName.includes(searchQuery);
        });
    }

    if(countBadge) {
        countBadge.innerText = currentLang === 'ar' 
            ? `${filtered.length} وجبة` 
            : `${filtered.length} meals`;
    }

    const jd = i18n[currentLang]["jd"];

    filtered.forEach(p => {
        const title = currentLang === 'ar' ? p.nameAr : p.nameEn;
        const desc = currentLang === 'ar' ? p.descAr : p.descEn;

        const card = document.createElement("div");
        card.className = "bento-prod-card";
        card.innerHTML = `
            <div class="bento-prod-icon">${p.emoji}</div>
            <div class="bento-prod-details">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="bento-prod-footer">
                    <span class="bento-prod-price">${p.price.toFixed(2)} ${jd}</span>
                    <button class="btn-bento-add" onclick="addToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Cart System Implementation
window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);

    if(existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    renderCart();
    showBentoToast(i18n[currentLang]["added-success"]);
};

function renderCart() {
    const counter = document.getElementById("cart-counter");
    const wrapper = document.getElementById("bento-cart-wrapper");
    const totalEl = document.getElementById("bento-cart-total");

    const totalQty = cart.reduce((acc, c) => acc + c.qty, 0);
    const totalPrice = cart.reduce((acc, c) => acc + (c.price * c.qty), 0);

    if(counter) counter.innerText = totalQty;
    if(totalEl) totalEl.innerText = `${totalPrice.toFixed(2)} ${i18n[currentLang]["jd"]}`;

    if(!wrapper) return;
    wrapper.innerHTML = "";

    if(cart.length === 0) {
        wrapper.innerHTML = `<div class="cart-empty-state">${i18n[currentLang]["cart-empty"]}</div>`;
        return;
    }

    cart.forEach(item => {
        const title = currentLang === 'ar' ? item.nameAr : item.nameEn;
        const row = document.createElement("div");
        row.className = "bento-cart-row";
        row.innerHTML = `
            <div class="bento-cart-info">
                <h5>${item.emoji} ${title}</h5>
                <span>${(item.price * item.qty).toFixed(2)} ${i18n[currentLang]["jd"]}</span>
            </div>
            <div class="bento-cart-controls">
                <button class="bento-cart-btn-qty" onclick="changeQty(${item.id}, -1)"><i class="fa-solid fa-minus"></i></button>
                <span class="qty-val">${item.qty}</span>
                <button class="bento-cart-btn-qty" onclick="changeQty(${item.id}, 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
        `;
        wrapper.appendChild(row);
    });
}

window.changeQty = function(id, delta) {
    const item = cart.find(c => c.id === id);
    if(item) {
        item.qty += delta;
        if(item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
        renderCart();
    }
};

// WhatsApp Order Integration
function initCartCheckout() {
    const btn = document.getElementById("bento-checkout-btn");
    const headerCartBtn = document.getElementById("open-cart-btn");
    
    // Smooth scrolling to cart preview box on clicking header cart icon
    if(headerCartBtn) {
        headerCartBtn.addEventListener("click", () => {
            const previewCard = document.querySelector(".bento-cart-preview");
            if(previewCard) {
                previewCard.scrollIntoView({ behavior: 'smooth' });
                // Quick flash glow highlight on cart card
                previewCard.style.borderColor = 'var(--color-gold)';
                setTimeout(() => {
                    previewCard.style.borderColor = 'var(--color-border)';
                }, 1000);
            }
        });
    }

    if(btn) {
        btn.addEventListener("click", () => {
            if(cart.length === 0) {
                alert(i18n[currentLang]["cart-empty"]);
                return;
            }

            const activeBranchEl = document.querySelector(".bento-loc-btn.active");
            const branchName = activeBranchEl ? activeBranchEl.querySelector("h4").innerText : "صويلح";

            let text = currentLang === 'ar'
                ? `*طلب جديد - موقع الوجبة الذهبية* 🍗\n\n*الفرع المفضل:* ${branchName}\n*الوجبات المطلوبة:*\n`
                : `*New Order - Golden Meal Website* 🍗\n\n*Preferred Branch:* ${branchName}\n*Requested Items:*\n`;

            cart.forEach(item => {
                const name = currentLang === 'ar' ? item.nameAr : item.nameEn;
                text += `• ${item.emoji} ${name} (x${item.qty}) -> ${(item.price * item.qty).toFixed(2)} JD\n`;
            });

            const totalPrice = cart.reduce((acc, c) => acc + (c.price * c.qty), 0);
            text += `\n*${i18n[currentLang]["cart-total"]}* ${totalPrice.toFixed(2)} JD`;

            const phone = "962770437300"; // Primary WhatsApp Number
            const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
            window.open(waUrl, "_blank");
        });
    }
}

// Branch Map Selector simulation
function initBranches() {
    const buttons = document.querySelectorAll(".bento-loc-btn");
    const mapAmman = document.getElementById("bento-map-amman");
    const mapSalt = document.getElementById("bento-map-salt");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const branch = btn.getAttribute("data-branch");
            if(branch === 'amman') {
                mapAmman.classList.remove("hidden");
                mapSalt.classList.add("hidden");
            } else {
                mapSalt.classList.remove("hidden");
                mapAmman.classList.add("hidden");
            }
        });
    });
}

// Newsletter Simulation
function initNewsletter() {
    const form = document.getElementById("bento-news-form");
    const status = document.getElementById("news-status-msg");

    if(!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        status.className = "news-status success";
        status.innerText = currentLang === 'ar'
            ? "تم اشتراكك بنجاح!"
            : "Successfully subscribed!";
        form.reset();
        setTimeout(() => { status.innerText = ""; }, 4000);
    });
}

// Immersive Bento Toast Notifications
function showBentoToast(msg) {
    const toast = document.createElement("div");
    toast.className = "bento-toast";
    toast.innerText = msg;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: 'var(--color-red)',
        color: 'white',
        padding: '12px 28px',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '13px',
        zIndex: '100000',
        boxShadow: '0 5px 20px rgba(196,30,58,0.4)',
        border: '1px solid var(--color-gold)',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}
