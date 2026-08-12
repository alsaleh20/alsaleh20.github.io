/* ==========================================================================
   FUGU SUSHI (فودو سوشي) - INTERACTIVE JAVASCRIPT LOGIC
   ========================================================================== */

const sushiMenuData = [
  {
    id: 'combo-80',
    name: 'عرض السوشي العائلي الملكي (80 قطعة)',
    category: 'combos',
    price: 50.00,
    image: 'img/family_combo.png',
    description: 'تشكيلة عائلية فاخرة ضخمة تضم 80 قطعة متنوعة من أشهر لفائف الماكي والنيجيري والساشيمي بكافة النكهات.'
  },
  {
    id: 'dragon-roll',
    name: 'دراغون رول فاخر (Dragon Roll)',
    category: 'maki',
    price: 12.00,
    image: 'img/maki_rolls.png',
    description: 'أوناغي (أنقليس مشوي)، ربيان تمبورا، أفوكادو، وصلصة الأوناغي الذهبية الخاصة.'
  },
  {
    id: 'volcano-roll',
    name: 'فولكينو رول الحار (Volcano Roll)',
    category: 'maki',
    price: 11.50,
    image: 'img/maki_rolls.png',
    description: 'سلمون مشوي حار، جبنة كريمية، صلصة السريراتشا الحارة، وكافيار توبيكو ممتاز.'
  },
  {
    id: 'sashimi-platter',
    name: 'طبق ساشيمي السلمون والتونا الطازج',
    category: 'nigiri',
    price: 14.00,
    image: 'img/hero_sushi.png',
    description: 'شرائح طازجة 100% من ذيل السلمون والتونا الفاخرة تقدم مع الواسابي الأصلي والزنجبيل.'
  },
  {
    id: 'nigiri-combo',
    name: 'مجموعة النيجيري الملكية (12 قطعة)',
    category: 'nigiri',
    price: 10.00,
    image: 'img/hero_sushi.png',
    description: 'تشكيلة نيجيري سلمون، تونا، وروبيان على أرز السوشي المتبل بالخل الياباني.'
  },
  {
    id: 'shrimp-tempura',
    name: 'روبيان تمبورا مقرمش (Shrimp Tempura)',
    category: 'hot',
    price: 8.50,
    image: 'img/maki_rolls.png',
    description: 'قطعتين كبار من الروبيان المغطى بخلطة التمبورا المقرمشة مع صوص التنسوي.'
  },
  {
    id: 'edamame-spicy',
    name: 'إدامامي بالملح البحري والفلفل الحار',
    category: 'hot',
    price: 4.00,
    image: 'img/hero_sushi.png',
    description: 'قرون الفول الصويا اليابانية الطازجة مع رشات ملح البحر والزيت الحار.'
  }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  renderMenu('all');
  initMenuFilters();
  initCart();
});

function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

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

function initMenuFilters() {
  const btns = document.querySelectorAll('.menu-filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.getAttribute('data-filter'));
    });
  });
}

function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const filtered = category === 'all' 
    ? sushiMenuData 
    : sushiMenuData.filter(i => i.category === category);

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="menu-card-img-wrap">
        <img src="${item.image}" alt="${item.name}" class="menu-card-img">
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-title">${item.name}</h3>
        <p class="menu-card-desc">${item.description}</p>
        <div class="menu-card-footer">
          <div class="menu-price">${item.price.toFixed(2)} <span>د.أ</span></div>
          <button class="btn btn-gold" onclick="addToCart('${item.name}', ${item.price}, 'طبق ياباني فاخر', '${item.image}')">
            <i class="fa-solid fa-cart-plus"></i> إضافة للسلة
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initCart() {
  const cartBtn = document.getElementById('cart-btn');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.getElementById('cart-close-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const checkoutBtn = document.getElementById('checkout-btn');

  const openCart = () => modal.classList.add('active');
  const closeCart = () => modal.classList.remove('active');

  cartBtn.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  backdrop.addEventListener('click', closeCart);

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('سلة التسوق فارغة حالياً!', 'error');
      return;
    }
    showToast('تم استلام طلب السوشي الفاخر بنجاح! سنتصل بك للتأكيد.');
    cart = [];
    updateCartUI();
    closeCart();
  });
}

function addToCart(name, price, option, image) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, option, image, qty: 1 });
  }
  updateCartUI();
  showToast(`تمت إضافة "${name}" إلى سلة فودو سوشي`);
}

function updateCartUI() {
  const badge = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  badge.textContent = count;

  itemsContainer.innerHTML = '';

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 0;">
        <i class="fa-solid fa-bowl-food" style="font-size: 3rem; margin-bottom: 1rem; color: var(--gold-accent);"></i>
        <p>السلة فارغة حالياً، اختر أطباقك اليابانية المفضلة!</p>
      </div>
    `;
    totalEl.textContent = '0.00 د.أ';
    return;
  }

  let sum = 0;
  cart.forEach((item, index) => {
    sum += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" class="cart-item-img" alt="${item.name}">
      <div style="flex-grow:1;">
        <div style="font-weight:700;">${item.name}</div>
        <div style="font-size:0.8rem; color:var(--gold-accent);">${item.price.toFixed(2)} د.أ</div>
      </div>
      <div style="display:flex; align-items:center; gap:0.4rem;">
        <button style="width:24px; height:24px; border-radius:50%; border:1px solid var(--card-border); background:var(--primary-black); color:#fff; cursor:pointer;" onclick="changeQty(${index}, -1)">-</button>
        <span style="font-weight:800;">${item.qty}</span>
        <button style="width:24px; height:24px; border-radius:50%; border:1px solid var(--card-border); background:var(--primary-black); color:#fff; cursor:pointer;" onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  totalEl.textContent = `${sum.toFixed(2)} د.أ`;
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

function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-gold"></i>
    <span>${msg}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3200);
}
