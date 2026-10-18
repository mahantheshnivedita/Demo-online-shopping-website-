/**
 * NovaCart — Premium Online Shopping Store
 * Vanilla JavaScript Engine | Zero External Libraries
 * 100% Static Hosting Compatible (Cloudflare Pages, GitHub Pages, Localhost)
 */

// ============================================================================
// 1. PRODUCT CATALOG DATA (16 Realistic Curated Items with Relative Image Paths)
// ============================================================================
const PRODUCTS = [
  {
    id: 'nc-01',
    name: 'AcousticPro Wireless ANC Headphones',
    category: 'electronics',
    price: 3499,
    originalPrice: 5999,
    discount: '42% OFF',
    rating: 4.9,
    reviewsCount: 328,
    image: './assets/images/product-headphones.jpg',
    description: 'Studio-grade active noise cancellation with 40mm neodymium drivers, 45-hour battery life, and ultra-comfortable memory foam ear cushions.',
    features: ['Active Noise Cancellation (ANC)', '45 Hours Playtime with Fast Charge', 'Bluetooth 5.3 Multipoint Pairing', 'Built-in Quad Clear-Voice Mics'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-02',
    name: 'AuraSync AMOLED Smartwatch',
    category: 'electronics',
    price: 2499,
    originalPrice: 4999,
    discount: '50% OFF',
    rating: 4.8,
    reviewsCount: 215,
    image: './assets/images/product-smartwatch.jpg',
    description: 'Aerospace aluminum casing with 1.43-inch Always-on AMOLED display, heart rate tracking, SpO2 sensor, and 100+ fitness modes.',
    features: ['1.43" Vivid AMOLED Display', 'Continuous SpO2 & Heart Rate Monitoring', '7-Day Battery Endurance', 'IP68 Water & Dust Resistance'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: false
  },
  {
    id: 'nc-03',
    name: 'PulseBass Rugged Bluetooth Speaker',
    category: 'electronics',
    price: 1899,
    originalPrice: 2999,
    discount: '37% OFF',
    rating: 4.7,
    reviewsCount: 164,
    image: './assets/images/product-speaker.jpg',
    description: '360-degree immersive acoustic sound with dual passive bass radiators and waterproof IPX7 construction designed for outdoor travel.',
    features: ['24W Room-Filling Acoustic Output', 'IPX7 Waterproof Submersion Safe', '20 Hours Battery Playtime', 'True Wireless Stereo Pairing'],
    isFeatured: false,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-04',
    name: 'Tailored Heavyweight Cotton Overshirt',
    category: 'fashion',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 192,
    image: './assets/images/product-overshirt.jpg',
    description: 'Crafted from 100% sustainable combed cotton with structured utility chest pockets, horn buttons, and relaxed drape for effortless layering.',
    features: ['100% Combed Premium Cotton', 'Reinforced Double-Stitched Seams', 'Pre-Shrunk Eco-Friendly Treatment', 'Relaxed Contemporary Fit'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-05',
    name: 'Raw Indigo Selvedge Denim Jacket',
    category: 'fashion',
    price: 2799,
    originalPrice: 3999,
    discount: '30% OFF',
    rating: 4.9,
    reviewsCount: 143,
    image: './assets/images/product-denim-jacket.jpg',
    description: 'Heavyweight 14oz shuttle-loom selvedge denim with antique brass hardware, tailored silhouette, and deep interior utility pockets.',
    features: ['14oz Raw Shuttle-Loom Selvedge', 'Custom Engraved Brass Rivets', 'Natural Indigo Dye Finish', 'Deep Concealed Pockets'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-06',
    name: 'Merino Wool Minimalist Crewneck',
    category: 'fashion',
    price: 1899,
    originalPrice: 2999,
    discount: '36% OFF',
    rating: 4.7,
    reviewsCount: 88,
    image: './assets/images/product-wool-sweater.jpg',
    description: 'Ultra-soft extrafine Merino wool that naturally regulates body temperature, resists odor, and layers seamlessly across all seasons.',
    features: ['100% Extrafine Merino Wool', 'Naturally Breathable & Odor-Resistant', 'Ribbed Collar, Cuffs & Hem', 'Delicate Cycle Machine Washable'],
    isFeatured: false,
    isSpecialOffer: true,
    isBestSeller: false
  },
  {
    id: 'nc-07',
    name: 'Atelier Nappa Leather Low Sneakers',
    category: 'fashion',
    price: 2699,
    originalPrice: 4499,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 412,
    image: './assets/images/product-sneakers.jpg',
    description: 'Clean architectural silhouette in supple full-grain Italian calf leather with cushioned rubber Margom sole and calfskin interior lining.',
    features: ['Full-Grain Nappa Leather Upper', 'Stitched Anti-Slip Rubber Cupsole', 'Orthopedic Memory Foam Footbed', 'Hand-Finished Clean Silhouette'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-08',
    name: 'Hand-Burnished Chelsea Leather Boots',
    category: 'fashion',
    price: 3299,
    originalPrice: 5499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 175,
    image: './assets/images/product-chelsea-boots.jpg',
    description: 'Classic pull-on silhouette in rich burnished cognac crust leather with dual elasticated gussets and durable Goodyear welt construction.',
    features: ['Supple Crust Full-Grain Leather', 'Goodyear Welted Sole Construction', 'Anti-Slip All-Weather Tread', 'Reinforced Pull Tabs'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-09',
    name: 'Nordic Sculptural Stoneware Vase',
    category: 'home',
    price: 1199,
    originalPrice: 1999,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 156,
    image: './assets/images/product-ceramic-vase.jpg',
    description: 'Handcrafted raw textured stoneware with organic Scandinavian contours, suitable for fresh florals, dried botanicals, and modern surfaces.',
    features: ['Hand-Thrown Matte Ceramic', 'Watertight Glazed Interior', 'Organic Asymmetric Silhouette', 'Soft Protective Felt Base Pad'],
    isFeatured: true,
    isSpecialOffer: false,
    isBestSeller: true
  },
  {
    id: 'nc-10',
    name: 'Geometric Ultrasonic Aroma Diffuser',
    category: 'home',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 220,
    image: './assets/images/product-diffuser.jpg',
    description: 'Facet ceramic ultrasonic essential oil diffuser with ambient warm LED nightlight, automatic shutoff safety sensor, and whisper-quiet misting.',
    features: ['Whisper-Quiet < 20dB Mist Cycles', 'Warm Ambient LED Mood Ring', 'Automatic Safety Shut-Off', 'Continuous & Intermittent Modes'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-11',
    name: 'Organic Waffle Textured Linen Throw',
    category: 'home',
    price: 1299,
    originalPrice: 2199,
    discount: '41% OFF',
    rating: 4.8,
    reviewsCount: 94,
    image: './assets/images/product-linen-throw.jpg',
    description: '100% stone-washed European flax linen and combed organic cotton blend with lightweight breathability and eyelash fringed edges.',
    features: ['Pure French Flax & Organic Cotton', 'Stone-Washed for Immediate Softness', 'Generous 130x180cm Size', 'OEKO-TEX Certified Eco Non-Toxic'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-12',
    name: 'Classic Minimalist Chronograph Watch',
    category: 'fashion',
    price: 2999,
    originalPrice: 4999,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 310,
    image: './assets/images/product-chronograph.jpg',
    description: 'Polished surgical 316L stainless steel case, scratch-proof sapphire crystal glass, Japanese quartz movement, and vegetable-tanned leather strap.',
    features: ['316L Surgical Grade Steel', 'Scratch-Proof Sapphire Glass', '5 ATM Water Resistance', 'Vegetable-Tanned Italian Leather'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-13',
    name: 'Heritage Slim Bi-Fold Leather Wallet',
    category: 'fashion',
    price: 899,
    originalPrice: 1599,
    discount: '44% OFF',
    rating: 4.8,
    reviewsCount: 265,
    image: './assets/images/product-leather-wallet.jpg',
    description: 'Compact slim pocket profile with integrated RFID blocking layer, 8 quick-access card slots, and full-length cash sleeve.',
    features: ['Certified RFID Data Protection', 'Top-Grain Hunter Leather', 'Holds 10+ Cards & Currency', 'Super Slim 9mm Profile'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-14',
    name: 'Botanical Radiance Vitamin C Serum',
    category: 'beauty',
    price: 799,
    originalPrice: 1399,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 520,
    image: './assets/images/product-serum.jpg',
    description: 'Potent 15% stabilized L-Ascorbic Acid infused with Australian Kakadu plum, Ferulic acid, and Hyaluronic acid for glowing, radiant skin.',
    features: ['15% Potent Stabilized Vitamin C', 'Hyaluronic Acid Hydration Boost', 'Dermatologically Tested Safe', 'Paraben, Cruelty & Fragrance Free'],
    isFeatured: true,
    isSpecialOffer: true,
    isBestSeller: true
  },
  {
    id: 'nc-15',
    name: 'Deep Nourish Shea Butter Night Cream',
    category: 'beauty',
    price: 649,
    originalPrice: 1099,
    discount: '41% OFF',
    rating: 4.7,
    reviewsCount: 189,
    image: './assets/images/product-night-cream.jpg',
    description: 'Rich velvety night restorative cream with cold-pressed unrefined African shea butter, triple ceramides, and organic jojoba seed oil.',
    features: ['Triple Ceramide Skin Barrier Repair', 'Pure Unrefined Cold-Pressed Shea', 'Non-Comedogenic Formula', 'Deep Overnight Rejuvenation'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  },
  {
    id: 'nc-16',
    name: 'Polarized Classic Acetate Sunglasses',
    category: 'fashion',
    price: 1299,
    originalPrice: 2199,
    discount: '41% OFF',
    rating: 4.8,
    reviewsCount: 142,
    image: './assets/images/product-sunglasses.jpg',
    description: 'Handcrafted Italian tortoiseshell acetate frames with TAC polarized UV400 lenses and reinforced 5-barrel German stainless hinges.',
    features: ['100% UV400 Polarized Protection', 'Handmade Italian Acetate', 'Includes Hard Case & Microfiber Cloth', '5-Barrel Stainless Steel Hinges'],
    isFeatured: false,
    isSpecialOffer: false,
    isBestSeller: false
  }
];

// Valid Promotional Coupons
const VALID_PROMOS = {
  'NOVACART10': { type: 'percent', value: 0.10, desc: '10% Discount on entire cart' },
  'NOVACART200': { type: 'flat', value: 200, minOrder: 1499, desc: '₹200 OFF on orders above ₹1,499' },
  'FREESHIP': { type: 'shipping', value: 0, desc: 'Free Express Shipping' },
  'WELCOME150': { type: 'flat', value: 150, minOrder: 999, desc: '₹150 Welcome Discount' }
};

// ============================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ============================================================================
let state = {
  cart: [],              // [{ id: string, quantity: number }]
  wishlist: [],          // [productId]
  activeCategory: 'all', // 'all' | 'electronics' | 'fashion' | 'home' | 'beauty'
  searchQuery: '',
  sortBy: 'featured',    // 'featured' | 'price-low' | 'price-high' | 'rating' | 'discount'
  appliedPromo: null,
  activePdpProduct: null,
  currentSlideIndex: 0,
  isSliderHovered: false
};

function initStorage() {
  try {
    const savedCart = localStorage.getItem('novacart_cart');
    if (savedCart) state.cart = JSON.parse(savedCart);
  } catch (e) {
    console.warn('LocalStorage error reading cart', e);
    state.cart = [];
  }

  try {
    const savedWish = localStorage.getItem('novacart_wishlist');
    if (savedWish) state.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn('LocalStorage error reading wishlist', e);
    state.wishlist = [];
  }

  try {
    const savedPromo = localStorage.getItem('novacart_promo');
    if (savedPromo && VALID_PROMOS[savedPromo]) state.appliedPromo = savedPromo;
  } catch (e) {
    state.appliedPromo = null;
  }
}

function persistCart() {
  try {
    localStorage.setItem('novacart_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Could not persist cart to localStorage', e);
  }
}

function persistWishlist() {
  try {
    localStorage.setItem('novacart_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    console.warn('Could not persist wishlist to localStorage', e);
  }
}

function persistPromo() {
  try {
    if (state.appliedPromo) {
      localStorage.setItem('novacart_promo', state.appliedPromo);
    } else {
      localStorage.removeItem('novacart_promo');
    }
  } catch (e) {
    console.warn('Could not persist promo to localStorage', e);
  }
}

// ============================================================================
// 3. UTILITY FUNCTIONS & IMAGE FALLBACK
// ============================================================================
function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Resilient inline SVG data URI fallback for zero broken images
function getFallbackSvg(name, category) {
  const cleanName = encodeURIComponent(name);
  const cleanCat = encodeURIComponent(category.toUpperCase());
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f1f5f9"/><circle cx="200" cy="170" r="48" fill="%23bae6fd"/><path d="M185 170 L200 155 L215 170 M200 155 L200 185" stroke="%230284c7" stroke-width="4" stroke-linecap="round"/><text x="200" y="240" font-family="sans-serif" font-size="14" font-weight="700" fill="%23111827" text-anchor="middle">${cleanName}</text><text x="200" y="265" font-family="sans-serif" font-size="12" font-weight="600" fill="%230284c7" text-anchor="middle">${cleanCat}</text></svg>`;
}

// ============================================================================
// 4. FLOATING TOAST NOTIFICATION SYSTEM
// ============================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-msg-box ${type}`;

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#22c55e;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'info') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#38bdf8;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:#f97316;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  }

  toast.innerHTML = `
    <span style="display:flex;align-items:center;">${iconSvg}</span>
    <span style="flex:1;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('dismissing');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 250);
  }, 3200);
}

// ============================================================================
// 5. HERO BANNER SLIDER (AUTO SLIDING, SWIPING, PAUSING)
// ============================================================================
let sliderInterval = null;

function initHeroSlider() {
  const track = document.getElementById('heroSlidesTrack');
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroSliderDots');
  const viewport = document.getElementById('heroSliderViewport');

  if (!track || slides.length === 0) return;

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  // Next / Prev button event listeners
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => prevSlide());
  if (nextBtn) nextBtn.addEventListener('click', () => nextSlide());

  // Mouse hover pause
  if (viewport) {
    viewport.addEventListener('mouseenter', () => {
      state.isSliderHovered = true;
    });
    viewport.addEventListener('mouseleave', () => {
      state.isSliderHovered = false;
    });

    // Touch Swipe gestures for mobile / tablet
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipeGesture();
    }, { passive: true });

    function handleSwipeGesture() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  }

  // Start automatic timer (every 4.5s) unless prefers-reduced-motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(() => {
      if (!state.isSliderHovered) {
        nextSlide();
      }
    }, 4500);
  }
}

function goToSlide(index) {
  const track = document.getElementById('heroSlidesTrack');
  const dots = document.querySelectorAll('.slider-dot');
  const slides = document.querySelectorAll('.hero-slide');

  if (!track || slides.length === 0) return;

  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  state.currentSlideIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  goToSlide(state.currentSlideIndex + 1);
}

function prevSlide() {
  goToSlide(state.currentSlideIndex - 1);
}

// ============================================================================
// 6. DEMO COUNTDOWN TIMER FOR SPECIAL OFFERS
// ============================================================================
function initDemoCountdown() {
  const timerEl = document.getElementById('specialOffersTimer');
  if (!timerEl) return;

  // Set a fixed end time 6 hours ahead of page load (simulated promotion)
  let remainingSeconds = 6 * 3600 + 15 * 60 + 40;

  function updateTimer() {
    remainingSeconds--;
    if (remainingSeconds < 0) remainingSeconds = 6 * 3600;

    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    const pad = (n) => n.toString().padStart(2, '0');
    timerEl.innerText = `${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// ============================================================================
// 7. CATALOG RENDERING & FILTERING
// ============================================================================
function getFilteredAndSortedProducts() {
  let list = [...PRODUCTS];

  // Category filter
  if (state.activeCategory && state.activeCategory !== 'all') {
    list = list.filter(p => p.category.toLowerCase() === state.activeCategory.toLowerCase());
  }

  // Search filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (state.sortBy) {
    case 'price-low':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      list.sort((a, b) => b.rating - a.rating);
      break;
    case 'discount':
      list.sort((a, b) => {
        const discA = (a.originalPrice - a.price) / a.originalPrice;
        const discB = (b.originalPrice - b.price) / b.originalPrice;
        return discB - discA;
      });
      break;
    case 'featured':
    default:
      list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      break;
  }

  return list;
}

function renderProductCard(p) {
  const isWishlisted = state.wishlist.includes(p.id);
  const savingsAmount = p.originalPrice - p.price;

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card-media">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="product-card-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='${getFallbackSvg(p.name, p.category)}'"
        />
        <div class="product-card-badges">
          <span class="discount-pill">${p.discount}</span>
          <button 
            type="button" 
            class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" 
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            onclick="handleToggleWishlist('${p.id}', event)"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="card-quick-view-wrap">
          <button type="button" class="quick-view-action-btn" onclick="openProductModal('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Quick View
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div class="product-card-top-meta">
          <span class="product-cat-kicker">${p.category}</span>
          <div class="product-rating-box">
            <span class="rating-star-icon">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </span>
            <span>${p.rating}</span>
            <span style="color:var(--text-soft);font-weight:400;">(${p.reviewsCount})</span>
          </div>
        </div>

        <h3 class="product-card-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <p class="product-card-snippet">${p.description}</p>

        <div class="product-card-footer">
          <div class="price-lockup">
            <span class="price-current tabular-nums">${formatINR(p.price)}</span>
            <span class="price-original tabular-nums">${formatINR(p.originalPrice)}</span>
            <span class="price-savings">Save ${formatINR(savingsAmount)}</span>
          </div>
          <button 
            type="button" 
            class="add-cart-action-btn" 
            onclick="handleAddToCart('${p.id}', 1, event)"
            aria-label="Add ${p.name} to cart"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Add
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const grid = document.getElementById('productCatalogGrid');
  const countEl = document.getElementById('catalogItemCount');
  const statusEl = document.getElementById('catalogStatusText');

  if (!grid) return;

  const filtered = getFilteredAndSortedProducts();

  if (countEl) {
    countEl.innerText = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
  }

  if (statusEl) {
    const catLabel = state.activeCategory === 'all' ? 'All Categories' : state.activeCategory.toUpperCase();
    if (state.searchQuery.trim()) {
      statusEl.innerHTML = `Showing results for "<strong>${state.searchQuery.trim()}</strong>" in ${catLabel}`;
    } else {
      statusEl.innerHTML = `Showing ${catLabel}`;
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty-view">
        <div class="empty-view-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h4 class="empty-view-title">No matching products found</h4>
        <p style="color:var(--text-muted);margin-bottom:18px;">We couldn't find any products matching your search criteria. Try clearing filters.</p>
        <button type="button" class="btn btn-secondary btn-sm" onclick="handleResetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
}

// Render Special Offers Grid (At least 6 items with discount badges)
function renderSpecialOffers() {
  const grid = document.getElementById('specialOffersGrid');
  if (!grid) return;

  const offers = PRODUCTS.filter(p => p.isSpecialOffer).slice(0, 6);
  grid.innerHTML = offers.map(renderProductCard).join('');
}

// Render Best Sellers Grid
function renderBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  grid.innerHTML = bestSellers.map(renderProductCard).join('');
}

// Category filter click handler
function handleCategorySelect(cat) {
  state.activeCategory = cat;

  document.querySelectorAll('.category-chip').forEach(chip => {
    if (chip.getAttribute('data-cat') === cat) {
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');
    } else {
      chip.classList.remove('active');
      chip.setAttribute('aria-selected', 'false');
    }
  });

  renderCatalog();

  const target = document.getElementById('catalogSection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function handleResetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';

  const searchInput = document.getElementById('headerSearchInput');
  const mobileSearchInput = document.getElementById('mobileSearchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  const sortSelect = document.getElementById('sortSelectDropdown');

  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
  if (clearBtn) clearBtn.classList.remove('visible');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.category-chip').forEach(chip => {
    if (chip.getAttribute('data-cat') === 'all') {
      chip.classList.add('active');
      chip.setAttribute('aria-selected', 'true');
    } else {
      chip.classList.remove('active');
      chip.setAttribute('aria-selected', 'false');
    }
  });

  renderCatalog();
}

// ============================================================================
// 8. CART MANAGEMENT & DRAWER
// ============================================================================
function handleAddToCart(productId, quantity = 1, event) {
  if (event) event.stopPropagation();

  const product = getProductById(productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({ id: productId, quantity });
  }

  persistCart();
  updateCartUI();
  showToast(`Added ${quantity > 1 ? `${quantity}x ` : ''}"${product.name}" to cart!`, 'success');
}

function handleRemoveFromCart(productId) {
  const product = getProductById(productId);
  state.cart = state.cart.filter(item => item.id !== productId);
  persistCart();
  updateCartUI();
  if (product) {
    showToast(`Removed "${product.name}" from cart.`, 'info');
  }
}

function handleUpdateQuantity(productId, delta) {
  const item = state.cart.find(it => it.id === productId);
  if (!item) return;

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    handleRemoveFromCart(productId);
  } else {
    item.quantity = newQty;
    persistCart();
    updateCartUI();
  }
}

function calculateCartTotals() {
  let subtotal = 0;
  let itemCount = 0;

  state.cart.forEach(item => {
    const p = getProductById(item.id);
    if (p) {
      subtotal += p.price * item.quantity;
      itemCount += item.quantity;
    }
  });

  let discount = 0;
  let shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;

  if (state.appliedPromo && VALID_PROMOS[state.appliedPromo]) {
    const promo = VALID_PROMOS[state.appliedPromo];
    if (promo.type === 'percent') {
      discount = subtotal * promo.value;
    } else if (promo.type === 'flat') {
      if (!promo.minOrder || subtotal >= promo.minOrder) {
        discount = promo.value;
      }
    } else if (promo.type === 'shipping') {
      shipping = 0;
    }
  }

  if (discount > subtotal) discount = subtotal;
  const total = subtotal - discount + shipping;

  return {
    subtotal,
    itemCount,
    discount,
    shipping,
    total,
    neededForFreeShipping: Math.max(0, 999 - subtotal)
  };
}

function updateCartUI() {
  const totals = calculateCartTotals();

  const cartBadge = document.getElementById('headerCartBadge');
  const cartPreview = document.getElementById('headerCartPreviewPrice');
  const drawerCount = document.getElementById('cartDrawerCountBadge');

  if (cartBadge) {
    cartBadge.innerText = totals.itemCount;
    cartBadge.style.display = totals.itemCount > 0 ? 'flex' : 'none';
  }

  if (cartPreview) {
    cartPreview.innerText = formatINR(totals.total);
  }

  if (drawerCount) {
    drawerCount.innerText = `${totals.itemCount} ${totals.itemCount === 1 ? 'item' : 'items'}`;
  }

  // Free shipping meter
  const deliveryMsg = document.getElementById('deliveryThresholdMsg');
  const deliveryFill = document.getElementById('deliveryThresholdFill');
  if (deliveryMsg && deliveryFill) {
    if (totals.subtotal >= 999) {
      deliveryMsg.innerHTML = '🎉 <strong>Free Express Shipping Unlocked!</strong>';
      deliveryFill.style.width = '100%';
      deliveryFill.style.backgroundColor = '#16a34a';
    } else if (totals.subtotal === 0) {
      deliveryMsg.innerHTML = 'Add items worth ₹999 for <strong>Free Delivery</strong>';
      deliveryFill.style.width = '0%';
      deliveryFill.style.backgroundColor = 'var(--blue-primary)';
    } else {
      const pct = Math.min(100, Math.round((totals.subtotal / 999) * 100));
      deliveryMsg.innerHTML = `Add <strong>${formatINR(totals.neededForFreeShipping)}</strong> more for <strong>Free Express Shipping</strong>`;
      deliveryFill.style.width = `${pct}%`;
      deliveryFill.style.backgroundColor = 'var(--blue-primary)';
    }
  }

  // Render items in drawer
  const drawerBody = document.getElementById('cartDrawerItemsList');
  const drawerFooter = document.getElementById('cartDrawerFooterPane');

  if (drawerBody && drawerFooter) {
    if (state.cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty-message">
          <div class="cart-empty-icon-wrap">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:700;">Your Cart is Empty</h4>
          <p style="font-size:0.875rem;color:var(--text-muted);max-width:240px;">Explore our collections and add everyday essentials to your cart.</p>
          <button type="button" class="btn btn-primary btn-sm" onclick="toggleCartDrawer(false)">Explore Collections</button>
        </div>
      `;
      drawerFooter.style.display = 'none';
    } else {
      drawerFooter.style.display = 'flex';
      drawerBody.innerHTML = state.cart.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="cart-product-row">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              class="cart-thumb-img"
              onerror="this.onerror=null; this.src='${getFallbackSvg(p.name, p.category)}'"
            />
            <div class="cart-product-info">
              <span class="cart-product-name" title="${p.name}">${p.name}</span>
              <span class="cart-product-price tabular-nums">${formatINR(p.price)}</span>
              <div class="qty-stepper-box">
                <button type="button" class="qty-step-btn" onclick="handleUpdateQuantity('${p.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-val-num tabular-nums">${item.quantity}</span>
                <button type="button" class="qty-step-btn" onclick="handleUpdateQuantity('${p.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button type="button" class="cart-remove-btn" onclick="handleRemoveFromCart('${p.id}')" aria-label="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        `;
      }).join('');

      // Bill Breakdown
      const subtotalEl = document.getElementById('cartSubtotalValue');
      const discountRow = document.getElementById('cartDiscountLineRow');
      const discountEl = document.getElementById('cartDiscountValue');
      const shippingEl = document.getElementById('cartShippingValue');
      const totalEl = document.getElementById('cartTotalValue');

      if (subtotalEl) subtotalEl.innerText = formatINR(totals.subtotal);

      if (discountRow && discountEl) {
        if (totals.discount > 0) {
          discountRow.style.display = 'flex';
          discountEl.innerText = '-' + formatINR(totals.discount);
        } else {
          discountRow.style.display = 'none';
        }
      }

      if (shippingEl) {
        shippingEl.innerText = totals.shipping === 0 ? 'FREE' : formatINR(totals.shipping);
        shippingEl.style.color = totals.shipping === 0 ? 'var(--color-success)' : 'var(--text-charcoal)';
        shippingEl.style.fontWeight = totals.shipping === 0 ? '700' : '500';
      }

      if (totalEl) totalEl.innerText = formatINR(totals.total);
    }
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartSideDrawer');
  const overlay = document.getElementById('globalDrawerOverlay');

  if (open) {
    if (drawer) drawer.classList.add('is-active');
    if (overlay) overlay.classList.add('is-active');
    document.body.classList.add('drawer-open');
  } else {
    if (drawer) drawer.classList.remove('is-active');
    if (overlay) overlay.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
  }
}

function handleApplyPromo() {
  const input = document.getElementById('cartCouponTextField');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('Please enter a coupon code.', 'warning');
    return;
  }

  if (VALID_PROMOS[code]) {
    state.appliedPromo = code;
    persistPromo();
    updateCartUI();
    showToast(`Coupon "${code}" applied: ${VALID_PROMOS[code].desc}`, 'success');
  } else {
    showToast('Invalid coupon. Try "NOVACART10" or "FREESHIP".', 'warning');
  }
}

// ============================================================================
// 9. WISHLIST MANAGEMENT & MODAL
// ============================================================================
function handleToggleWishlist(productId, event) {
  if (event) event.stopPropagation();

  const product = getProductById(productId);
  if (!product) return;

  const idx = state.wishlist.indexOf(productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed "${product.name}" from wishlist.`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product.name}" to wishlist!`, 'success');
  }

  persistWishlist();
  updateWishlistUI();
  renderCatalog();
  renderSpecialOffers();
  renderBestSellers();
}

function updateWishlistUI() {
  const badge = document.getElementById('headerWishlistBadge');
  if (badge) {
    badge.innerText = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }
  renderWishlistItems();
}

function toggleWishlistModal(open) {
  const modal = document.getElementById('wishlistModalOverlay');
  if (!modal) return;

  if (open) {
    renderWishlistItems();
    modal.classList.add('is-active');
    document.body.classList.add('modal-open');
  } else {
    modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }
}

function renderWishlistItems() {
  const list = document.getElementById('wishlistItemsContainer');
  if (!list) return;

  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align:center;padding:40px 10px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-soft);margin-bottom:8px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <p style="font-weight:700;margin-bottom:4px;">Your Wishlist is Empty</p>
        <p style="font-size:0.875rem;color:var(--text-muted);">Tap the heart icon on any product to save it here for later.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.wishlist.map(id => {
    const p = getProductById(id);
    if (!p) return '';
    return `
      <div class="wishlist-item-card">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="wishlist-thumb-img"
          onerror="this.onerror=null; this.src='${getFallbackSvg(p.name, p.category)}'"
        />
        <div>
          <h4 style="font-size:0.9375rem;font-weight:700;line-height:1.3;">${p.name}</h4>
          <span class="tabular-nums" style="font-size:0.875rem;font-weight:700;color:var(--blue-primary);">${formatINR(p.price)}</span>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="handleAddToCart('${p.id}', 1); handleToggleWishlist('${p.id}');">
          Move to Cart
        </button>
        <button type="button" class="cart-remove-btn" onclick="handleToggleWishlist('${p.id}')" title="Remove">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;
  }).join('');
}

// ============================================================================
// 10. PRODUCT DETAIL MODAL (QUICK VIEW)
// ============================================================================
let currentPdpQty = 1;

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  state.activePdpProduct = product;
  currentPdpQty = 1;

  const modal = document.getElementById('productDetailModalOverlay');
  if (!modal) return;

  const img = document.getElementById('pdpModalImg');
  const cat = document.getElementById('pdpModalCategory');
  const title = document.getElementById('pdpModalTitle');
  const rating = document.getElementById('pdpModalRating');
  const reviews = document.getElementById('pdpModalReviews');
  const price = document.getElementById('pdpModalPriceNow');
  const origPrice = document.getElementById('pdpModalPriceWas');
  const discount = document.getElementById('pdpModalDiscountBadge');
  const desc = document.getElementById('pdpModalDesc');
  const features = document.getElementById('pdpModalFeatures');
  const qtyVal = document.getElementById('pdpModalQtyVal');
  const wishBtn = document.getElementById('pdpModalWishBtn');

  if (img) {
    img.src = product.image;
    img.alt = product.name;
    img.onerror = function() {
      this.onerror = null;
      this.src = getFallbackSvg(product.name, product.category);
    };
  }

  if (cat) cat.innerText = product.category;
  if (title) title.innerText = product.name;
  if (rating) rating.innerText = product.rating;
  if (reviews) reviews.innerText = `(${product.reviewsCount} verified reviews)`;
  if (price) price.innerText = formatINR(product.price);
  if (origPrice) origPrice.innerText = formatINR(product.originalPrice);
  if (discount) discount.innerText = `${product.discount} (Save ${formatINR(product.originalPrice - product.price)})`;
  if (desc) desc.innerText = product.description;

  if (features && product.features) {
    features.innerHTML = product.features.map(f => `
      <div class="pdp-bullet-row">
        <svg class="pdp-bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </div>
    `).join('');
  }

  if (qtyVal) qtyVal.innerText = currentPdpQty;

  if (wishBtn) {
    const isSaved = state.wishlist.includes(product.id);
    wishBtn.classList.toggle('active', isSaved);
  }

  modal.classList.add('is-active');
  document.body.classList.add('modal-open');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModalOverlay');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }
}

function handlePdpQtyChange(delta) {
  const newQty = currentPdpQty + delta;
  if (newQty >= 1 && newQty <= 10) {
    currentPdpQty = newQty;
    const qtyVal = document.getElementById('pdpModalQtyVal');
    if (qtyVal) qtyVal.innerText = currentPdpQty;
  }
}

function handlePdpAddToCart() {
  if (!state.activePdpProduct) return;
  handleAddToCart(state.activePdpProduct.id, currentPdpQty);
  closeProductModal();
}

function handlePdpToggleWishlist() {
  if (!state.activePdpProduct) return;
  handleToggleWishlist(state.activePdpProduct.id);
  const wishBtn = document.getElementById('pdpModalWishBtn');
  if (wishBtn) {
    wishBtn.classList.toggle('active', state.wishlist.includes(state.activePdpProduct.id));
  }
}

// ============================================================================
// 11. DEMO CHECKOUT MODAL & VALIDATION
// ============================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Add items first!', 'warning');
    return;
  }

  toggleCartDrawer(false);

  const modal = document.getElementById('checkoutModalOverlay');
  if (!modal) return;

  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  if (formView) formView.style.display = 'block';
  if (successView) successView.style.display = 'none';

  renderCheckoutSummary();

  modal.classList.add('is-active');
  document.body.classList.add('modal-open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModalOverlay');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutSummaryItemsList');
  const subtotalEl = document.getElementById('checkoutSummarySubtotal');
  const discountEl = document.getElementById('checkoutSummaryDiscount');
  const shippingEl = document.getElementById('checkoutSummaryShipping');
  const totalEl = document.getElementById('checkoutSummaryTotal');

  const totals = calculateCartTotals();

  if (container) {
    container.innerHTML = state.cart.map(item => {
      const p = getProductById(item.id);
      if (!p) return '';
      return `
        <div class="summary-item-line">
          <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-muted);">
            ${p.name} <strong style="color:var(--text-charcoal);">(x${item.quantity})</strong>
          </span>
          <span class="tabular-nums font-bold">${formatINR(p.price * item.quantity)}</span>
        </div>
      `;
    }).join('');
  }

  if (subtotalEl) subtotalEl.innerText = formatINR(totals.subtotal);
  if (discountEl) discountEl.innerText = '-' + formatINR(totals.discount);
  if (shippingEl) shippingEl.innerText = totals.shipping === 0 ? 'FREE' : formatINR(totals.shipping);
  if (totalEl) totalEl.innerText = formatINR(totals.total);
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('checkoutInputName');
  const emailInput = document.getElementById('checkoutInputEmail');
  const phoneInput = document.getElementById('checkoutInputPhone');
  const addressInput = document.getElementById('checkoutInputAddress');
  const cityInput = document.getElementById('checkoutInputCity');
  const stateSelect = document.getElementById('checkoutSelectState');
  const pinInput = document.getElementById('checkoutInputPin');

  let isValid = true;

  function validate(input, errorId, condition) {
    const errorEl = document.getElementById(errorId);
    if (!condition) {
      input.classList.add('has-error');
      if (errorEl) errorEl.classList.add('visible');
      isValid = false;
    } else {
      input.classList.remove('has-error');
      if (errorEl) errorEl.classList.remove('visible');
    }
  }

  validate(nameInput, 'errCheckoutName', nameInput.value.trim().length >= 3);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validate(emailInput, 'errCheckoutEmail', emailRegex.test(emailInput.value.trim()));
  const phoneDigits = phoneInput.value.replace(/\D/g, '');
  validate(phoneInput, 'errCheckoutPhone', phoneDigits.length === 10);
  validate(addressInput, 'errCheckoutAddress', addressInput.value.trim().length >= 8);
  validate(cityInput, 'errCheckoutCity', cityInput.value.trim().length >= 2);
  validate(stateSelect, 'errCheckoutState', stateSelect.value !== '');
  const pinDigits = pinInput.value.replace(/\D/g, '');
  validate(pinInput, 'errCheckoutPin', pinDigits.length === 6);

  if (!isValid) {
    showToast('Please correct the highlighted form fields.', 'warning');
    return;
  }

  const randomOrderId = 'NC-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const deliveryDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDelivery = deliveryDate.toLocaleDateString('en-IN', options);

  const selectedPay = document.querySelector('input[name="demoPayMode"]:checked');
  const payLabel = selectedPay ? selectedPay.value : 'Cash on Delivery (Demo)';

  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  const orderIdEl = document.getElementById('successOrderNumber');
  const orderDateEl = document.getElementById('successEstimatedDate');
  const orderAddressEl = document.getElementById('successDeliveryAddress');

  if (orderIdEl) orderIdEl.innerText = `Order #${randomOrderId}`;
  if (orderDateEl) orderDateEl.innerText = formattedDelivery;
  if (orderAddressEl) {
    orderAddressEl.innerText = `${nameInput.value.trim()}, ${addressInput.value.trim()}, ${cityInput.value.trim()} - ${pinDigits} (${payLabel})`;
  }

  if (formView) formView.style.display = 'none';
  if (successView) successView.style.display = 'block';

  state.cart = [];
  state.appliedPromo = null;
  persistCart();
  persistPromo();
  updateCartUI();

  showToast(`Demo Order #${randomOrderId} placed successfully!`, 'success');
}

// ============================================================================
// 12. DEMO USER ACCOUNT MODAL
// ============================================================================
function toggleAccountModal(open) {
  const modal = document.getElementById('accountModalOverlay');
  if (!modal) return;

  if (open) {
    modal.classList.add('is-active');
    document.body.classList.add('modal-open');
  } else {
    modal.classList.remove('is-active');
    document.body.classList.remove('modal-open');
  }
}

// ============================================================================
// 13. NEWSLETTER & PROMO COPY
// ============================================================================
function handleNewsletterFormSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletterEmailInput');
  if (!emailInput) return;

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address.', 'warning');
    return;
  }

  emailInput.value = '';
  showToast('🎉 Thank you for subscribing! Use code WELCOME150 for ₹150 OFF.', 'success');
}

function copyPromoCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Copied "${code}" to clipboard!`, 'info');
    });
  } else {
    showToast(`Coupon: ${code}`, 'info');
  }
}

// ============================================================================
// 14. MOBILE MENU DRAWER
// ============================================================================
function toggleMobileMenu(open) {
  const drawer = document.getElementById('mobileNavSideMenu');
  const overlay = document.getElementById('globalDrawerOverlay');

  if (open) {
    if (drawer) drawer.classList.add('is-active');
    if (overlay) overlay.classList.add('is-active');
    document.body.classList.add('drawer-open');
  } else {
    if (drawer) drawer.classList.remove('is-active');
    if (overlay) overlay.classList.remove('is-active');
    document.body.classList.remove('drawer-open');
  }
}

// ============================================================================
// 15. INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();

  // Renders
  renderCatalog();
  renderSpecialOffers();
  renderBestSellers();
  updateCartUI();
  updateWishlistUI();
  initHeroSlider();
  initDemoCountdown();

  // Header scroll detection
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  }, { passive: true });

  // Search input listeners (Desktop & Mobile)
  function attachSearch(inputId) {
    const input = document.getElementById(inputId);
    const clearBtn = document.getElementById('searchClearBtn');

    if (input) {
      input.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (clearBtn) clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
        renderCatalog();
      });

      // Shortcut '/' to search
      window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          input.focus();
        }
      });
    }
  }

  attachSearch('headerSearchInput');
  attachSearch('mobileSearchInput');

  // Search clear button
  const clearBtn = document.getElementById('searchClearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      state.searchQuery = '';
      const input = document.getElementById('headerSearchInput');
      const mInput = document.getElementById('mobileSearchInput');
      if (input) input.value = '';
      if (mInput) mInput.value = '';
      clearBtn.classList.remove('visible');
      renderCatalog();
    });
  }

  // Sorting dropdown
  const sortSelect = document.getElementById('sortSelectDropdown');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Category filter chips
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.getAttribute('data-cat');
      handleCategorySelect(cat);
    });
  });

  // Announcement bar dismiss
  const annClose = document.getElementById('announcementDismissBtn');
  const annBar = document.getElementById('topAnnouncementBar');
  if (annClose && annBar) {
    annClose.addEventListener('click', () => {
      annBar.style.display = 'none';
    });
  }

  // Backdrop click to close drawers
  const overlay = document.getElementById('globalDrawerOverlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      toggleCartDrawer(false);
      toggleMobileMenu(false);
    });
  }

  // Escape key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCartDrawer(false);
      toggleMobileMenu(false);
      toggleWishlistModal(false);
      toggleAccountModal(false);
      closeProductModal();
      closeCheckoutModal();
    }
  });

  // Payment choice cards highlight
  document.querySelectorAll('.payment-choice-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-choice-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
});
