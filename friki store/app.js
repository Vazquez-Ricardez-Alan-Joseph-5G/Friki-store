// ===== Datos de ejemplo (simula catálogo) =====
const PRODUCTS = [
  {
    id: "P-001",
    title: "Funko Pop! Darth Vader",
    brand: "Star Wars",
    price: 499,
    stock: 12,
    rating: 4.7,
    category: "Figuras",
    saga: "Star Wars",
    description: "Figura coleccionable de Darth Vader con detalles icónicos y acabado premium.",
    image: "https://images.unsplash.com/photo-1606211708967-16c10c4a2c74?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "P-002",
    title: "Playera Pikachu edición limitada",
    brand: "Nintendo",
    price: 349,
    stock: 5,
    rating: 4.4,
    category: "Ropa",
    saga: "Pokémon",
    description: "Playera de algodón suave con estampado retro de Pikachu.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "P-003",
    title: "Figura articulada Goku Super Saiyan",
    brand: "Bandai",
    price: 899,
    stock: 8,
    rating: 4.8,
    category: "Figuras",
    saga: "Dragon Ball",
    description: "Figura altamente articulada con manos intercambiables y efecto de energía.",
    image: "https://images.unsplash.com/photo-1604908176997-89f381099a79?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "P-004",
    title: "Taza temática The Legend of Zelda",
    brand: "Nintendo",
    price: 199,
    stock: 20,
    rating: 4.3,
    category: "Hogar",
    saga: "Zelda",
    description: "Taza de cerámica con el emblema de Hylia. Apta para microondas.",
    image: "https://images.unsplash.com/photo-1517955492026-5d73b53c8677?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "P-005",
    title: "Poster vintage Spider-Man",
    brand: "Marvel",
    price: 159,
    stock: 0,
    rating: 4.1,
    category: "Posters",
    saga: "Marvel",
    description: "Poster tamaño A2 con acabado mate y arte clásico de Spider-Man.",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f284aef0d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "P-006",
    title: "Mouse gamer RGB",
    brand: "Logitech",
    price: 699,
    stock: 14,
    rating: 4.6,
    category: "Gaming",
    saga: "PC",
    description: "Sensor preciso, 6 botones programables y retroiluminación RGB.",
    image: "https://images.unsplash.com/photo-1585079542155-7753f0f06baf?q=80&w=600&auto=format&fit=crop"
  }
];

// ===== Estado =====
const state = {
  products: PRODUCTS,
  filtered: PRODUCTS,
  categories: [],
  cart: JSON.parse(localStorage.getItem("friki_cart") || "[]"),
  currentProduct: null
};

// Carrito
document.getElementById("cartBtn").addEventListener("click", () => {
  renderCart();
  openCart(); // abre el carrito
});
document.getElementById("closeCart").addEventListener("click", closeCart); // cierra el carrito

// ===== Utilidades =====
const formatPrice = (value) =>
  value.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

const saveCart = () => localStorage.setItem("friki_cart", JSON.stringify(state.cart));

const calcSubtotal = () =>
  state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

// ===== Inicialización =====
document.addEventListener("DOMContentLoaded", () => {
  initCategories();
  renderCategories();
  renderProducts(state.filtered);
  updateCartCount();
  bindUI();
});

// ===== Categorías =====
function initCategories() {
  const set = new Set(state.products.map(p => p.category));
  state.categories = Array.from(set);
}

function renderCategories() {
  const list = document.getElementById("categoryList");
  list.innerHTML = "";
  state.categories.forEach(cat => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.addEventListener("click", () => filterByCategory(cat));
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function filterByCategory(category) {
  state.filtered = state.products.filter(p => p.category === category);
  renderProducts(state.filtered);
}

// ===== Productos =====
function renderProducts(products) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  if (products.length === 0) {
    grid.innerHTML = `<p class="muted">No encontramos productos con esos criterios.</p>`;
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    const imgWrap = document.createElement("div");
    imgWrap.className = "card__img";
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.title;
    imgWrap.appendChild(img);

    const body = document.createElement("div");
    body.className = "card__body";
    const title = document.createElement("div");
    title.className = "card__title";
    title.textContent = p.title;

    const brand = document.createElement("div");
    brand.className = "card__brand";
    brand.textContent = p.brand;

    const meta = document.createElement("div");
    meta.className = "card__meta";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatPrice(p.price);
    const stock = document.createElement("span");
    stock.className = "stock";
    stock.textContent = p.stock > 0 ? "En stock" : "Agotado";

    meta.appendChild(price);
    meta.appendChild(stock);

    const rating = document.createElement("div");
    rating.className = "rating";
    rating.textContent = "★".repeat(Math.round(p.rating)) + ` (${p.rating.toFixed(1)})`;

    const actions = document.createElement("div");
    actions.className = "card__actions";
    const detailsBtn = document.createElement("button");
    detailsBtn.className = "btn btn--ghost";
    detailsBtn.textContent = "Detalles";
    detailsBtn.addEventListener("click", () => openProductModal(p));

    const addBtn = document.createElement("button");
    addBtn.className = "btn btn--primary";
    addBtn.textContent = "Agregar al carrito";
    addBtn.disabled = p.stock <= 0;
    addBtn.addEventListener("click", () => addToCart(p, 1));

    actions.appendChild(detailsBtn);
    actions.appendChild(addBtn);

    body.appendChild(title);
    body.appendChild(brand);
    body.appendChild(rating);
    body.appendChild(meta);
    body.appendChild(actions);

    card.appendChild(imgWrap);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

// ===== Búsqueda y filtros =====
function applySearch() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();
  state.filtered = state.products.filter(p =>
    [p.title, p.brand, p.category, p.saga].some(f =>
      String(f).toLowerCase().includes(q)
    )
  );
  renderProducts(state.filtered);
}

function applyFilters() {
  const min = Number(document.getElementById("priceMin").value || 0);
  const max = Number(document.getElementById("priceMax").value || Number.MAX_SAFE_INTEGER);
  const onlyStock = document.getElementById("onlyStock").checked;

  state.filtered = state.products.filter(p => {
    const inRange = p.price >= min && p.price <= max;
    const stockOK = !onlyStock || p.stock > 0;
    return inRange && stockOK;
  });

  applySort();
  renderProducts(state.filtered);
}

function clearFilters() {
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  document.getElementById("onlyStock").checked = false;
  document.getElementById("searchInput").value = "";
  state.filtered = state.products;
  document.getElementById("sortSelect").value = "relevance";
  renderProducts(state.filtered);
}

function applySort() {
  const val = document.getElementById("sortSelect").value;
  const arr = [...state.filtered];
  switch (val) {
    case "price-asc":
      arr.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      arr.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      arr.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // relevancia: mantén como llegó (por ahora)
      break;
  }
  state.filtered = arr;
}

// ===== Modal de producto =====
function openProductModal(product) {
  state.currentProduct = product;
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalBrand").textContent = product.brand;
  document.getElementById("modalRating").textContent = "★".repeat(Math.round(product.rating)) + ` (${product.rating.toFixed(1)})`;
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalStock").textContent = product.stock > 0 ? "En stock" : "Agotado";
  document.getElementById("modalQty").value = 1;
  document.getElementById("modalAddToCart").disabled = product.stock <= 0;
  document.getElementById("productModal").setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  document.getElementById("productModal").setAttribute("aria-hidden", "true");
}

// ===== Carrito =====
function addToCart(product, qty = 1) {
  const idx = state.cart.findIndex(i => i.id === product.id);
  if (idx >= 0) {
    state.cart[idx].qty = Math.min(state.cart[idx].qty + qty, 99);
  } else {
    state.cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty
    });
  }
  saveCart();
  updateCartCount();
  renderCart();
  openCart();
}

function updateCartCount() {
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cartCount").textContent = count;
}

function renderCart() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";
  if (state.cart.length === 0) {
    container.innerHTML = `<p class="muted">Tu carrito está vacío.</p>`;
  } else {
    state.cart.forEach(item => {
      const row = document.createElement("div");
      row.className = "cart-item";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;

      const info = document.createElement("div");
      const title = document.createElement("div");
      title.className = "cart-item__title";
      title.textContent = item.title;

      const price = document.createElement("div");
      price.className = "price";
      price.textContent = formatPrice(item.price);

      info.appendChild(title);
      info.appendChild(price);

      const controls = document.createElement("div");
      controls.className = "cart-item__controls";

      const qtyInput = document.createElement("input");
      qtyInput.type = "number";
      qtyInput.min = "1";
      qtyInput.value = item.qty;
      qtyInput.addEventListener("change", (e) => {
        const val = Math.max(1, Number(e.target.value || 1));
        item.qty = val;
        saveCart();
        updateCartCount();
        updateSubtotal();
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "cart-item__remove";
      removeBtn.textContent = "Eliminar";
      removeBtn.addEventListener("click", () => {
        state.cart = state.cart.filter(i => i.id !== item.id);
        saveCart();
        updateCartCount();
        renderCart();
        updateSubtotal();
      });

      controls.appendChild(qtyInput);
      controls.appendChild(removeBtn);

      row.appendChild(img);
      row.appendChild(info);
      row.appendChild(controls);
      container.appendChild(row);
    });
  }
  updateSubtotal();
}

function updateSubtotal() {
  document.getElementById("cartSubtotal").textContent = formatPrice(calcSubtotal());
}

function openCart() {
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
  document.getElementById("cartDrawer").setAttribute("aria-hidden", "true");
}

// ===== Checkout =====
function openCheckout() {
  if (state.cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  document.getElementById("checkoutModal").setAttribute("aria-hidden", "false");
}
function closeCheckout() {
  document.getElementById("checkoutModal").setAttribute("aria-hidden", "true");
}

// ===== Login simulado =====
function login() {
  alert("Login simulado: aquí conectarías tu backend o proveedor de auth.");
}

// ===== Newsletter =====
function subscribeNewsletter(email) {
  alert(`¡Gracias por suscribirte, ${email}!`);
}

// ===== Enlaces UI =====
function bindUI() {
  // Búsqueda
  document.getElementById("searchBtn").addEventListener("click", applySearch);
  document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") applySearch();
  });

  // Filtros
  document.getElementById("applyFilters").addEventListener("click", applyFilters);
  document.getElementById("clearFilters").addEventListener("click", clearFilters);
  document.getElementById("sortSelect").addEventListener("change", () => {
    applySort();
    renderProducts(state.filtered);
  });

  // Navbar móvil
  const navToggle = document.getElementById("navToggle");
  const categoryList = document.getElementById("categoryList");
  navToggle.addEventListener("click", () => {
    const expanded = categoryList.getAttribute("aria-expanded") === "true";
    categoryList.setAttribute("aria-expanded", String(!expanded));
  });

  // Modal producto
  document.getElementById("closeModal").addEventListener("click", closeProductModal);
  document.getElementById("modalAddToCart").addEventListener("click", () => {
    const qty = Math.max(1, Number(document.getElementById("modalQty").value || 1));
    if (state.currentProduct) addToCart(state.currentProduct, qty);
    closeProductModal();
  });

  // Carrito
  document.getElementById("cartBtn").addEventListener("click", () => {
    renderCart();
    openCart();
  });
  document.getElementById("closeCart").addEventListener("click", closeCart);

  // Checkout
  document.getElementById("checkoutBtn").addEventListener("click", openCheckout);
  document.getElementById("closeCheckout").addEventListener("click", closeCheckout);
  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("fullName").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const zip = document.getElementById("zip").value;
    const payment = document.getElementById("payment").value;

    if (!email || !name || !address || !city || !zip || !payment) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Simula orden
    document.getElementById("orderMessage").hidden = false;
    // Limpia carrito
    state.cart = [];
    saveCart();
    updateCartCount();
    renderCart();
  });

  // Login simulado
  document.getElementById("loginBtn").addEventListener("click", login);

  // Newsletter
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector("input[type='email']").value;
    subscribeNewsletter(email);
    e.target.reset();
  });
}