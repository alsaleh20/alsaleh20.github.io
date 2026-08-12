/* ==========================================================================
   ARMY BURGER (آرمي برقر) - INTERACTIVE JAVASCRIPT LOGIC
   ========================================================================== */

// Data Structure from Army_Burger_Technical_Report.md
const menuData = [
  {
    id: 'beef-classic',
    name: 'آرمي برقر لحم تكتيكي (Beef Burger)',
    category: 'beef',
    image: 'img/beef_burger.png',
    description: 'شريحة لحم صافية 100% مشوية على الفحم مع جبنة الشيدر المذابة، الخس الطازج وصلصة آرمي العسكرية الخاصة.',
    hasOptions: true,
    prices: {
      meal: { '200': 6.00, '150': 5.00, '100': 4.00 },
      sandwich: { '200': 5.00, '150': 4.00, '100': 3.00 }
    }
  },
  {
    id: 'chicken-crispy',
    name: 'آرمي برقر دجاج مقرمش (Chicken Burger)',
    category: 'chicken',
    image: 'img/chicken_burger.png',
    description: 'صدر دجاج طازج مقرمش بالخلطة العسكرية الذهبية، مخلل، خس، وصلصة الجبن المتبلة.',
    hasOptions: true,
    prices: {
      meal: { '200': 6.00, '150': 5.00, '100': 4.00 },
      sandwich: { '200': 5.00, '150': 4.00, '100': 3.00 }
    }
  },
  {
    id: 'mozzarella-sticks',
    name: 'أصابع موزاريلا مقرمشة',
    category: 'appetizers',
    image: 'img/appetizers.png',
    description: 'أصابع الجبن الذهبية المقرمشة تقدم مع صوص المارينارا الخاص.',
    hasOptions: false,
    price: 2.50
  },
  {
    id: 'jalapeno-poppers',
    name: 'هالبينو بوبرز بالجبنة',
    category: 'appetizers',
    image: 'img/appetizers.png',
    description: 'قطع الهالبينو الحارة المحشوة بالجبن الكريمي الفاخر والمقلية للكمال.',
    hasOptions: false,
    price: 3.00
  },
  {
    id: 'onion-rings',
    name: 'حلقات بصل مقرمشة',
    category: 'appetizers',
    image: 'img/appetizers.png',
    description: 'حلقات البصل المقرمشة بالخلطة الذهبية الخاصة.',
    hasOptions: false,
    price: 2.00
  },
  {
    id: 'soft-drink',
    name: 'مشروب غازي بارد',
    category: 'appetizers',
    image: 'img/hero_burger.png',
    description: 'اختر مشروبك الغازي المفضل (كولا، سبرايت، فانتا).',
    hasOptions: false,
    price: 0.50
  },
  {
    id: 'water-mineral',
    name: 'مياه معدنية نقية',
    category: 'appetizers',
    image: 'img/hero_burger.png',
    description: 'زجاجة مياه معدنية طبيعية 500 مل.',
    hasOptions: false,
    price: 0.35
  },
  {
    id: 'kids-meal',
    name: 'وجبة البطل الصغير (Kids Meal)',
    category: 'kids',
    image: 'img/beef_burger.png',
    description: 'برجر صغار (100g لحم أو دجاج) + بطاطس ذهبية + عصير + لعبة عسكرية مميزة.',
    hasOptions: false,
    price: 2.75
  }
];

const branchesData = [
  { name: 'الجبيهة', city: 'عمان - بالقرب من الجامعة الأردنية', phone: '06-5300001', hours: '12:00 م - 2:00 ص' },
  { name: 'مرج الحمام', city: 'عمان - الشارع الرئيسي', phone: '06-5700002', hours: '12:00 م - 2:00 ص' },
  { name: 'الدوار السابع', city: 'عمان - بجانب المجمع التجاري', phone: '06-5800003', hours: '12:00 م - 2:00 ص' },
  { name: 'تلاع العلي', city: 'عمان - شارع خليل السالم', phone: '06-5500004', hours: '12:00 م - 2:00 ص' },
  { name: 'طريق المطار', city: 'عمان - محطة المحروقات المركزية', phone: '06-4700005', hours: '24 ساعة' },
  { name: 'سحاب', city: 'عمان - الشارع العام', phone: '06-4000006', hours: '12:00 م - 2:00 ص' },
  { name: 'ماركا', city: 'عمان - بالقرب من المطار القديم', phone: '06-4800007', hours: '12:00 م - 2:00 ص' }
];

// Shopping Cart State
let cart = [];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileDrawer();
  renderMenu('all');
  renderBranches();
  initMenuFilters();
  initCartModal();
});

/* Navbar Scroll Effect */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* Mobile Drawer Toggle */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  const links = document.querySelectorAll('.mobile-link');

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  };

  toggleBtn.addEventListener('click', openDrawer);
  overlay.addEventListener('click', closeDrawer);
  links.forEach(l => l.addEventListener('click', closeDrawer));
}

/* Menu Category Filtering */
function initMenuFilters() {
  const filterBtns = document.querySelectorAll('.menu-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderMenu(category);
    });
  });
}

/* Render Menu Items */
function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const filtered = category === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === category);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.setAttribute('data-id', item.id);

    if (item.hasOptions) {
      let selectedType = 'meal'; // 'meal' or 'sandwich'
      let selectedWeight = '200'; // '200', '150', '100'
      let currentPrice = item.prices[selectedType][selectedWeight];

      card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img">
          <span class="badge-gold menu-card-tag"><i class="fa-solid fa-fire"></i> الأكثر طلباً</span>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.name}</h3>
          </div>
          <p class="menu-card-desc">${item.description}</p>

          <div class="menu-card-options">
            <div class="option-group">
              <span class="option-label">النوع:</span>
              <div class="type-switch-group">
                <button class="type-btn active" data-type="meal">وجبة كاملة</button>
                <button class="type-btn" data-type="sandwich">ساندويش</button>
              </div>
            </div>

            <div class="option-group">
              <span class="option-label">الوزن:</span>
              <div class="size-select-group">
                <button class="size-btn active" data-weight="200">200g</button>
                <button class="size-btn" data-weight="150">150g</button>
                <button class="size-btn" data-weight="100">100g</button>
              </div>
            </div>
          </div>

          <div class="menu-card-footer">
            <div class="menu-price" id="price-${item.id}">
              ${currentPrice.toFixed(2)} <span>د.أ</span>
            </div>
            <button class="btn btn-primary add-to-cart-opt-btn">
              <i class="fa-solid fa-cart-plus"></i> أضف للسلة
            </button>
          </div>
        </div>
      `;

      // Add options event listeners for this specific card
      setTimeout(() => {
        const typeBtns = card.querySelectorAll('.type-btn');
        const weightBtns = card.querySelectorAll('.size-btn');
        const priceEl = card.querySelector(`#price-${item.id}`);

        const updateCardPrice = () => {
          currentPrice = item.prices[selectedType][selectedWeight];
          priceEl.innerHTML = `${currentPrice.toFixed(2)} <span>د.أ</span>`;
        };

        typeBtns.forEach(tBtn => {
          tBtn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            tBtn.classList.add('active');
            selectedType = tBtn.getAttribute('data-type');
            updateCardPrice();
          });
        });

        weightBtns.forEach(wBtn => {
          wBtn.addEventListener('click', () => {
            weightBtns.forEach(b => b.classList.remove('active'));
            wBtn.classList.add('active');
            selectedWeight = wBtn.getAttribute('data-weight');
            updateCardPrice();
          });
        });

        const addBtn = card.querySelector('.add-to-cart-opt-btn');
        addBtn.addEventListener('click', () => {
          const optionLabel = `${selectedType === 'meal' ? 'وجبة' : 'ساندويش'} (${selectedWeight}g)`;
          addToCart(item.name, currentPrice, optionLabel, item.image);
        });
      }, 0);

    } else {
      card.innerHTML = `
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.name}" class="menu-card-img">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-card-title">${item.name}</h3>
          </div>
          <p class="menu-card-desc">${item.description}</p>
          
          <div class="menu-card-footer">
            <div class="menu-price">${item.price.toFixed(2)} <span>د.أ</span></div>
            <button class="btn btn-primary add-to-cart-simple-btn">
              <i class="fa-solid fa-cart-plus"></i> أضف للسلة
            </button>
          </div>
        </div>
      `;

      setTimeout(() => {
        const addBtn = card.querySelector('.add-to-cart-simple-btn');
        addBtn.addEventListener('click', () => {
          addToCart(item.name, item.price, 'قياسي', item.image);
        });
      }, 0);
    }

    grid.appendChild(card);
  });
}

/* Render Branches */
function renderBranches() {
  const container = document.getElementById('branches-grid');
  container.innerHTML = '';

  branchesData.forEach(branch => {
    const card = document.createElement('div');
    card.className = 'branch-card';
    card.innerHTML = `
      <span class="branch-status"><i class="fa-solid fa-circle"></i> مفتوح الآن</span>
      <h3 class="branch-name">فرع ${branch.name}</h3>
      <p class="branch-city"><i class="fa-solid fa-location-dot text-gold"></i> ${branch.city}</p>
      <div class="branch-details">
        <span><i class="fa-solid fa-phone text-gold"></i> ${branch.phone}</span>
        <span><i class="fa-solid fa-clock text-gold"></i> ${branch.hours}</span>
      </div>
      <button class="btn btn-secondary" style="width: 100%; font-size: 0.88rem;" onclick="showToast('تم تحديد فرع ${branch.name} للاستلام')">
        <i class="fa-solid fa-directions"></i> الاتجاهات وتحديد الفرع
      </button>
    `;
    container.appendChild(card);
  });
}

/* Shopping Cart Logic */
function initCartModal() {
  const cartBtn = document.getElementById('cart-btn');
  const cartModal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('cart-close-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const checkoutBtn = document.getElementById('checkout-btn');

  const openCart = () => cartModal.classList.add('active');
  const closeCart = () => cartModal.classList.remove('active');

  cartBtn.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  backdrop.addEventListener('click', closeCart);

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('سلة التسوق فارغة حالياً!', 'error');
      return;
    }
    const selectedBranch = document.getElementById('cart-branch-select').value;
    showToast(`تم استلام طلبك بنجاح لفرع ${selectedBranch}! جاري التجهيز...`);
    cart = [];
    updateCartUI();
    closeCart();
  });
}

function addToCart(title, price, option, image) {
  const existing = cart.find(i => i.title === title && i.option === option);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ title, price, option, image, qty: 1 });
  }
  updateCartUI();
  showToast(`تمت إضافة "${title}" إلى السلة`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  countBadge.textContent = totalCount;

  itemsContainer.innerHTML = '';

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 0;">
        <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 1rem; color: var(--gold-accent);"></i>
        <p>السلة فارغة حالياً، اختر وجبتك التكتيكية!</p>
      </div>
    `;
    subtotalEl.textContent = '0.00 د.أ';
    totalEl.textContent = '0.00 د.أ';
    return;
  }

  let totalSum = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalSum += itemTotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" class="cart-item-img" alt="${item.title}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-opt">${item.option}</div>
        <div class="cart-item-price">${item.price.toFixed(2)} د.أ</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
        <span style="font-weight: 800;">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  subtotalEl.textContent = `${totalSum.toFixed(2)} د.أ`;
  totalEl.textContent = `${totalSum.toFixed(2)} د.أ`;
}

function changeQty(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    updateCartUI();
  }
}

/* Toast Notifications System (As mandated by Technical Report) */
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const icon = type === 'success' ? 'fa-circle-check' : 'fa-triangle-exclamation';
  
  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3400);
}
