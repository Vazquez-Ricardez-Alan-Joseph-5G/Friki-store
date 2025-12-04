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
    image: "https://i.pinimg.com/1200x/ce/f6/99/cef699208643e4bf2b626e5241413219.jpg"
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
    image: "https://i.pinimg.com/1200x/2b/42/33/2b4233a836d828750179d696df40e6ca.jpg"
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
    image: "https://i.pinimg.com/736x/45/53/aa/4553aa9d955e1ffdf4780b043ab5b7f7.jpg"
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
    image: "https://i.pinimg.com/736x/cd/61/e1/cd61e1f01071774c6d641412cbaf13e0.jpg"
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
    image: "https://i.pinimg.com/736x/d0/59/eb/d059eb927f9a42a82d9e8de52397ee6b.jpg"
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
    image: "https://i.pinimg.com/1200x/3b/0a/c6/3b0ac67244cbdb40fd4bd0b931423fb5.jpg"
  },
  {
      id: "P-007",
      title: "Funko Pop! Ahsoka Tano",
      brand: "Star Wars",
      price: 499,
      stock: 10,
      rating: 4.7,
      category: "Figuras",
      saga: "Star Wars",
      description: "Figura Funko Pop! de Ahsoka Tano con diseño detallado y colores vibrantes.",
      image: "https://i.pinimg.com/736x/be/85/4f/be854f1c505af3a1de964c68d3e4d37b.jpg"
  },
  {
      id: "P-008",
      title: "Sudadera Hogwarts Casas",
      brand: "Harry Potter",
      price: 699,
      stock: 6,
      rating: 4.5,
      category: "Ropa",
      saga: "Harry Potter",
      description: "Sudadera con emblemas de las cuatro casas de Hogwarts. Tela calientita y resistente.",
      image: "https://i.pinimg.com/736x/73/37/a2/7337a22d814a1162b648e8c68ceb7f80.jpg"
  },
  {
      id: "P-009",
      title: "Lámpara Pokéball LED",
      brand: "Nintendo",
      price: 329,
      stock: 15,
      rating: 4.6,
      category: "Hogar",
      saga: "Pokémon",
      description: "Lámpara decorativa con forma de Pokéball que cambia entre 7 colores.",
      image: "https://i.pinimg.com/736x/d3/f9/66/d3f966d654258b55caa52b17596ed020.jpg"
  },
  {
      id: "P-010",
      title: "Figura coleccionable Luffy Gear 5",
      brand: "Banpresto",
      price: 949,
      stock: 9,
      rating: 4.9,
      category: "Figuras",
      saga: "One Piece",
      description: "Figura detallada de Luffy en su forma Gear 5 con efectos de nube.",
      image: "https://i.pinimg.com/736x/64/c4/d0/64c4d0ab61b5485d7d5198afafb6c585.jpg"
  },
  {
      id: "P-011",
      title: "Poster retro The Mandalorian",
      brand: "Lucasfilm",
      price: 169,
      stock: 13,
      rating: 4.2,
      category: "Posters",
      saga: "Star Wars",
      description: "Póster con estilo vintage de Mando y Grogu. Impresión de alta calidad.",
      image: "https://i.pinimg.com/1200x/ff/ca/a8/ffcaa8e61c6f1ef52d280e9beab3daf6.jpg"
  },
  {
      id: "P-012",
      title: "Control inalámbrico edición Cyberpunk",
      brand: "Xbox",
      price: 1499,
      stock: 4,
      rating: 4.8,
      category: "Gaming",
      saga: "Cyberpunk 2077",
      description: "Control edición especial con texturas únicas y conectividad avanzada.",
      image: "https://u-mercari-images.mercdn.net/photos/m47394990149_1.jpg"
  },
  {
      id: "P-013",
      title: "Taza térmica Avengers",
      brand: "Marvel",
      price: 229,
      stock: 18,
      rating: 4.4,
      category: "Hogar",
      saga: "Marvel",
      description: "Taza que cambia de color al contacto con líquidos calientes, revelando a los Avengers.",
      image: "https://i.pinimg.com/1200x/fa/7f/62/fa7f620ebef2305f24014cbf66e8e83b.jpg"
  },
  {
      id: "P-014",
      title: "Playera Doom Slayer",
      brand: "Bethesda",
      price: 329,
      stock: 7,
      rating: 4.5,
      category: "Ropa",
      saga: "Doom",
      description: "Playera negra con arte del Doom Slayer en estilo minimalista.",
      image: "https://i.pinimg.com/736x/03/ab/a3/03aba3eb5b8d32efbcecf3785826c2e4.jpg"
  },
  {
      id: "P-015",
      title: "Set de posters Studio Ghibli",
      brand: "Ghibli",
      price: 299,
      stock: 11,
      rating: 4.7,
      category: "Posters",
      saga: "Studio Ghibli",
      description: "Set de 4 posters con arte de Totoro, Chihiro y otras películas icónicas.",
      image: "https://i.pinimg.com/1200x/dd/33/c1/dd33c12fb5dec2745968de4e54d96529.jpg"
  },
  {
      id: "P-016",
      title: "Alfombrilla gamer Demon Slayer",
      brand: "Kimetsu no Yaiba",
      price: 259,
      stock: 16,
      rating: 4.6,
      category: "Gaming",
      saga: "Demon Slayer",
      description: "Mousepad extendido con diseño de Tanjiro y Nezuko. Base antideslizante.",
      image: "https://i.pinimg.com/1200x/05/4d/3f/054d3f2c8885b4b14b47d493c65080a5.jpg"
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
