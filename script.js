/**
 * SHOPORA — Premium Online Shopping Store
 * Vanilla JavaScript Engine (No Frameworks)
 * Handles Product Catalog, Cart Drawer, Wishlist, Quick View, Checkout, Search & LocalStorage
 */

// ============================================================================
// 1. PRODUCT CATALOG DATA (15 Realistic Sample Products in INR)
// ============================================================================
const PRODUCTS = [
  {
    id: 'shp-01',
    name: 'AcousticPro Wireless ANC Headphones',
    category: 'electronics',
    price: 3499,
    originalPrice: 5999,
    discount: '42% OFF',
    rating: 4.9,
    reviewsCount: 328,
    image: '/src/assets/images/shopora_special_tech_1792318777162.jpg',
    description: 'Studio-grade active noise cancellation with 40mm neodymium drivers, 45-hour battery life, and plush memory foam earcups.',
    features: ['Active Noise Cancellation (ANC)', '45h Playtime with Fast Charge', 'Bluetooth 5.3 Multipoint', 'Built-in Quad Clear-Voice Mics'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-02',
    name: 'AuraSync AMOLED Smartwatch',
    category: 'electronics',
    price: 2499,
    originalPrice: 4999,
    discount: '50% OFF',
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80',
    description: 'Sleek aerospace aluminum casing with 1.43-inch Always-on AMOLED display, heart rate, SpO2, and 100+ fitness modes.',
    features: ['1.43" Vivid AMOLED Display', 'Comprehensive SpO2 & Heart Rate', '7-Day Battery Life', 'IP68 Water Resistance'],
    isTrending: true,
    isBestSeller: false
  },
  {
    id: 'shp-03',
    name: 'PulseBass Rugged Bluetooth Speaker',
    category: 'electronics',
    price: 1899,
    originalPrice: 2999,
    discount: '37% OFF',
    rating: 4.7,
    reviewsCount: 164,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
    description: '360-degree immersive acoustic sound with dual passive bass radiators and waterproof IPX7 construction for travel.',
    features: ['24W Room-Filling Acoustic Output', 'IPX7 Fully Waterproof', '20 Hours Battery Endurance', 'True Wireless Stereo Pairing'],
    isTrending: false,
    isBestSeller: true
  },
  {
    id: 'shp-04',
    name: 'Tailored Heavyweight Cotton Overshirt',
    category: 'fashion',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 192,
    image: '/src/assets/images/shopora_special_fashion_1792318777560.jpg',
    description: 'Crafted from 100% sustainable combed cotton with structured utility pockets, horn buttons, and relaxed drape.',
    features: ['100% Combed Premium Cotton', 'Reinforced Double-Stitched Seams', 'Pre-shrunk Fabric Treatment', 'Relaxed Contemporary Fit'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-05',
    name: 'Raw Indigo Selvedge Denim Jacket',
    category: 'fashion',
    price: 2799,
    originalPrice: 3999,
    discount: '30% OFF',
    rating: 4.9,
    reviewsCount: 143,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80',
    description: 'Heavyweight 14oz Japanese raw shuttle-loom selvedge denim with antique brass hardware and tailored silhouette.',
    features: ['14oz Selvedge Denim', 'Custom Engraved Brass Rivets', 'Unwashed Natural Indigo Dye', 'Deep Interior Utility Pockets'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-06',
    name: 'Merino Wool Minimalist Crewneck',
    category: 'fashion',
    price: 1899,
    originalPrice: 2999,
    discount: '36% OFF',
    rating: 4.7,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-soft extrafine Merino wool that naturally regulates body temperature, resists odor, and layers effortlessly.',
    features: ['100% Extrafine Merino Wool', 'Breathable & Odor-Resistant', 'Ribbed Cuffs & Hem', 'Machine Washable on Delicate'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-07',
    name: 'Atelier Nappa Leather Low Sneakers',
    category: 'footwear',
    price: 2699,
    originalPrice: 4499,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 412,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80',
    description: 'Clean silhouette in supple full-grain Italian calf leather with cushioned Margom rubber sole and calfskin lining.',
    features: ['Full-Grain Nappa Leather Upper', 'Stitched Durable Rubber Cupsole', 'Orthopedic Memory Foam Footbed', 'Handcrafted Precision Finish'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-08',
    name: 'Hand-Burnished Chelsea Boots',
    category: 'footwear',
    price: 3299,
    originalPrice: 5499,
    discount: '40% OFF',
    rating: 4.8,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&auto=format&fit=crop&q=80',
    description: 'Classic pull-on silhouette in rich burnished cognac leather with dual elasticated gussets and Goodyear welt construction.',
    features: ['Supple Crust Leather', 'Goodyear Welted Sole', 'Durable Anti-Slip Tread', 'Smooth Pull Tabs for Easy On/Off'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-09',
    name: 'Nordic Sculptural Stoneware Vase',
    category: 'home',
    price: 1199,
    originalPrice: 1999,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 156,
    image: '/src/assets/images/shopora_special_home_1792318777514.jpg',
    description: 'Handcrafted raw textured stoneware with organic silhouettes, perfect for dried botanicals and minimalist living spaces.',
    features: ['Hand-Thrown Matte Ceramic', 'Watertight Interior Glaze', 'Organic Asymmetric Form', 'Protective Felt Base Pad'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-10',
    name: 'Geometric Ultrasonic Aroma Diffuser',
    category: 'home',
    price: 1499,
    originalPrice: 2499,
    discount: '40% OFF',
    rating: 4.7,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&auto=format&fit=crop&q=80',
    description: 'Facet ceramic ultrasonic essential oil diffuser with ambient warm LED nightlight and whisper-quiet misting cycles.',
    features: ['Whisper Quiet < 20dB Operation', 'Warm Ambient LED Mood Ring', 'Auto Shut-Off Safety Sensor', 'Continuous & Intermittent Modes'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-11',
    name: 'Organic Waffle Textured Linen Throw',
    category: 'home',
    price: 1299,
    originalPrice: 2199,
    discount: '41% OFF',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&auto=format&fit=crop&q=80',
    description: '100% stone-washed European flax linen and combed organic cotton blend with lightweight breathability and eyelash fringe.',
    features: ['Pure French Flax & Organic Cotton', 'Stone-Washed for Softness', 'Generous 130x180cm Size', 'OEKO-TEX Certified Eco Non-Toxic'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-12',
    name: 'Classic Minimalist Chronograph Watch',
    category: 'accessories',
    price: 2999,
    originalPrice: 4999,
    discount: '40% OFF',
    rating: 4.9,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
    description: 'Polished surgical 316L stainless steel case, sapphire crystal glass, Japanese quartz movement, and vegetable-tanned leather band.',
    features: ['316L Surgical Grade Steel', 'Scratch-Proof Sapphire Glass', '5 ATM Water Resistance', 'Vegetable-Tanned Italian Leather Strap'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-13',
    name: 'Heritage Slim Bi-Fold Leather Wallet',
    category: 'accessories',
    price: 899,
    originalPrice: 1599,
    discount: '44% OFF',
    rating: 4.8,
    reviewsCount: 265,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=80',
    description: 'Compact slim pocket profile with integrated RFID blocking layer, 8 quick-access card slots, and full-length cash sleeve.',
    features: ['Certified RFID Data Protection', 'Top-Grain Hunter Leather', 'Holds 10+ Cards & Currency', 'Super Slim 9mm Profile'],
    isTrending: false,
    isBestSeller: false
  },
  {
    id: 'shp-14',
    name: 'Botanical Radiance Vitamin C Serum',
    category: 'beauty',
    price: 799,
    originalPrice: 1399,
    discount: '43% OFF',
    rating: 4.9,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop&q=80',
    description: 'Potent 15% stabilized L-Ascorbic Acid infused with Kakadu plum, Ferulic acid, and Hyaluronic acid for glowing, radiant skin.',
    features: ['15% Potent Stabilized Vitamin C', 'Hyaluronic Acid Hydration Boost', 'Dermatologically Tested Safe', 'Paraben, Cruelty & Fragrance Free'],
    isTrending: true,
    isBestSeller: true
  },
  {
    id: 'shp-15',
    name: 'Deep Nourish Shea Butter Night Cream',
    category: 'beauty',
    price: 649,
    originalPrice: 1099,
    discount: '41% OFF',
    rating: 4.7,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&auto=format&fit=crop&q=80',
    description: 'Rich velvety night restorative cream with cold-pressed unrefined African shea butter, ceramides, and jojoba seed oil.',
    features: ['Triple Ceramide Skin Barrier Repair', 'Pure Unrefined Cold-Pressed Shea', 'Non-Comedogenic Formula', 'Deep Overnight Rejuvenation'],
    isTrending: false,
    isBestSeller: false
  }
];

// Available Promo Codes
const VALID_PROMOS = {
  'SHOPORA10': { type: 'percent', value: 0.10, desc: '10% Discount on order' },
  'SHOPORA200': { type: 'flat', value: 200, minOrder: 1499, desc: '₹200 OFF on orders above ₹1,499' },
  'FREESHIP': { type: 'shipping', value: 0, desc: 'Free Express Shipping' },
  'WELCOME150': { type: 'flat', value: 150, minOrder: 999, desc: '₹150 OFF Welcome Bonus' }
};

// ============================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ============================================================================
let state = {
  cart: [],             // Array of { id: string, quantity: number }
  wishlist: [],         // Array of product id strings
  activeCategory: 'all',// 'all' | 'electronics' | 'fashion' | etc.
  searchQuery: '',
  sortBy: 'featured',   // 'featured' | 'price-low' | 'price-high' | 'rating' | 'discount'
  appliedPromo: null,   // string code or null
  activePdpProduct: null
};

// Initialize State from LocalStorage
function initStorage() {
  try {
    const savedCart = localStorage.getItem('shopora_cart');
    if (savedCart) {
      state.cart = JSON.parse(savedCart);
    }
  } catch (e) {
    console.error('Error loading cart from localStorage', e);
    state.cart = [];
  }

  try {
    const savedWish = localStorage.getItem('shopora_wishlist');
    if (savedWish) {
      state.wishlist = JSON.parse(savedWish);
    }
  } catch (e) {
    console.error('Error loading wishlist from localStorage', e);
    state.wishlist = [];
  }

  try {
    const savedPromo = localStorage.getItem('shopora_promo');
    if (savedPromo && VALID_PROMOS[savedPromo]) {
      state.appliedPromo = savedPromo;
    }
  } catch (e) {
    state.appliedPromo = null;
  }
}

function persistCart() {
  try {
    localStorage.setItem('shopora_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Could not persist cart to localStorage', e);
  }
}

function persistWishlist() {
  try {
    localStorage.setItem('shopora_wishlist', JSON.stringify(state.wishlist));
  } catch (e) {
    console.warn('Could not persist wishlist to localStorage', e);
  }
}

function persistPromo() {
  try {
    if (state.appliedPromo) {
      localStorage.setItem('shopora_promo', state.appliedPromo);
    } else {
      localStorage.removeItem('shopora_promo');
    }
  } catch (e) {
    console.warn('Could not persist promo to localStorage', e);
  }
}

// ============================================================================
// 3. UTILITY FUNCTIONS & FORMATTERS
// ============================================================================
function formatINR(amount) {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Fallback SVG image data URI when an external image cannot be loaded
function getFallbackImage(name, category) {
  const cleanName = encodeURIComponent(name);
  const cleanCat = encodeURIComponent(category.toUpperCase());
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f1f5f9"/><circle cx="200" cy="170" r="48" fill="%23bfdbfe"/><path d="M185 170 L200 155 L215 170 M200 155 L200 185" stroke="%232563eb" stroke-width="4" stroke-linecap="round"/><text x="200" y="240" font-family="sans-serif" font-size="14" font-weight="700" fill="%230f172a" text-anchor="middle">${cleanName}</text><text x="200" y="265" font-family="sans-serif" font-size="12" font-weight="600" fill="%232563eb" text-anchor="middle">${cleanCat}</text></svg>`;
}

// ============================================================================
// 4. TOAST NOTIFICATION SYSTEM
// ============================================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #22c55e;"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  } else if (type === 'info') {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #60a5fa;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  } else {
    iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: #f97316;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
  }

  toast.innerHTML = `
    <span style="display:flex;align-items:center;">${iconSvg}</span>
    <span style="flex:1;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 250);
  }, 3200);
}

// ============================================================================
// 5. CATALOG RENDERING & FILTERING
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
      // Keep trending and bestsellers up front
      list.sort((a, b) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0));
      break;
  }

  return list;
}

function renderProductCard(p) {
  const isWishlisted = state.wishlist.includes(p.id);

  return `
    <article class="product-card" data-id="${p.id}">
      <div class="product-card-media">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="product-card-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='${getFallbackImage(p.name, p.category)}'"
        />
        <div class="product-card-top">
          <span class="discount-badge">${p.discount}</span>
          <button 
            type="button" 
            class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            onclick="handleToggleWishlist('${p.id}', event)"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="quick-view-overlay">
          <button type="button" class="quick-view-btn" onclick="openProductModal('${p.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Quick View
          </button>
        </div>
      </div>

      <div class="product-card-body">
        <div class="product-card-meta">
          <span class="product-category-kicker">${p.category}</span>
          <div class="product-rating">
            <span class="rating-stars">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </span>
            <span>${p.rating}</span>
            <span class="rating-count">(${p.reviewsCount})</span>
          </div>
        </div>

        <h3 class="product-title" onclick="openProductModal('${p.id}')">${p.name}</h3>
        <p class="product-desc">${p.description}</p>

        <div class="product-card-footer">
          <div class="price-container">
            <span class="current-price tabular-nums">${formatINR(p.price)}</span>
            <span class="original-price tabular-nums">${formatINR(p.originalPrice)}</span>
          </div>
          <button 
            type="button" 
            class="add-cart-btn" 
            onclick="handleAddToCart('${p.id}', 1, event)"
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
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('catalogCount');
  const badgeEl = document.getElementById('activeFilterBadge');

  if (!grid) return;

  const filtered = getFilteredAndSortedProducts();

  // Update count indicator
  if (countEl) {
    countEl.innerText = `${filtered.length} Product${filtered.length === 1 ? '' : 's'}`;
  }

  // Update filter badge text
  if (badgeEl) {
    const categoryName = state.activeCategory === 'all' ? 'All Collections' : state.activeCategory.toUpperCase();
    if (state.searchQuery.trim()) {
      badgeEl.innerText = `Filtered by "${state.searchQuery.trim()}" in ${categoryName}`;
    } else {
      badgeEl.innerText = `Showing ${categoryName}`;
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="catalog-empty">
        <div class="catalog-empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h4 class="catalog-empty-title">No matching products found</h4>
        <p class="catalog-empty-text">We couldn't find any products matching "${state.searchQuery || state.activeCategory}". Try clearing your filters.</p>
        <button type="button" class="btn btn-secondary btn-sm" onclick="handleResetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
}

// Render Best Sellers Carousel / Spotlight
function renderBestSellers() {
  const container = document.getElementById('bestsellersGrid');
  if (!container) return;

  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);
  container.innerHTML = bestSellers.map(renderProductCard).join('');
}

// Category filter click handler
function handleCategorySelect(cat) {
  state.activeCategory = cat;

  // Update pill active classes
  document.querySelectorAll('.category-pill').forEach(pill => {
    if (pill.getAttribute('data-cat') === cat) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  renderCatalog();

  // Smooth scroll to catalog section if triggered from promo or links
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
  const sortSelect = document.getElementById('sortSelect');

  if (searchInput) searchInput.value = '';
  if (mobileSearchInput) mobileSearchInput.value = '';
  if (clearBtn) clearBtn.classList.remove('visible');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelectorAll('.category-pill').forEach(pill => {
    if (pill.getAttribute('data-cat') === 'all') {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  renderCatalog();
}

// ============================================================================
// 6. CART MANAGEMENT & DRAWER
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
  showToast(`Added "${product.name}" to cart!`, 'success');
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

  // Apply Promo Code
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

  // Prevent discount from exceeding subtotal
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

  // Badges
  const cartBadge = document.getElementById('cartBadge');
  const cartHeaderTotal = document.getElementById('cartHeaderTotal');
  const drawerCount = document.getElementById('drawerItemCount');

  if (cartBadge) {
    cartBadge.innerText = totals.itemCount;
    cartBadge.style.display = totals.itemCount > 0 ? 'flex' : 'none';
  }

  if (cartHeaderTotal) {
    cartHeaderTotal.innerText = formatINR(totals.total);
  }

  if (drawerCount) {
    drawerCount.innerText = `${totals.itemCount} ${totals.itemCount === 1 ? 'item' : 'items'}`;
  }

  // Shipping progress in drawer
  const shippingMsg = document.getElementById('shippingProgressMsg');
  const shippingFill = document.getElementById('shippingProgressFill');
  if (shippingMsg && shippingFill) {
    if (totals.subtotal >= 999) {
      shippingMsg.innerHTML = '🎉 <strong>Free Express Delivery Unlocked!</strong>';
      shippingFill.style.width = '100%';
      shippingFill.style.backgroundColor = '#16a34a';
    } else if (totals.subtotal === 0) {
      shippingMsg.innerHTML = 'Add items worth ₹999 or more for <strong>Free Delivery</strong>';
      shippingFill.style.width = '0%';
      shippingFill.style.backgroundColor = 'var(--accent-primary)';
    } else {
      const pct = Math.min(100, Math.round((totals.subtotal / 999) * 100));
      shippingMsg.innerHTML = `Add <strong>${formatINR(totals.neededForFreeShipping)}</strong> more for <strong>Free Delivery</strong>`;
      shippingFill.style.width = `${pct}%`;
      shippingFill.style.backgroundColor = 'var(--accent-primary)';
    }
  }

  // Render items in drawer
  const drawerBody = document.getElementById('cartDrawerBody');
  const drawerFooter = document.getElementById('cartDrawerFooter');

  if (drawerBody && drawerFooter) {
    if (state.cart.length === 0) {
      drawerBody.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-cart-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
          <h4 style="font-size:1.1rem;font-weight:700;">Your Cart is Empty</h4>
          <p style="font-size:0.875rem;color:var(--text-secondary);max-width:240px;">Looks like you haven't added anything to your cart yet.</p>
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
          <div class="cart-item">
            <img 
              src="${p.image}" 
              alt="${p.name}" 
              class="cart-item-img"
              onerror="this.onerror=null; this.src='${getFallbackImage(p.name, p.category)}'"
            />
            <div class="cart-item-details">
              <span class="cart-item-name" title="${p.name}">${p.name}</span>
              <span class="cart-item-price tabular-nums">${formatINR(p.price)}</span>
              <div class="quantity-stepper">
                <button type="button" class="stepper-btn" onclick="handleUpdateQuantity('${p.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="stepper-val tabular-nums">${item.quantity}</span>
                <button type="button" class="stepper-btn" onclick="handleUpdateQuantity('${p.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <button type="button" class="cart-item-remove" onclick="handleRemoveFromCart('${p.id}')" aria-label="Remove item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        `;
      }).join('');

      // Update Bill Breakup
      const subtotalEl = document.getElementById('cartBillSubtotal');
      const discountRow = document.getElementById('cartBillDiscountRow');
      const discountEl = document.getElementById('cartBillDiscount');
      const shippingEl = document.getElementById('cartBillShipping');
      const totalEl = document.getElementById('cartBillTotal');

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
        if (totals.shipping === 0) {
          shippingEl.style.color = 'var(--color-success)';
          shippingEl.style.fontWeight = '700';
        } else {
          shippingEl.style.color = 'var(--text-primary)';
          shippingEl.style.fontWeight = '500';
        }
      }

      if (totalEl) totalEl.innerText = formatINR(totals.total);
    }
  }
}

function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (open) {
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('drawer-open');
  } else {
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
  }
}

// Promo Code Apply
function handleApplyPromo() {
  const input = document.getElementById('cartCouponInput');
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
    showToast('Invalid coupon code. Try "SHOPORA10" or "FREESHIP".', 'warning');
  }
}

// ============================================================================
// 7. WISHLIST MANAGEMENT & MODAL
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
  renderBestSellers();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) {
    badge.innerText = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
  }

  // If wishlist modal is open, re-render it
  renderWishlistModalItems();
}

function toggleWishlistModal(open) {
  const modal = document.getElementById('wishlistModal');
  if (!modal) return;

  if (open) {
    renderWishlistModalItems();
    modal.classList.add('is-open');
    document.body.classList.add('modal-open');
  } else {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
}

function renderWishlistModalItems() {
  const list = document.getElementById('wishlistModalList');
  if (!list) return;

  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align:center;padding:40px 10px;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted);margin-bottom:8px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <p style="font-weight:700;margin-bottom:4px;">Your Wishlist is Empty</p>
        <p style="font-size:0.875rem;color:var(--text-secondary);">Tap the heart icon on any product to save it here for later.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.wishlist.map(id => {
    const p = getProductById(id);
    if (!p) return '';
    return `
      <div class="wishlist-row">
        <img 
          src="${p.image}" 
          alt="${p.name}" 
          class="wishlist-img"
          onerror="this.onerror=null; this.src='${getFallbackImage(p.name, p.category)}'"
        />
        <div>
          <h4 style="font-size:0.9375rem;font-weight:700;line-height:1.3;">${p.name}</h4>
          <span class="tabular-nums" style="font-size:0.875rem;font-weight:700;color:var(--accent-primary);">${formatINR(p.price)}</span>
        </div>
        <button type="button" class="btn btn-primary btn-sm" onclick="handleAddToCart('${p.id}', 1); handleToggleWishlist('${p.id}');">
          Move to Cart
        </button>
        <button type="button" class="cart-item-remove" onclick="handleToggleWishlist('${p.id}')" title="Remove">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    `;
  }).join('');
}

// ============================================================================
// 8. PRODUCT DETAIL MODAL (QUICK VIEW)
// ============================================================================
let currentPdpQty = 1;

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  state.activePdpProduct = product;
  currentPdpQty = 1;

  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  // Populate data
  const img = document.getElementById('pdpImg');
  const cat = document.getElementById('pdpCategory');
  const title = document.getElementById('pdpTitle');
  const rating = document.getElementById('pdpRating');
  const reviews = document.getElementById('pdpReviews');
  const currentPrice = document.getElementById('pdpCurrentPrice');
  const origPrice = document.getElementById('pdpOrigPrice');
  const savings = document.getElementById('pdpSavings');
  const desc = document.getElementById('pdpDesc');
  const features = document.getElementById('pdpFeatures');
  const qtyVal = document.getElementById('pdpQtyVal');
  const wishBtn = document.getElementById('pdpWishBtn');

  if (img) {
    img.src = product.image;
    img.alt = product.name;
    img.onerror = function() {
      this.onerror = null;
      this.src = getFallbackImage(product.name, product.category);
    };
  }

  if (cat) cat.innerText = product.category;
  if (title) title.innerText = product.name;
  if (rating) rating.innerText = product.rating;
  if (reviews) reviews.innerText = `(${product.reviewsCount} customer reviews)`;
  if (currentPrice) currentPrice.innerText = formatINR(product.price);
  if (origPrice) origPrice.innerText = formatINR(product.originalPrice);
  if (savings) {
    const savedAmount = product.originalPrice - product.price;
    savings.innerText = `Save ${formatINR(savedAmount)} (${product.discount})`;
  }
  if (desc) desc.innerText = product.description;

  if (features && product.features) {
    features.innerHTML = product.features.map(f => `
      <div class="pdp-feature-item">
        <svg class="pdp-feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${f}</span>
      </div>
    `).join('');
  }

  if (qtyVal) qtyVal.innerText = currentPdpQty;

  if (wishBtn) {
    const isSaved = state.wishlist.includes(product.id);
    wishBtn.classList.toggle('active', isSaved);
  }

  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
}

function handlePdpQtyChange(delta) {
  const newQty = currentPdpQty + delta;
  if (newQty >= 1 && newQty <= 10) {
    currentPdpQty = newQty;
    const qtyVal = document.getElementById('pdpQtyVal');
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
  const wishBtn = document.getElementById('pdpWishBtn');
  if (wishBtn) {
    const isSaved = state.wishlist.includes(state.activePdpProduct.id);
    wishBtn.classList.toggle('active', isSaved);
  }
}

// ============================================================================
// 9. CHECKOUT SYSTEM & VALIDATION (DEMO)
// ============================================================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty. Add items first!', 'warning');
    return;
  }

  toggleCartDrawer(false);

  const modal = document.getElementById('checkoutModal');
  if (!modal) return;

  // Reset to form view
  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  if (formView) formView.style.display = 'block';
  if (successView) successView.style.display = 'none';

  // Render items in summary
  renderCheckoutSummary();

  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutItemsList');
  const subtotalEl = document.getElementById('checkoutSubtotal');
  const discountEl = document.getElementById('checkoutDiscount');
  const shippingEl = document.getElementById('checkoutShipping');
  const totalEl = document.getElementById('checkoutTotal');

  const totals = calculateCartTotals();

  if (container) {
    container.innerHTML = state.cart.map(item => {
      const p = getProductById(item.id);
      if (!p) return '';
      return `
        <div class="summary-item-row">
          <span class="summary-item-title">${p.name} <strong style="color:var(--text-primary);">(x${item.quantity})</strong></span>
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

  const nameInput = document.getElementById('checkoutName');
  const emailInput = document.getElementById('checkoutEmail');
  const phoneInput = document.getElementById('checkoutPhone');
  const addressInput = document.getElementById('checkoutAddress');
  const cityInput = document.getElementById('checkoutCity');
  const stateSelect = document.getElementById('checkoutState');
  const pinInput = document.getElementById('checkoutPincode');

  let isValid = true;

  // Helper validation
  function validateField(input, errorId, condition) {
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

  // Name: At least 3 letters
  validateField(nameInput, 'errName', nameInput.value.trim().length >= 3);

  // Email: Valid email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validateField(emailInput, 'errEmail', emailRegex.test(emailInput.value.trim()));

  // Phone: 10 digits
  const phoneDigits = phoneInput.value.replace(/\D/g, '');
  validateField(phoneInput, 'errPhone', phoneDigits.length === 10);

  // Address: At least 8 characters
  validateField(addressInput, 'errAddress', addressInput.value.trim().length >= 8);

  // City: At least 2 characters
  validateField(cityInput, 'errCity', cityInput.value.trim().length >= 2);

  // State: Selected
  validateField(stateSelect, 'errState', stateSelect.value !== '');

  // PIN code: Exactly 6 digits
  const pinDigits = pinInput.value.replace(/\D/g, '');
  validateField(pinInput, 'errPin', pinDigits.length === 6);

  if (!isValid) {
    showToast('Please correct the highlighted form fields.', 'warning');
    return;
  }

  // Generate demo order details
  const randomOrderId = 'SHP-' + Math.floor(100000 + Math.random() * 900000);
  const now = new Date();
  const deliveryDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
  const formattedDelivery = deliveryDate.toLocaleDateString('en-IN', options);

  // Selected Payment Method
  const selectedPay = document.querySelector('input[name="demoPaymentMethod"]:checked');
  const payLabel = selectedPay ? selectedPay.value : 'Cash on Delivery (Demo)';

  // Switch to Success View
  const formView = document.getElementById('checkoutFormView');
  const successView = document.getElementById('checkoutSuccessView');
  const orderIdEl = document.getElementById('successOrderId');
  const orderDateEl = document.getElementById('successDeliveryDate');
  const orderAddressEl = document.getElementById('successDeliveryAddress');

  if (orderIdEl) orderIdEl.innerText = `Order #${randomOrderId}`;
  if (orderDateEl) orderDateEl.innerText = formattedDelivery;
  if (orderAddressEl) {
    orderAddressEl.innerText = `${nameInput.value.trim()}, ${addressInput.value.trim()}, ${cityInput.value.trim()} - ${pinDigits} (${payLabel})`;
  }

  if (formView) formView.style.display = 'none';
  if (successView) successView.style.display = 'block';

  // Clear Cart
  state.cart = [];
  state.appliedPromo = null;
  persistCart();
  persistPromo();
  updateCartUI();

  showToast(`Order #${randomOrderId} placed successfully!`, 'success');
}

// ============================================================================
// 10. NEWSLETTER & PROMO INTERACTIONS
// ============================================================================
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const emailInput = document.getElementById('newsletterEmail');
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

// Copy promo code helper
function copyPromoCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Copied code "${code}" to clipboard!`, 'info');
    });
  } else {
    showToast(`Code: ${code}`, 'info');
  }
}

// ============================================================================
// 11. MOBILE DRAWER TOGGLE
// ============================================================================
function toggleMobileMenu(open) {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (open) {
    if (drawer) drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('drawer-open');
  } else {
    if (drawer) drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('drawer-open');
  }
}

// ============================================================================
// 12. DOM INITIALIZATION & EVENT LISTENERS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();

  // Initial renders
  renderCatalog();
  renderBestSellers();
  updateCartUI();
  updateWishlistUI();

  // Header Scroll State
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

  // Search input handling (Desktop & Mobile)
  function setupSearchInput(inputId) {
    const input = document.getElementById(inputId);
    const clearBtn = document.getElementById('searchClearBtn');

    if (input) {
      input.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
        }
        renderCatalog();
      });

      // Global shortcut '/' to focus search
      window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          input.focus();
        }
      });
    }
  }

  setupSearchInput('headerSearchInput');
  setupSearchInput('mobileSearchInput');

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

  // Sort dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Category pills event delegation
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-cat');
      handleCategorySelect(cat);
    });
  });

  // Announcement close
  const annClose = document.getElementById('announcementClose');
  const annBar = document.getElementById('announcementBar');
  if (annClose && annBar) {
    annClose.addEventListener('click', () => {
      annBar.style.display = 'none';
    });
  }

  // Backdrop click to close open drawers/modals
  const backdrop = document.getElementById('drawerBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      toggleCartDrawer(false);
      toggleMobileMenu(false);
    });
  }

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCartDrawer(false);
      toggleMobileMenu(false);
      toggleWishlistModal(false);
      closeProductModal();
      closeCheckoutModal();
    }
  });

  // Payment method radio card selection highlight
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
});
