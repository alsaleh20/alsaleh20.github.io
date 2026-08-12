/**
 * Ali's Restaurant (Abu Nseir, Jordan) - Single Unified JavaScript File
 * Designed for GitHub Pages Portfolio Deployment
 * Includes MVC Data Model, SPA Page Switcher, Dynamic Rendering & Toast Notifications
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. MODEL DATA & CARTS
  // ==========================================================================
  const AppModel = {
    currency: 'د.أ',

    categories: [
      { id: 'all', name: 'الكل' },
      { id: 'broasted', name: 'البروستد' },
      { id: 'tenders', name: 'وجبات التندر' },
      { id: 'shawarma', name: 'الشاورما' },
      { id: 'chicken_burgers', name: 'برجر وساندويتشات دجاج' },
      { id: 'beef_burgers', name: 'برجر لحم مشوي' },
      { id: 'wraps', name: 'ساندويتشات وراپ' },
      { id: 'wings_nuggets', name: 'أجنحة وناجت' },
      { id: 'rice', name: 'وجبات الأرز' },
      { id: 'kids', name: 'وجبات الأطفال' },
      { id: 'sides_drinks', name: 'المقبلات والصوصات والمشروبات' }
    ],

    dishes: [
      // البروستد
      { id: 101, name: 'كومبو 5 (2 قطع بروستد)', category: 'broasted', price: 2.75, badge: 'فردي', image: 'images/crispy_chicken_bucket.png', desc: 'قطعتان بروستد + بطاطا صغير + بسكت + كولسلو + مثومة + مشروب غازي' },
      { id: 102, name: 'كومبو 6 (4 قطع بروستد)', category: 'broasted', price: 3.75, badge: 'فردي', image: 'images/crispy_chicken_bucket.png', desc: '4 قطع بروستد + بطاطا صغير + بسكت + كولسلو + مثومة + مشروب غازي' },
      { id: 103, name: 'بروستد عائلي 8 قطع', category: 'broasted', price: 7.50, badge: 'عائلي', image: 'images/crispy_chicken_bucket.png', desc: '8 قطع بروستد + بطاطا كبير + 2 بسكت + 2 كولسلو + 2 مثومة + 2 مشروب غازي' },
      { id: 104, name: 'بروستد عائلي 12 قطعة', category: 'broasted', price: 11.25, badge: 'عائلي', image: 'images/crispy_chicken_bucket.png', desc: '12 قطعة بروستد + بطاطا عائلي + 3 بسكت + 3 كولسلو + 3 مثومة + 3 مشروب غازي' },
      { id: 105, name: 'بروستد عائلي 16 قطعة', category: 'broasted', price: 14.25, badge: 'عائلي', image: 'images/crispy_chicken_bucket.png', desc: '16 قطعة بروستد + بطاطا عائلي + 4 بسكت + 4 كولسلو + 4 مثومة + 4 مشروب غازي' },
      { id: 106, name: 'بروستد عائلي 20 قطعة', category: 'broasted', price: 17.25, badge: 'عائلي', image: 'images/crispy_chicken_bucket.png', desc: '20 قطعة بروستد + بطاطا عائلي + 5 بسكت + 5 كولسلو + 5 مثومة + 5 مشروب غازي' },
      { id: 107, name: 'الوجبة الاقتصادية العائلية الشاملة', category: 'broasted', price: 14.95, badge: 'عرض توفير', image: 'images/crispy_chicken_bucket.png', desc: '12 قطعة بروستد + 12 تندر + بطاطا عائلي + 4 بسكت + 4 كولسلو + 4 مثومة' },

      // التندر
      { id: 201, name: 'تندر كومبو 1 (3 قطع)', category: 'tenders', price: 3.00, badge: '100% صدر دجاج', image: 'images/fresh_chicken_strips.png', desc: '3 قطع تندر + بطاطا صغير + بسكت + كولسلو + مثومة + مشروب غازي' },
      { id: 202, name: 'تندر كومبو 2 (5 قطع)', category: 'tenders', price: 3.75, badge: '100% صدر دجاج', image: 'images/fresh_chicken_strips.png', desc: '5 قطع تندر + بطاطا صغير + بسكت + كولسلو + مثومة + مشروب غازي' },
      { id: 203, name: 'تندر كومبو 3 (8 قطع)', category: 'tenders', price: 5.90, badge: '100% صدر دجاج', image: 'images/fresh_chicken_strips.png', desc: '8 قطع تندر + بطاطا كبير + 2 بسكت + 2 كولسلو + 2 مثومة + 2 مشروب غازي' },
      { id: 204, name: 'تندر كومبو 4 (20 قطعة عائلي)', category: 'tenders', price: 13.50, badge: 'عائلي', image: 'images/fresh_chicken_strips.png', desc: '20 قطعة تندر + بطاطا عائلي + 4 بسكت + 4 كولسلو + 4 مثومة + 4 مشروب غازي' },

      // الشاورما
      { id: 301, name: 'ساندويتش شاورما عادي', category: 'shawarma', price: 0.65, badge: 'شاورما', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش شاورما دجاج طازجة بتتبيلة عليز الخاصة' },
      { id: 302, name: 'ساندويتش شاورما سوبر', category: 'shawarma', price: 1.25, badge: 'شاورما', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش شاورما سوبر حجم كبير طازج' },
      { id: 303, name: '200 غرام شاورما دجاج', category: 'shawarma', price: 2.60, badge: 'بالفرط', image: 'images/chicken_burger_meal.png', desc: '200 غرام صحن شاورما دجاج طازج مع المثومة والمخلل' },
      { id: 304, name: 'وجبة عليز شاورما فردي', category: 'shawarma', price: 2.00, badge: 'وجبة', image: 'images/chicken_burger_meal.png', desc: 'وجبة شاورما فردي تقدم مع البطاطا والمثومة والمخلل' },
      { id: 305, name: 'وجبة عليز شاورما سوبر', category: 'shawarma', price: 2.90, badge: 'وجبة', image: 'images/chicken_burger_meal.png', desc: 'وجبة شاورما سوبر مع بطاطا ومثومة ومخلل' },
      { id: 306, name: 'وجبة عليز شاورما دبل', category: 'shawarma', price: 3.25, badge: 'دبل', image: 'images/chicken_burger_meal.png', desc: 'وجبة شاورما دبل حجم كبير مع كافة المرفقات' },
      { id: 307, name: 'وجبة عليز التوفير 1 (شاورما)', category: 'shawarma', price: 7.75, badge: 'توفير عائلي', image: 'images/chicken_burger_meal.png', desc: '5 شاورما سوبر + بطاطا كبير + مخلل + 3 مثومة + 3 صوص مكسيكي' },
      { id: 308, name: 'وجبة عليز التوفير 2 (شاورما)', category: 'shawarma', price: 12.75, badge: 'توفير عائلي', image: 'images/chicken_burger_meal.png', desc: '8 شاورما سوبر + بطاطا عائلي + 4 مخلل + 3 مثومة + 3 صوص مكسيكي' },

      // برجر دجاج
      { id: 401, name: 'عليز تشيكن فيليه (ساندويتش)', category: 'chicken_burgers', price: 2.20, badge: 'برجر', image: 'images/chicken_burger_meal.png', desc: 'صدر دجاج فيليه مقرمش مع الجبن والصلصة' },
      { id: 402, name: 'وجبة عليز تشيكن فيليه', category: 'chicken_burgers', price: 3.10, badge: 'وجبة كومبو', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش فيليه + بطاطا + مشروب غازي' },
      { id: 403, name: 'عليز تشيكن تيستي (ساندويتش)', category: 'chicken_burgers', price: 2.35, badge: 'برجر', image: 'images/chicken_burger_meal.png', desc: 'برجر دجاج مع صوص التيستي المميز' },
      { id: 404, name: 'وجبة عليز تشيكن تيستي', category: 'chicken_burgers', price: 3.25, badge: 'وجبة كومبو', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش تيستي + بطاطا + مشروب غازي' },
      { id: 405, name: 'عليز تشيكن بافلو (ساندويتش)', category: 'chicken_burgers', price: 2.35, badge: 'حار', image: 'images/chicken_burger_meal.png', desc: 'برجر دجاج مع صوص البافلو الحار' },
      { id: 406, name: 'وجبة عليز تشيكن بافلو', category: 'chicken_burgers', price: 3.25, badge: 'وجبة حارة', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش بافلو + بطاطا + مشروب غازي' },
      { id: 407, name: 'عليز تشيكن ديلوكس (ساندويتش)', category: 'chicken_burgers', price: 2.35, badge: 'ديلوكس', image: 'images/chicken_burger_meal.png', desc: 'دجاج مقرمش مع الجبن والخس والصوص الخاص' },
      { id: 408, name: 'وجبة عليز تشيكن ديلوكس', category: 'chicken_burgers', price: 3.25, badge: 'وجبة كومبو', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش ديلوكس + بطاطا + مشروب غازي' },
      { id: 409, name: 'عليز بيج دادي تشكن (ساندويتش)', category: 'chicken_burgers', price: 3.35, badge: 'حجم ضخم', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش البيج دادي العملاق بالدجاج المقرمش والجبن المضاعف' },
      { id: 410, name: 'وجبة عليز بيج دادي تشكن', category: 'chicken_burgers', price: 4.25, badge: 'وجبة عملاقة', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش بيج دادي + بطاطا + مشروب غازي' },

      // بيف مشوي
      { id: 501, name: 'عليز بيف كلاسيك (ساندويتش 150غ)', category: 'beef_burgers', price: 2.60, badge: 'مشوي على اللهب', image: 'images/chicken_burger_meal.png', desc: '150 غرام لحم صافي مشوي على اللهب مع الجبن والخس والصلصة' },
      { id: 502, name: 'وجبة عليز بيف كلاسيك', category: 'beef_burgers', price: 3.50, badge: 'وجبة لحم', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش بيف كلاسيك + بطاطا + مشروب غازي' },
      { id: 503, name: 'عليز بيف سبينشال (ساندويتش 150غ)', category: 'beef_burgers', price: 2.85, badge: 'مشوي على اللهب', image: 'images/chicken_burger_meal.png', desc: '150 غرام لحم بصلصة عليز المتميزة والجبن الفاخر' },
      { id: 504, name: 'وجبة عليز بيف سبينشال', category: 'beef_burgers', price: 3.75, badge: 'وجبة سببيشال', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش بيف سبيشال + بطاطا + مشروب غازي' },

      // وراپ
      { id: 601, name: 'عليز تشيكن راب (ساندويتش)', category: 'wraps', price: 1.65, badge: 'راپ', image: 'images/chicken_burger_meal.png', desc: 'تورتيلا ملفوف بدجاج مقرمش وصلصة عليز الخفيفة' },
      { id: 602, name: 'وجبة عليز تشيكن راب', category: 'wraps', price: 2.50, badge: 'وجبة كومبو', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش تشيكن راب + بطاطا + مشروب غازي' },
      { id: 603, name: 'عليز تشيكن سوبريم (ساندويتش)', category: 'wraps', price: 2.10, badge: 'سوبريم', image: 'images/chicken_burger_meal.png', desc: 'دجاج مقرمش فاخر مع التركي والجبن والصلصة' },
      { id: 604, name: 'وجبة عليز تشيكن سوبريم', category: 'wraps', price: 3.00, badge: 'وجبة كومبو', image: 'images/chicken_burger_meal.png', desc: 'ساندويتش سوبريم + بطاطا + مشروب غازي' },

      // أجنحة وناجت
      { id: 701, name: 'ناجت الدجاج 6 قطع', category: 'wings_nuggets', price: 1.90, badge: 'ناجت', image: 'images/fresh_chicken_strips.png', desc: '6 قطع ناجت مقرمشة ومحضرة من صدر الدجاج الصافي' },
      { id: 702, name: 'ناجت الدجاج 12 قطعة', category: 'wings_nuggets', price: 3.60, badge: 'ناجت', image: 'images/fresh_chicken_strips.png', desc: '12 قطعة ناجت مقرمشة مع الصوصات' },
      { id: 703, name: 'أجنحة الدجاج 6 قطع', category: 'wings_nuggets', price: 1.60, badge: 'أجنحة', image: 'images/grilled_chicken_plate.png', desc: '6 قطع أجنحة (باربيكيو، سويت تشيلي، بافلو، هوني ماسترد)' },
      { id: 704, name: 'أجنحة الدجاج 12 قطعة', category: 'wings_nuggets', price: 3.00, badge: 'أجنحة', image: 'images/grilled_chicken_plate.png', desc: '12 قطعة أجنحة بالنكهات المفضلة لديك' },

      // الأرز
      { id: 801, name: 'وجبة أرز + 3 تندر (مع مشروب)', category: 'rice', price: 2.75, badge: 'وجبة أرز', image: 'images/grilled_chicken_plate.png', desc: 'صحن أرز مبهر غني + 3 قطع تندر مقرمش + مشروب غازي' },
      { id: 802, name: 'وجبة أرز + 2 قطعة دجاج (مع مشروب)', category: 'rice', price: 2.75, badge: 'وجبة أرز', image: 'images/grilled_chicken_plate.png', desc: 'صحن أرز مبهر + قطعتين دجاج بروستد + مشروب غازي' },
      { id: 803, name: 'صحن أرز سادة', category: 'rice', price: 1.00, badge: 'جانبي', image: 'images/grilled_chicken_plate.png', desc: 'صحن أرز مبهر بنكهة عليز الخاصة' },

      // الأطفال
      { id: 901, name: 'وجبة أطفال 1 (ناجت)', category: 'kids', price: 2.25, badge: 'هدية لعبة 🎁', image: 'images/fresh_chicken_strips.png', desc: 'ناجت دجاج + بطاطا + عصير ماتركس أناناس + هدية لعبة ممتعة' },
      { id: 902, name: 'وجبة أطفال 2 (برجر لحم)', category: 'kids', price: 2.25, badge: 'هدية لعبة 🎁', image: 'images/chicken_burger_meal.png', desc: 'برجر لحم طازج + بطاطا + عصير ماتركس أناناس + هدية لعبة ممتعة' },
      { id: 903, name: 'وجبة أطفال 3 (تندر)', category: 'kids', price: 2.25, badge: 'هدية لعبة 🎁', image: 'images/fresh_chicken_strips.png', desc: 'قطع تندر دجاج + بطاطا + عصير ماتركس أناناس + هدية لعبة ممتعة' },
      { id: 904, name: 'وجبة أطفال 4 (برجر دجاج)', category: 'kids', price: 2.25, badge: 'هدية لعبة 🎁', image: 'images/chicken_burger_meal.png', desc: 'برجر دجاج مقرمش + بطاطا + عصير ماتركس أناناس + هدية لعبة ممتعة' },

      // المقبلات والمشروبات
      { id: 1001, name: 'صوصات مميزة (داينمايت / بافلو / باربيكيو)', category: 'sides_drinks', price: 0.40, badge: 'صوص', image: 'images/fresh_chicken_strips.png', desc: 'إضافة نكهة استثنائية لوجبتك' },
      { id: 1002, name: 'بطاطا مقلية / كولسلو (صغير)', category: 'sides_drinks', price: 0.65, badge: 'مقبلات', image: 'images/crispy_chicken_bucket.png', desc: 'بطاطا مقرمشة أو سلطة كولسلو طازجة يومياً' },
      { id: 1003, name: 'حلقات بصل (6 حبات)', category: 'sides_drinks', price: 0.75, badge: 'مقبلات', image: 'images/fresh_chicken_strips.png', desc: '6 حبات حلقات بصل مقرمشة وذهبية' },
      { id: 1004, name: 'ماتريكس Matrix (مشروب غازي)', category: 'sides_drinks', price: 0.40, badge: 'مشروب', image: 'images/fresh_chicken_strips.png', desc: 'مشروب ماتركس الغازي البارد بمختلف النكهات' }
    ],

    standards: [
      { icon: '🍗', title: 'دجاج طازج 100%', desc: 'نستخدم دجاجاً طازجاً (صدر صافي 100%) يتم توريده يومياً دون أي تجميد.' },
      { icon: '🔥', title: 'لحم مشوي على اللهب', desc: 'برجر اللحم من 150 غرام لحم صافي مشوي على اللهب لنكهة الشواء الحقيقية.' },
      { icon: '🛡️', title: 'معايير النظافة والطهي', desc: 'طهي بدرجة حرارة بدقة عالية باستخدام أحدث معدات القلي والشي الصحية.' },
      { icon: '⚡', title: 'تحضير فوري وسريع', desc: 'تحضير الوجبة فور طلبك لضمان أعلى مستويات القرمشة والنكهة الساخنة.' }
    ],

    cart: [],

    addToCart(dishId) {
      const dish = this.dishes.find(d => d.id === dishId);
      if (!dish) return null;

      const existing = this.cart.find(item => item.id === dishId);
      if (existing) {
        existing.quantity += 1;
      } else {
        this.cart.push({ ...dish, quantity: 1 });
      }
      this.saveCart();
      return dish;
    },

    updateQuantity(dishId, change) {
      const idx = this.cart.findIndex(i => i.id === dishId);
      if (idx > -1) {
        this.cart[idx].quantity += change;
        if (this.cart[idx].quantity <= 0) {
          this.cart.splice(idx, 1);
        }
      }
      this.saveCart();
    },

    getCartTotal() {
      return this.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0).toFixed(2);
    },

    getCartCount() {
      return this.cart.reduce((sum, i) => sum + i.quantity, 0);
    },

    clearCart() {
      this.cart = [];
      this.saveCart();
    },

    saveCart() {
      try { localStorage.setItem('alis_cart', JSON.stringify(this.cart)); } catch (e) {}
    },

    loadCart() {
      try {
        const saved = localStorage.getItem('alis_cart');
        if (saved) this.cart = JSON.parse(saved);
      } catch (e) {
        this.cart = [];
      }
    }
  };

  // ==========================================================================
  // 2. VIEW RENDERERS & SPA NAVIGATION
  // ==========================================================================
  const AppView = {
    showToast(message, type = 'success') {
      let container = document.getElementById('toastContainer');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      const icon = type === 'error' ? '✖' : '✔';
      toast.innerHTML = `<span style="font-size:1.2rem; font-weight:bold;">${icon}</span><div>${message}</div>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    },

    // SPA Section Navigation Switcher
    switchPage(pageId) {
      const sections = document.querySelectorAll('.page-section');
      const navLinks = document.querySelectorAll('.nav-link');

      sections.forEach(sec => {
        if (sec.id === pageId) {
          sec.classList.add('active');
        } else {
          sec.classList.remove('active');
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute('data-target') === pageId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderCategories(categories, onSelectCategory) {
      const container = document.getElementById('filterCategories');
      if (!container) return;
      container.innerHTML = '';

      categories.forEach((cat, index) => {
        const btn = document.createElement('button');
        btn.className = `category-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat.name;

        btn.addEventListener('click', () => {
          container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          onSelectCategory(cat.id);
        });

        container.appendChild(btn);
      });
    },

    renderDishes(containerId, dishes, onAddToCart) {
      const grid = document.getElementById(containerId);
      if (!grid) return;
      grid.innerHTML = '';

      if (dishes.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
            <h3>لا توجد أطباق تطابق بحثك حالياً</h3>
          </div>
        `;
        return;
      }

      dishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.innerHTML = `
          <div class="dish-img-container">
            <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy" />
            <span class="dish-badge">${dish.badge}</span>
          </div>
          <div class="dish-content">
            <h3 class="dish-title">${dish.name}</h3>
            <p class="dish-desc">${dish.desc}</p>
            <div class="dish-footer">
              <span class="dish-price">${dish.price.toFixed(2)} د.أ</span>
              <button class="add-cart-btn" data-id="${dish.id}">+ إضافة للسلة</button>
            </div>
          </div>
        `;

        card.querySelector('.add-cart-btn').addEventListener('click', () => onAddToCart(dish.id));
        grid.appendChild(card);
      });
    },

    renderStandards() {
      const grids = document.querySelectorAll('.standards-grid');
      grids.forEach(grid => {
        grid.innerHTML = '';
        AppModel.standards.forEach(std => {
          const card = document.createElement('div');
          card.className = 'standard-card';
          card.innerHTML = `
            <div class="standard-icon">${std.icon}</div>
            <h3 class="standard-title">${std.title}</h3>
            <p class="standard-desc">${std.desc}</p>
          `;
          grid.appendChild(card);
        });
      });
    },

    renderCart(cart, total, count, onQtyChange) {
      const cartBadge = document.getElementById('cartBadge');
      const cartTotalAmount = document.getElementById('cartTotalAmount');
      const container = document.getElementById('cartItems');

      if (cartBadge) cartBadge.textContent = count;
      if (cartTotalAmount) cartTotalAmount.textContent = `${total} د.أ`;
      if (!container) return;

      if (cart.length === 0) {
        container.innerHTML = `
          <div style="text-align:center; margin-top:4rem; color: var(--text-muted);">
            <div style="font-size:3rem; margin-bottom: 1rem;">🛒</div>
            <p>سلتك فارغة حالياً</p>
            <p style="font-size:0.85rem; margin-top:0.5rem;">استمتع بأشهى وجبات مطعم عليز (أبو نصير)</p>
          </div>
        `;
        return;
      }

      container.innerHTML = '';
      cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)} د.أ</div>
            <div class="cart-item-qty">
              <button class="qty-btn minus-btn">-</button>
              <span>${item.quantity}</span>
              <button class="qty-btn plus-btn">+</button>
            </div>
          </div>
        `;

        el.querySelector('.minus-btn').addEventListener('click', () => onQtyChange(item.id, -1));
        el.querySelector('.plus-btn').addEventListener('click', () => onQtyChange(item.id, 1));
        container.appendChild(el);
      });
    },

    toggleCart(open = true) {
      const overlay = document.getElementById('cartOverlay');
      if (!overlay) return;
      if (open) overlay.classList.add('open');
      else overlay.classList.remove('open');
    }
  };

  // ==========================================================================
  // 3. CONTROLLER & INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    AppModel.loadCart();
    updateCart();

    AppView.renderStandards();

    let currentCategory = 'all';
    let searchQuery = '';

    function filterAndRender() {
      let filtered = AppModel.dishes;

      if (currentCategory !== 'all') {
        filtered = filtered.filter(d => d.category === currentCategory);
      }

      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(d => d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q));
      }

      AppView.renderDishes('dishesGrid', filtered, handleAddToCart);
      // Also render top 3 featured on homepage grid
      AppView.renderDishes('featuredDishesGrid', AppModel.dishes.slice(0, 4), handleAddToCart);
    }

    function handleAddToCart(dishId) {
      const dish = AppModel.addToCart(dishId);
      if (dish) {
        updateCart();
        AppView.showToast(`تمت إضافة "${dish.name}" إلى السلة بنجاح 🍗`, 'success');
      }
    }

    function handleQtyChange(dishId, change) {
      AppModel.updateQuantity(dishId, change);
      updateCart();
    }

    function updateCart() {
      AppView.renderCart(
        AppModel.cart,
        AppModel.getCartTotal(),
        AppModel.getCartCount(),
        handleQtyChange
      );
    }

    // Dynamic Category Buttons
    AppView.renderCategories(AppModel.categories, (catId) => {
      currentCategory = catId;
      filterAndRender();
    });

    filterAndRender();

    // SPA Navigation Event Handlers
    const navLinks = document.querySelectorAll('.nav-link, .spa-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        if (target) {
          AppView.switchPage(target);
          const mobileNav = document.getElementById('navLinks');
          if (mobileNav) mobileNav.classList.remove('mobile-open');
        }
      });
    });

    // Search Box Listener
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterAndRender();
      });
    }

    // Cart Triggers
    document.querySelectorAll('.cart-btn-trigger').forEach(btn => {
      btn.addEventListener('click', () => AppView.toggleCart(true));
    });

    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) closeCartBtn.addEventListener('click', () => AppView.toggleCart(false));

    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
      cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) AppView.toggleCart(false);
      });
    }

    // Checkout Trigger
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (AppModel.cart.length === 0) {
          AppView.showToast('سلة الطلبات فارغة، الرجاء إضافة أطباق أولاً', 'error');
          return;
        }
        const total = AppModel.getCartTotal();
        AppModel.clearCart();
        updateCart();
        AppView.toggleCart(false);
        AppView.showToast(`تم استلام طلبك بنجاح! الإجمالي: ${total} د.أ. يسرنا خدمتكم في فرع أبو نصير 🍗`, 'success');
      });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName');
        if (!name || !name.value) {
          AppView.showToast('الرجاء تعبئة الاسم برقم هاتف صحيح', 'error');
          return;
        }
        AppView.showToast(`شكراً لك ${name.value}! تم استلام رسالتك وسيتم التواصل معك قريباً.`, 'success');
        contactForm.reset();
      });
    }

    // Mobile Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');
    if (mobileToggle && navLinksContainer) {
      mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('mobile-open');
      });
    }
  });

})();
