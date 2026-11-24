// ===== DỮ LIỆU SẢN PHẨM =====
// Muốn có ảnh thật: thêm image: "ten-anh.jpg" vào từng sản phẩm
// colors: các màu để khách chọn. Size được lấy theo danh mục (xem SIZES bên dưới)
const products = [
  { id: 1,  name: "Áo thun nam cotton basic form rộng", image: "ao_thun_den.avif", colorImages: {
      "Trắng": "ao_thun_trang.avif",
      "Đen": "ao_thun_den.avif",
      "Be": "ao_thun_be.avif"
    }, price: 129000, oldPrice: 199000, category: "quan-ao",  sold: 1200, colors: ["Trắng", "Đen", "Be"],
    description: "Áo thun chất liệu 100% cotton dày dặn, thấm hút mồ hôi tốt. Form rộng thoải mái, dễ phối với quần jean, quần short hoặc quần kaki." },
  { 
    id: 2,  
    name: "Quần jean nữ ống rộng lưng cao", 
    image: "jeans_xanh_nhat.webp", // Ảnh hiển thị mặc định khi mới mở trang
    colorImages: {
      "Xanh nhạt": "jeans_xanh_nhat.webp",
      "Xanh đậm": "jeans_xanh_dam.jpg",
      "Đen": "jeans_den.jpg"
    },
    price: 259000, 
    oldPrice: 350000, 
    category: "quan-ao",  
    sold: 860,  
    colors: ["Xanh nhạt", "Xanh đậm", "Đen"],
    description: "Quần jean lưng cao giúp tôn dáng, ống rộng che khuyết điểm chân. Chất jean co giãn nhẹ, mặc cả ngày không bị bí." 
  },
  { 
    id: 3,  
    name: "Váy hoa nhí dáng xòe đi biển", 
    image: "vay_vang.jpg", // Ảnh hiển thị mặc định khi mới mở trang
    colorImages: {
      "Hoa vàng": "vay_vang.jpg",
      "Hoa đen": "vay_den.webp"
    },
    price: 189000, 
    oldPrice: 290000, 
    category: "quan-ao",  
    sold: 540,  
    colors: ["Hoa vàng", "Hoa đen"],
    description: "Váy voan hoa nhí nhẹ nhàng, dáng xòe bay bổng, rất hợp đi biển, đi chơi hoặc chụp ảnh. Có lớp lót bên trong không bị lộ." 
  },
  { 
    id: 4,  
    name: "Áo sơ mi công sở tay dài",   
    image: "ao_tay_dai_trang.webp",
    colorImages: {
        "Trắng" : "ao_tay_dai_trang.webp",
        "Xanh nhạt" : "ao_tay_dai_xanh_nhat.webp",
        "Hồng" : "ao_tay_dai_hong.webp"

    },  
    price: 219000, oldPrice: 279000, category: "quan-ao",  sold: 330,  colors: ["Trắng", "Xanh nhạt", "Hồng"],
    description: "Áo sơ mi vải lụa mềm, ít nhăn, phù hợp đi làm và đi học. Thiết kế đơn giản, thanh lịch." },
  { id: 5,  name: "Giày sneaker trắng unisex",       
    image : "sneaker_trang.jpg",
    colorImages:{
        "Trắng" : "sneaker_trang.jpg",
        "Trắng đen" : "sneaker_trang_den.jpg"
    },
    price: 399000, oldPrice: 599000, category: "giay-dep", sold: 2100, colors: ["Trắng", "Trắng đen"],
    description: "Giày sneaker đế cao su êm, chống trơn trượt. Kiểu dáng basic dễ phối đồ, phù hợp cả nam và nữ." },
  { id: 6,  name: "Giày cao gót mũi nhọn 7cm",    
    image : "cao_got_den.webp",
    colorImages:{
        "Đen" : "cao_got_den.webp",
        "Kem" : "cao_got_kem.jpg",
        "Đỏ" : "cao_got_do.webp"
    },
    price: 289000, oldPrice: 390000, category: "giay-dep", sold: 410,  colors: ["Đen", "Kem", "Đỏ"],
    description: "Giày cao gót 7cm mũi nhọn thanh lịch, gót vững chắc, lót đệm êm chân. Thích hợp đi làm, dự tiệc." },
  { id: 7,  name: "Dép quai ngang đế êm chống trượt", 
    image: "dep_den.jpg",
    colorImages:{
        "Đen" : "dep_den.jpg",
        "Trắng" : "dep_trang.webp",
        "Xanh" : "dep_xanh.webp",
        "Hồng" : "dep_hong.jpg"
    },  price: 79000,  oldPrice: 120000, category: "giay-dep", sold: 3400, colors: ["Đen", "Trắng", "Xanh", "Hồng"],
    description: "Dép quai ngang đế EVA siêu nhẹ, êm chân, chống trượt khi đi mưa. Dùng đi trong nhà hoặc đi chơi đều được." },
  { id: 8,  name: "Boot da cổ ngắn phong cách Hàn",  
    image : "boot_den.webp",
    colorImages:{
        "Đen" : "boot_den.webp",
        "Nâu" : "boot_nau.webp"
    },
    price: 459000, oldPrice: 650000, category: "giay-dep", sold: 220,  colors: ["Đen", "Nâu"],
    description: "Boot da PU cao cấp, cổ ngắn có khóa kéo bên hông, dễ mang. Phong cách Hàn Quốc cá tính." },
  { id: 9,  name: "Túi xách nữ đeo vai thời trang",    
    image: "tui_xach_den.jpg",
    colorImages:{
        "Đen" : "tui_xach_den.jpg",
        "Trắng" : "tui_xach_trang.jpg",
        "Nâu" : "tui_xach_nau.jpg"
    }, price: 239000, oldPrice: 320000, category: "phu-kien", sold: 780,  colors: ["Đen", "Trắng", "Nâu"],
    description: "Túi xách da mềm, nhiều ngăn tiện lợi, đựng vừa điện thoại, ví và đồ trang điểm. Có dây đeo vai điều chỉnh được." },
  { id: 10, name: "Mũ lưỡi trai thêu chữ",            
    image: "mu_den.jpg",
    colorImages:{
        "Đen" : "mu_den.jpg",
        "Trắng" : "mu_trang.webp",
        "Be": "mu_be.webp",
        "Xanh navy" : "mu_xanh_navy.webp"
    },  price: 69000,  oldPrice: 99000,  category: "phu-kien", sold: 1500, colors: ["Đen", "Trắng", "Be", "Xanh navy"],
    description: "Mũ lưỡi trai vải kaki, thêu chữ sắc nét, có khóa điều chỉnh vòng đầu phía sau." },
  { id: 11, name: "Kính mát chống tia UV",      
    image:"kinh_den.jpg",
    colorImages:{
        "Đen" : "kinh_den.jpg",
        "Trà" : "kinh_tra.webp"
    },
    price: 149000, oldPrice: 250000, category: "phu-kien", sold: 640,  colors: ["Đen", "Trà"],
    description: "Kính mát tròng chống tia UV400, gọng nhựa dẻo nhẹ. Tặng kèm hộp đựng và khăn lau kính." },
  { id: 12, name: "Balo laptop chống nước", 
    image: "balo_den.jpg",
    colorImages:{
        "Đen" : "balo_den.jpg",
        "Xám" : "balo_xam.jpg"
    },            
    price: 329000, oldPrice: 450000, category: "phu-kien", sold: 910,  colors: ["Đen", "Xám"],
    description: "Balo vải chống nước, có ngăn chống sốc cho laptop 15.6 inch, cổng sạc USB tiện lợi." },
];

// Size theo từng danh mục (phụ kiện không có size)
const SIZES = {
  "quan-ao":  ["S", "M", "L", "XL", "XXL"],
  "giay-dep": ["36", "37", "38", "39", "40", "41", "42", "43"],
  "phu-kien": [],
};

const CATEGORY_NAMES = {
  "quan-ao": "Quần áo",
  "giay-dep": "Giày dép",
  "phu-kien": "Phụ kiện",
};

// ===== GIỎ HÀNG (LƯU BẰNG localStorage) =====
const CART_KEY = "modashop_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const el = document.getElementById("cartCount");
  if (!el) return;
  const total = getCart().reduce((sum, item) => sum + item.qty, 0);
  el.textContent = total;
}

function addToCart(id, color = "", size = "", qty = 1) {
  const cart = getCart();
  const item = cart.find(i => i.id === id && (i.color || "") === color && (i.size || "") === size);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id, color, size, qty });
  }
  saveCart(cart);
  showToast("Đã thêm vào giỏ hàng!");
}

function changeQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCart();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1200);
}

// ===== HÀM TIỆN ÍCH =====
function formatPrice(number) {
  return "₫" + number.toLocaleString("vi-VN");
}

function productImage(p, color = "") {
  const imgSrc = (p.colorImages && color && p.colorImages[color])
    ? p.colorImages[color]
    : p.image;

  return imgSrc
    ? `<img src="${imgSrc}" alt="${p.name} ${color}">`
    : `<span class="no-img">Ảnh sản phẩm</span>`;
}

function formatSold(number) {
  return number >= 1000 ? (number / 1000).toFixed(1) + "k" : number;
}

function getDiscount(p) {
  return Math.round((1 - p.price / p.oldPrice) * 100);
}

function productCardHTML(p) {
  return `
    <a href="product.html?id=${p.id}" class="product-card">
      <div class="product-img">
        ${productImage(p)}
        <span class="discount">-${getDiscount(p)}%</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(p.price)}</span>
          <span class="old-price">${formatPrice(p.oldPrice)}</span>
        </div>
        <div class="product-meta">
          <span class="product-rating"><span class="star">★</span> 4.8 / 5</span>
          <span class="product-sold">Đã bán ${formatSold(p.sold)}</span>
        </div>
      </div>
    </a>
  `;
}

// ===== TRANG CHỦ: DANH SÁCH SẢN PHẨM =====
let currentCategory = "all";
let searchText = "";

const productGrid  = document.getElementById("productGrid");
const searchForm   = document.getElementById("searchForm");
const searchInput  = document.getElementById("searchInput");
const categoryBtns = document.querySelectorAll(".category");

function renderProducts() {
  if (!productGrid) return;
  const list = products.filter(p =>
    (currentCategory === "all" || p.category === currentCategory) &&
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (list.length === 0) {
    productGrid.innerHTML = `<p class="empty">Không tìm thấy sản phẩm nào.</p>`;
    return;
  }
  productGrid.innerHTML = list.map(productCardHTML).join("");
}

// Tự động chọn danh mục và cuộn mượt xuống khu vực sản phẩm
function goToCategory(cat) {
  const targetBtn = document.querySelector(`.category[data-cat="${cat}"]`);
  if (targetBtn) {
    targetBtn.click();
  }
  const section = document.getElementById("products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Hỗ trợ mở danh mục từ trang khác thông qua link (ví dụ: index.html?cat=giay-dep)
const urlCat = new URLSearchParams(location.search).get("cat");
if (urlCat && productGrid) {
  goToCategory(urlCat);
}
categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.cat;
    renderProducts();
  });
});

// ===== TRANG CHI TIẾT SẢN PHẨM =====
let selectedColor = "";
let selectedSize = "";
let selectedQty = 1;
let currentProduct = null;

function renderProductDetail() {
  const detail = document.getElementById("productDetail");
  if (!detail) return;

  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = products.find(x => x.id === id);

  if (!p) {
    detail.innerHTML = `
      <div class="cart-empty">
        <p>Không tìm thấy sản phẩm.</p>
        <a href="index.html" class="btn-main">Về trang chủ</a>
      </div>`;
    return;
  }

  currentProduct = p;
  selectedColor = "";
  selectedSize = "";
  selectedQty = 1;
  document.title = p.name + " - ModaShop";
  const sizes = SIZES[p.category];

  const breadcrumbEl = document.getElementById("breadcrumb");
  if (breadcrumbEl) {
    breadcrumbEl.innerHTML = `
      <a href="index.html">Trang chủ</a> >
      <a href="index.html">${CATEGORY_NAMES[p.category]}</a> >
      <span>${p.name}</span>`;
  }

  // Tạo danh sách ảnh thu nhỏ theo từng màu (nếu có colorImages)
  const thumbsHTML = p.colorImages
    ? p.colors.slice(0, 4).map(c => `
        <div class="detail-thumb ${p.colorImages[c] === p.image ? "active" : ""}" data-color="${c}" title="Màu ${c}">
          ${productImage(p, c)}
        </div>
      `).join("")
    : `
        <div class="detail-thumb active">${productImage(p)}</div>
        <div class="detail-thumb">${productImage(p)}</div>
        <div class="detail-thumb">${productImage(p)}</div>
        <div class="detail-thumb">${productImage(p)}</div>
      `;

  detail.innerHTML = `
    <div class="detail-box">
      <!-- Ảnh -->
      <div class="detail-gallery">
        <div class="detail-main-img">${productImage(p)}</div>
        <div class="detail-thumbs" id="detailThumbs">
          ${thumbsHTML}
        </div>
      </div>

      <!-- Thông tin -->
      <div class="detail-info">
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-stats">
          <span class="stat-main">4.8</span> Đánh giá
          <span class="divider">|</span>
          <span class="stat-main">${formatSold(p.sold)}</span> Đã bán
        </div>

        <div class="detail-price-box">
          <span class="old-price">${formatPrice(p.oldPrice)}</span>
          <span class="detail-price">${formatPrice(p.price)}</span>
          <span class="detail-discount">${getDiscount(p)}% GIẢM</span>
        </div>

        <div class="detail-row">
          <div class="detail-label">Vận chuyển</div>
          <div>Miễn phí vận chuyển cho đơn từ ₫150.000</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">Màu sắc</div>
          <div class="option-list" id="colorOptions">
            ${p.colors.map(c => `<button type="button" class="option-btn" data-value="${c}">${c}</button>`).join("")}
          </div>
        </div>

        ${sizes.length ? `
        <div class="detail-row">
          <div class="detail-label">Kích cỡ</div>
          <div class="option-list" id="sizeOptions">
            ${sizes.map(s => `<button type="button" class="option-btn" data-value="${s}">${s}</button>`).join("")}
          </div>
        </div>` : ""}

        <div class="detail-row">
          <div class="detail-label">Số lượng</div>
          <div class="qty-box">
            <button type="button" onclick="changeDetailQty(-1)">−</button>
            <span id="detailQty">1</span>
            <button type="button" onclick="changeDetailQty(1)">+</button>
          </div>
        </div>

        <p class="detail-error" id="detailError"></p>

        <div class="detail-actions">
          <button type="button" class="btn-outline" onclick="detailAddToCart(false)">Thêm vào giỏ hàng</button>
          <button type="button" class="btn-main" onclick="detailAddToCart(true)">Mua ngay</button>
        </div>
      </div>
    </div>

    <!-- Mô tả -->
    <section class="section detail-desc">
      <h2 class="desc-title">MÔ TẢ SẢN PHẨM</h2>
      <p>${p.description}</p>
      <ul>
        <li>Danh mục: ${CATEGORY_NAMES[p.category]}</li>
        <li>Màu sắc: ${p.colors.join(", ")}</li>
        ${sizes.length ? `<li>Kích cỡ: ${sizes.join(", ")}</li>` : ""}
        <li>Đổi trả miễn phí trong 7 ngày nếu lỗi do nhà sản xuất</li>
      </ul>
    </section>
  `;

  // Bấm chọn màu -> đổi ảnh chính + làm sáng thumbnail tương ứng
  setupOptions("colorOptions", value => {
    selectedColor = value;
    const mainImgBox = document.querySelector(".detail-main-img");
    if (mainImgBox) {
      mainImgBox.innerHTML = productImage(p, value);
    }
    document.querySelectorAll("#detailThumbs .detail-thumb").forEach(thumb => {
      thumb.classList.toggle("active", thumb.dataset.color === value);
    });
  });

  // Bấm chọn kích cỡ
  setupOptions("sizeOptions", value => selectedSize = value);

  // Bấm vào ảnh thu nhỏ bên dưới -> tự động chọn nút màu tương ứng
  document.querySelectorAll("#detailThumbs .detail-thumb[data-color]").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const targetBtn = document.querySelector(`#colorOptions .option-btn[data-value="${thumb.dataset.color}"]`);
      if (targetBtn) targetBtn.click();
    });
  });

  const relatedEl = document.getElementById("relatedGrid");
  if (relatedEl) {
    const related = products.filter(x => x.category === p.category && x.id !== p.id);
    relatedEl.innerHTML = related.map(productCardHTML).join("");
  }
}

function setupOptions(containerId, onSelect) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.querySelectorAll(".option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      box.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      onSelect(btn.dataset.value);
      const errEl = document.getElementById("detailError");
      if (errEl) errEl.textContent = "";
    });
  });
}

function changeDetailQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  const qtyEl = document.getElementById("detailQty");
  if (qtyEl) qtyEl.textContent = selectedQty;
}

function detailAddToCart(buyNow) {
  const p = currentProduct;
  const needSize = SIZES[p.category].length > 0;
  const error = document.getElementById("detailError");

  if (!selectedColor) {
    error.textContent = "Vui lòng chọn màu sắc.";
    return;
  }
  if (needSize && !selectedSize) {
    error.textContent = "Vui lòng chọn kích cỡ.";
    return;
  }

  addToCart(p.id, selectedColor, selectedSize, selectedQty);
  if (buyNow) location.href = "cart.html";
}

// ===== TRANG GIỎ HÀNG =====
function renderCart() {
  const cartList = document.getElementById("cartList");
  if (!cartList) return;

  const cart = getCart();
  const summary = document.getElementById("cartSummary");

  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty">
        <p>Giỏ hàng của bạn đang trống</p>
        <a href="index.html" class="btn-main">Mua sắm ngay</a>
      </div>`;
    if (summary) summary.style.display = "none";
    return;
  }

  let totalQty = 0;
  let totalPrice = 0;

  cartList.innerHTML = cart.map((item, index) => {
    const p = products.find(x => x.id === item.id);
    if (!p) return "";
    const lineTotal = p.price * item.qty;
    totalQty += item.qty;
    totalPrice += lineTotal;
    const variant = [item.color, item.size].filter(Boolean).join(", ");
    return `
      <div class="cart-row">
        <div class="cart-product">
          <a href="product.html?id=${p.id}" class="cart-thumb">${productImage(p, item.color)}</a>
          <div>
            <a href="product.html?id=${p.id}">${p.name}</a>
            ${variant ? `<div class="cart-variant">Phân loại: ${variant}</div>` : ""}
          </div>
        </div>
        <div class="cart-unit">${formatPrice(p.price)}</div>
        <div class="qty-box">
          <button type="button" onclick="changeQty(${index}, -1)">−</button>
          <span>${item.qty}</span>
          <button type="button" onclick="changeQty(${index}, 1)">+</button>
        </div>
        <div class="cart-line-total">${formatPrice(lineTotal)}</div>
        <button type="button" class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
      </div>`;
  }).join("");

  if (summary) summary.style.display = "flex";
  const totalQtyEl = document.getElementById("totalQty");
  const totalPriceEl = document.getElementById("totalPrice");
  if (totalQtyEl) totalQtyEl.textContent = totalQty;
  if (totalPriceEl) totalPriceEl.textContent = formatPrice(totalPrice);
}

function checkout() {
  if (getCart().length === 0) return;
  alert("Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại ModaShop.");
  saveCart([]);
  renderCart();
}

// ===== TÌM KIẾM =====
if (searchForm) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!productGrid) {
      location.href = "index.html?q=" + encodeURIComponent(searchInput.value.trim());
      return;
    }
    searchText = searchInput.value.trim();
    renderProducts();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
}

const urlQuery = new URLSearchParams(location.search).get("q");
if (urlQuery && searchInput) {
  searchText = urlQuery;
  searchInput.value = urlQuery;
}

// ===== TÀI KHOẢN: ĐĂNG KÝ / ĐĂNG NHẬP =====
const USERS_KEY = "modashop_users";
const CURRENT_USER_KEY = "modashop_user";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
  } catch (e) {
    return null;
  }
}

function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ name: user.name, account: user.account }));
}

function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
  location.reload();
}

function isValidAccount(value) {
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isPhone = /^0\d{9}$/.test(value);
  return isEmail || isPhone;
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
  const input = document.getElementById(id.replace("Error", ""));
  if (input) input.classList.toggle("input-error", message !== "");
}

function renderAuthLinks() {
  const box = document.getElementById("authLinks");
  if (!box) return;
  const user = getCurrentUser();
  if (user) {
    box.innerHTML = `
      <a href="profile.html" class="hello-user">Xin chào, ${user.name}</a>
      <a href="#" onclick="logout(); return false;">Đăng xuất</a>`;
  }
}

document.querySelectorAll(".toggle-pass").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.textContent = show ? "Ẩn" : "Hiện";
  });
});

// --- Form đăng ký ---
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const name     = document.getElementById("regName").value.trim();
    const account  = document.getElementById("regAccount").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;
    const confirm  = document.getElementById("regConfirm").value;
    let ok = true;

    ["regNameError", "regAccountError", "regPasswordError", "regConfirmError"].forEach(id => setFieldError(id, ""));

    if (name.length < 2) {
      setFieldError("regNameError", "Vui lòng nhập họ tên.");
      ok = false;
    }
    if (!isValidAccount(account)) {
      setFieldError("regAccountError", "Email hoặc số điện thoại không hợp lệ.");
      ok = false;
    } else if (getUsers().some(u => u.account === account)) {
      setFieldError("regAccountError", "Tài khoản này đã được đăng ký.");
      ok = false;
    }
    if (password.length < 6) {
      setFieldError("regPasswordError", "Mật khẩu phải có ít nhất 6 ký tự.");
      ok = false;
    }
    if (confirm !== password || confirm === "") {
      setFieldError("regConfirmError", "Mật khẩu nhập lại không khớp.");
      ok = false;
    }
    if (!ok) return;

    const users = getUsers();
    const newUser = { name, account, password };
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    setCurrentUser(newUser);
    showToast("Đăng ký thành công!");
    setTimeout(() => location.href = "index.html", 1000);
  });
}

// --- Form đăng nhập ---
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const account  = document.getElementById("loginAccount").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    const formError = document.getElementById("loginError");
    let ok = true;

    setFieldError("loginAccountError", "");
    setFieldError("loginPasswordError", "");
    formError.textContent = "";

    if (account === "") {
      setFieldError("loginAccountError", "Vui lòng nhập email hoặc số điện thoại.");
      ok = false;
    }
    if (password === "") {
      setFieldError("loginPasswordError", "Vui lòng nhập mật khẩu.");
      ok = false;
    }
    if (!ok) return;

    const user = getUsers().find(u => u.account === account && u.password === password);
    if (!user) {
      formError.textContent = "Tài khoản hoặc mật khẩu không đúng.";
      return;
    }

    setCurrentUser(user);
    showToast("Đăng nhập thành công!");
    setTimeout(() => location.href = "index.html", 1000);
  });
}

if ((loginForm || registerForm) && getCurrentUser()) {
  location.href = "index.html";
}

// ===== CHẠY KHI MỞ TRANG =====
renderAuthLinks();
updateCartCount();
renderProducts();
renderProductDetail();
renderCart();

// ===== HIỆU ỨNG TUYẾT RƠI GIÁNG SINH TOÀN TRANG =====
(function initChristmasSnow() {
  const symbols = ['❄', '❅', '❆', '•'];

  function createSnowflake() {
    if (document.hidden) return;
    const flake = document.createElement('span');
    flake.className = 'xmas-snowflake';
    flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const size = Math.random() * 12 + 10;
    const startLeft = Math.random() * 100;
    const duration = Math.random() * 5 + 6;
    const opacity = Math.random() * 0.5 + 0.45;

    flake.style.left = startLeft + 'vw';
    flake.style.fontSize = size + 'px';
    flake.style.opacity = opacity;
    flake.style.animationDuration = duration + 's';

    document.body.appendChild(flake);
    setTimeout(() => flake.remove(), duration * 1000);
  }

  for (let i = 0; i < 12; i++) {
    setTimeout(createSnowflake, i * 250);
  }
  setInterval(createSnowflake, 450);
})();