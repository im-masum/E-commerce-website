// Apply saved theme as early as possible to avoid flash
(function () {
  try {
    const saved = localStorage.getItem("theme");
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    const theme = saved ? saved : prefersLight ? "light" : "dark";
    if (theme === "light")
      document.documentElement.classList.add("light-theme");
    else document.documentElement.classList.remove("light-theme");
  } catch (e) {
    // ignore
  }

  // Enhance CTA appearance: inject icon and ripple effect
  try {
    const ctaEnh = document.getElementById("ctaBtn");
    if (ctaEnh) {
      if (!ctaEnh.querySelector(".cta-icon")) {
        const i = document.createElement("i");
        i.className = "fas fa-bag-shopping cta-icon";
        i.setAttribute("aria-hidden", "true");
        ctaEnh.insertBefore(i, ctaEnh.firstChild);
      }
      ctaEnh.style.position = ctaEnh.style.position || "relative";
      ctaEnh.addEventListener("click", function (e) {
        try {
          const rect = ctaEnh.getBoundingClientRect();
          const ripple = document.createElement("span");
          ripple.className = "ripple";
          const size = Math.max(rect.width, rect.height);
          ripple.style.width = ripple.style.height = size + "px";
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;
          ripple.style.left = x + "px";
          ripple.style.top = y + "px";
          ctaEnh.appendChild(ripple);
          setTimeout(() => ripple.remove(), 650);
        } catch (err) {
          /* ignore */
        }
      });
    }
  } catch (e) {
    /* ignore */
  }
})();

let ctaBtn = document.getElementById("ctaBtn");
// Sample product data
const products = [
  {
    id: 1,
    name: "Headphones",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphone",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1609255386725-b9b6a8ad829c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 3,
    name: "Headphone",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Headphone",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 5,
    name: "Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Smart watch",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 9,
    name: "Smart Watch",
    price: 299.99,
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Electronics",
  },

  {
    id: 10,
    name: "Headphones",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 11,
    name: "Headphone",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1609255386725-b9b6a8ad829c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 12,
    name: "Headphone",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 13,
    name: "Headphone",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 14,
    name: "Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 15,
    name: "Smart Watch",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 16,
    name: "Smart watch",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 17,
    name: "Smart Watch",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 18,
    name: "Smart Watch",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
];

// Function to create product cards
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.style.cssText = `
        background-color: var(--background-dark);
        border-radius: 10px;
        overflow: hidden;
        width: 350px;
        transition: transform 0.5s ease;
        cursor: pointer;
    `;

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover;">
        <div style="padding: 1rem;">
            <h3 style="margin-bottom: 0.5rem;">${product.name}</h3>
            <p style="color: var(--text-secondary);">$${product.price}</p>
            <button onclick="addToCart(${product.id})" 
                    style="background-color: var(--primary-color); 
                           color: white; 
                           border: none; 
                           padding: 0.5rem 1rem; 
                           border-radius: 10px; 
                           margin-top: 1rem;
                           cursor: pointer;">
                Add to Cart
            </button>
        </div>
    `;

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });

  return card;
}

// Function to display products
function displayProducts() {
  const productContainer = document.querySelector(".product-container");
  products.forEach((product) => {
    productContainer.appendChild(createProductCard(product));
  });
}

// Function to handle adding items to cart
// Cart helpers
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("shop_cart") || "[]");
  } catch (e) {
    return [];
  }
}

// escapeHtml: small utility used in multiple places
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"'`]/g,
    (s) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;",
      }[s])
  );
}

// CART PAGE: render cart details if on cart.html
function renderCartPage() {
  const cartRoot = document.getElementById("cartPage");
  if (!cartRoot) return;

  const cartListEl = document.getElementById("cartList");
  const cartSummaryEl = document.getElementById("cartSummary");
  const cart = getCart();

  if (!cart || !cart.length) {
    cartListEl.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
    cartSummaryEl.innerHTML = "<div></div>";
    updateCartBadge();
    return;
  }

  // build list
  cartListEl.innerHTML = "";
  cart.forEach((item) => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
        <img src="${item.image || ""}" alt="${escapeHtml(item.name)}">
        <div class="meta">
          <h4>${escapeHtml(item.name)}</h4>
          <div class="unit-price muted">Unit: $${Number(item.price).toFixed(
            2
          )}</div>
        </div>
        <div class="controls">
          <div class="qty-controls">
            <button class="qty-btn qty-decrease" data-id="${
              item.id
            }" aria-label="Decrease">−</button>
            <input type="number" min="1" value="${item.qty || 1}" data-id="${
      item.id
    }" class="cart-qty">
            <button class="qty-btn qty-increase" data-id="${
              item.id
            }" aria-label="Increase">+</button>
          </div>
          <button class="remove-cart" data-id="${item.id}">Remove</button>
          <div class="muted">Subtotal: $<span class="item-sub">${(
            Number(item.price) * (item.qty || 1)
          ).toFixed(2)}</span></div>
        </div>
      `;
    cartListEl.appendChild(el);
  });

  function computeTotal() {
    return cart.reduce(
      (s, i) => s + (Number(i.price) || 0) * (Number(i.qty) || 1),
      0
    );
  }

  const subtotal = computeTotal();
  // simple shipping rule: free over $100 otherwise $5
  const shipping = subtotal === 0 ? 0 : subtotal >= 100 ? 0 : 5;
  const grand = subtotal + shipping;

  cartSummaryEl.innerHTML = `
      <div class="totals">
        <span class="subtotal">Subtotal: $${subtotal.toFixed(2)}</span>
        <span class="shipping">Shipping: $${shipping.toFixed(2)}</span>
        <span class="grand">Grand total: $${grand.toFixed(2)}</span>
      </div>
      <div class="actions">
        <button id="clearCart" class="cta-button">Clear cart</button>
        <button id="checkoutBtn" class="cta-button">Checkout</button>
      </div>
    `;

  // attach events
  cartListEl.querySelectorAll(".cart-qty").forEach((input) => {
    input.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      let v = parseInt(e.target.value, 10);
      if (!v || v < 1) v = 1;
      const c = getCart();
      const it = c.find((x) => String(x.id) === String(id));
      if (it) {
        it.qty = v;
        saveCart(c);
        renderCartPage();
        updateCartBadge();
      }
    });
  });

  // increase / decrease buttons
  cartListEl.querySelectorAll(".qty-increase").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const c = getCart();
      const it = c.find((x) => String(x.id) === String(id));
      if (it) {
        it.qty = (Number(it.qty) || 1) + 1;
        saveCart(c);
        renderCartPage();
        updateCartBadge();
      }
    });
  });

  cartListEl.querySelectorAll(".qty-decrease").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const c = getCart();
      const it = c.find((x) => String(x.id) === String(id));
      if (it) {
        it.qty = Math.max(1, (Number(it.qty) || 1) - 1);
        saveCart(c);
        renderCartPage();
        updateCartBadge();
      }
    });
  });

  cartListEl.querySelectorAll(".remove-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      let c = getCart();
      // backup removed item for undo
      const removed = c.find((x) => String(x.id) === String(id));
      c = c.filter((x) => String(x.id) !== String(id));
      saveCart(c);
      renderCartPage();
      updateCartBadge();
      // show undo toast
      showUndoToast("Item removed", () => {
        if (removed) {
          const cur = getCart();
          cur.push(removed);
          saveCart(cur);
          renderCartPage();
          updateCartBadge();
        }
      });
    });
  });

  const clearBtn = document.getElementById("clearCart");
  if (clearBtn)
    clearBtn.addEventListener("click", () => {
      const prev = getCart();
      saveCart([]);
      renderCartPage();
      updateCartBadge();
      showUndoToast("Cart cleared", () => {
        saveCart(prev);
        renderCartPage();
        updateCartBadge();
      });
    });

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn)
    checkoutBtn.addEventListener("click", () => {
      // placeholder checkout
      showToast("Checkout is not implemented in this demo");
    });
}

// call render once on load
try {
  renderCartPage();
} catch (e) {}

function saveCart(cart) {
  try {
    localStorage.setItem("shop_cart", JSON.stringify(cart));
  } catch (e) {}
}

function findProductById(id) {
  return products.find((p) => Number(p.id) === Number(id));
}

function updateCartBadge() {
  // ensure badge exists next to cart icon
  const cartIconAnchor = Array.from(
    document.querySelectorAll(".nav-icons a")
  ).find((a) => a.querySelector(".fa-shopping-cart"));
  if (!cartIconAnchor) return;
  let badge = cartIconAnchor.querySelector(".cart-count");
  const cart = getCart();
  const total = cart.reduce((s, it) => s + (it.qty || 1), 0);
  if (!badge) {
    badge = document.createElement("span");
    badge.className = "cart-count";
    cartIconAnchor.appendChild(badge);
  }
  badge.textContent = total;
  badge.style.display = total > 0 ? "inline-block" : "none";
}

function showToast(msg, timeout = 1400) {
  let toast = document.querySelector(".site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), timeout);
}

// show toast with Undo action
function showUndoToast(msg, undoCallback, timeout = 5000) {
  let toast = document.querySelector(".site-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "site-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = "";
  const span = document.createElement("span");
  span.textContent = msg;
  const btn = document.createElement("button");
  btn.className = "undo-btn";
  btn.textContent = "Undo";
  btn.addEventListener("click", () => {
    try {
      undoCallback && undoCallback();
    } catch (e) {}
    toast.classList.remove("show");
    clearTimeout(toast._t);
  });
  toast.appendChild(span);
  toast.appendChild(btn);
  toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove("show"), timeout);
}

// Function to handle adding items to cart
function addToCart(productId) {
  const id = Number(productId);
  const product = findProductById(id);
  const cart = getCart();
  if (product) {
    const existing = cart.find((i) => Number(i.id) === id);
    if (existing) existing.qty = (existing.qty || 1) + 1;
    else
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      });
    saveCart(cart);
    updateCartBadge();
    showToast(`${product.name} added to cart`);
    // Visual feedback on any clicked button — find visible add-to-cart button for this product
    const selectors = document.querySelectorAll(".add-to-cart");
    selectors.forEach((btn) => {
      // if button has data-product-id or data-id
      const pid =
        btn.dataset.productId ||
        btn.dataset.id ||
        btn.getAttribute("data-product-id") ||
        btn.getAttribute("data-id");
      if (pid && Number(pid) === id) {
        btn.classList.add("added");
        setTimeout(() => btn.classList.remove("added"), 600);
      }
    });
  } else {
    // fallback: not found in products list
    showToast("Added to cart");
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

  // Activate static "Add to Cart" buttons across pages.
  // For buttons that don't have an explicit product id, try to infer it from nearby title text
  // or from matching the products array. This avoids having to edit every HTML file.
  function bindStaticAddToCartButtons() {
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      // avoid double-binding
      if (btn.dataset._bound === "1") return;
      btn.dataset._bound = "1";

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // try explicit id first
        let pid =
          btn.dataset.productId ||
          btn.dataset.id ||
          btn.getAttribute("data-product-id") ||
          btn.getAttribute("data-id");
        if (pid) {
          addToCart(pid);
          return;
        }

        // try to infer from closest product card title
        const card =
          btn.closest(".product-card") ||
          btn.closest(".card") ||
          btn.parentElement;
        let nameEl = null;
        if (card) nameEl = card.querySelector("h3, h4, .product-title, .title");
        const name = nameEl ? nameEl.textContent.trim() : null;
        if (name) {
          const match =
            products.find(
              (p) => p.name && p.name.toLowerCase() === name.toLowerCase()
            ) ||
            products.find(
              (p) => p.name && p.name.toLowerCase().includes(name.toLowerCase())
            );
          if (match) {
            // cache for future clicks
            btn.dataset.productId = match.id;
            addToCart(match.id);
            return;
          }
        }

        // fallback: use first product in list (non-ideal but ensures button works)
        if (products && products.length) addToCart(products[0].id);
        else addToCart(null);
      });
    });
  }

  // run initial binding and also observe DOM mutations to bind buttons added later
  try {
    bindStaticAddToCartButtons();
    // observe for future nodes (e.g., if pages dynamically insert product cards)
    const observer = new MutationObserver((mutations) =>
      bindStaticAddToCartButtons()
    );
    observer.observe(document.body, { childList: true, subtree: true });
  } catch (e) {
    // silent
  }

  // Newsletter form submit handler (simple front-end feedback)
  try {
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("newsletterEmail").value;
        showToast("Thanks — we will send deals to " + email);
        newsletterForm.reset();
      });
    }
  } catch (e) {
    /* ignore */
  }

  // ---- Improve Shop Now CTA behavior ----
  try {
    const cta = document.getElementById("ctaBtn");
    const featured =
      document.getElementById("featuredProducts") ||
      document.querySelector(".featured-products");
    if (cta) {
      // accessibility
      if (!cta.hasAttribute("aria-label"))
        cta.setAttribute("aria-label", "Shop now - jump to featured products");
      if (!cta.hasAttribute("aria-controls") && featured && featured.id)
        cta.setAttribute("aria-controls", featured.id || "featuredProducts");

      // gentle pulse on load to draw attention (one-shot)
      cta.classList.add("pulse");
      setTimeout(() => cta.classList.remove("pulse"), 1100);

      cta.addEventListener("click", function (e) {
        e.preventDefault();
        const target =
          document.getElementById("featuredProducts") ||
          document.querySelector(".featured-products");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          // briefly highlight target to show user where they landed
          target.classList.add("highlight-target");
          setTimeout(() => target.classList.remove("highlight-target"), 1100);
        } else {
          // fallback: navigate to products page
          window.location.href = "products.html";
        }
      });
    }
  } catch (e) {
    // ignore
  }

  // Add smooth scroll behavior to navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navContainer = document.querySelector(".nav-container");

  if (mobileMenuBtn) {
    // ensure accessible state
    mobileMenuBtn.setAttribute("aria-expanded", "false");

    mobileMenuBtn.addEventListener("click", () => {
      const open = navContainer.classList.toggle("active");
      const menuIcon = mobileMenuBtn.querySelector("i");
      if (menuIcon) {
        menuIcon.classList.toggle("fa-bars", !open);
        menuIcon.classList.toggle("fa-times", open);
      }
      // reflect expanded state for screen readers
      mobileMenuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      mobileMenuBtn.classList.toggle("open", open);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navContainer.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        const wasOpen = navContainer.classList.contains("active");
        if (wasOpen) {
          navContainer.classList.remove("active");
          const menuIcon = mobileMenuBtn.querySelector("i");
          if (menuIcon) {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
          }
          mobileMenuBtn.setAttribute("aria-expanded", "false");
          mobileMenuBtn.classList.remove("open");
        }
      }
    });
  }

  // Theme (dark/light) toggle — persists choice in localStorage
  const themeToggleBtn = document.getElementById("themeToggle");
  const rootEl = document.documentElement || document.body;

  function applyTheme(theme) {
    if (theme === "light") {
      rootEl.classList.add("light-theme");
      if (themeToggleBtn)
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      rootEl.classList.remove("light-theme");
      if (themeToggleBtn)
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';

      // Update cart badge on load
      try {
        updateCartBadge();
      } catch (e) {}

      /* ---------- User modal (login/register) ---------- */
      // Create modal HTML once
      function createUserModal() {
        if (document.getElementById("userModalOverlay")) return;

        const overlay = document.createElement("div");
        overlay.id = "userModalOverlay";
        overlay.className = "user-modal-overlay";
        overlay.setAttribute("aria-hidden", "true");

        overlay.innerHTML = `
          <div class="user-modal" role="dialog" aria-modal="true" aria-labelledby="userModalTitle">
            <header>
              <h3 id="userModalTitle">Sign in</h3>
              <button class="close-btn" aria-label="Close user form">✕</button>
            </header>
            <div class="modal-body">
              <p class="muted">Sign in to access your account, orders and saved items.</p>
              <form id="userForm">
                <input id="userEmail" type="email" placeholder="Email address" required aria-required="true">
                <input id="userPassword" type="password" placeholder="Password" required aria-required="true">
                <div class="form-row">
                  <label style="display:flex;align-items:center;gap:.4rem;"><input type="checkbox" id="rememberMe"> Remember</label>
                </div>
                <button type="submit" class="cta-button cta">Sign in</button>
              </form>
            </div>
          </div>
        `;

        document.body.appendChild(overlay);

        // handlers
        const closeBtn = overlay.querySelector(".close-btn");
        const modal = overlay.querySelector(".user-modal");

        function hide() {
          overlay.classList.remove("active");
          overlay.setAttribute("aria-hidden", "true");
          // restore focus to the user icon if possible
          const userLink = document.querySelector(".nav-icons a .fa-user");
          if (userLink && userLink.parentElement)
            userLink.parentElement.focus();
        }

        closeBtn.addEventListener("click", hide);

        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) hide();
        });

        // close on ESC
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && overlay.classList.contains("active"))
            hide();
        });

        // form submit
        const userForm = overlay.querySelector("#userForm");
        userForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const email = overlay.querySelector("#userEmail").value;
          // Simple confirmation (no backend)
          overlay.querySelector(
            ".modal-body"
          ).innerHTML = `<p class="muted">Signed in as <strong>${escapeHtml(
            email
          )}</strong>.</p>`;
          setTimeout(() => hide(), 900);
        });
      }

      function showUserModal() {
        createUserModal();
        const overlay = document.getElementById("userModalOverlay");
        if (!overlay) return;
        overlay.classList.add("active");
        // focus first input
        const first = overlay.querySelector("#userEmail");
        if (first) first.focus();
      }

      function toggleUserModal() {
        const overlay = document.getElementById("userModalOverlay");
        if (overlay && overlay.classList.contains("active"))
          overlay.classList.remove("active");
        else showUserModal();
      }

      // Attach click handlers to user icon(s)
      document.querySelectorAll(".nav-icons a").forEach((a) => {
        if (a.querySelector(".fa-user")) {
          a.addEventListener("click", (e) => {
            e.preventDefault();
            toggleUserModal();
          });
        }
      });
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore */
    }
  }

  // Initialize theme from saved preference or system setting
  try {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      savedTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    }
    applyTheme(savedTheme);
  } catch (e) {
    // ignore localStorage errors
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentlyLight = rootEl.classList.contains("light-theme");
      applyTheme(currentlyLight ? "dark" : "light");
    });
  }

  // Highlight the current page's navbar link by adding the `active` class
  function activateCurrentNav() {
    try {
      const links = document.querySelectorAll(".nav-links a, .nav-container a");
      if (!links || !links.length) return;
      const pathname = window.location.pathname || "/";
      // derive the current filename (treat root as index.html)
      const pathParts = pathname.replace(/^\/+/, "").split("/");
      const currentFile = pathParts.pop() || "index.html";

      links.forEach((a) => {
        try {
          const href = a.getAttribute("href") || "";
          if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
          )
            return;
          const resolved = new URL(href, window.location.href);
          const linkFile =
            resolved.pathname.replace(/^\//, "").split("/").pop() ||
            "index.html";
          if (linkFile === currentFile) {
            a.classList.add("active");
            a.setAttribute("aria-current", "page");
          } else {
            a.classList.remove("active");
            a.removeAttribute("aria-current");
          }
        } catch (err) {
          // ignore per-link errors
        }
      });
    } catch (e) {
      /* ignore */
    }
  }

  // Run once on load and also when history changes (in case SPA-like navigation is added later)
  try {
    activateCurrentNav();
    window.addEventListener("popstate", activateCurrentNav);
  } catch (e) {}
});

// // Add scroll event listener for navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
