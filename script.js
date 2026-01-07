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
function addToCart(productId) {
  // TODO: Implement cart functionality
  console.log(`Product ${productId} added to cart`);
  alert("Product added to cart!");
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  displayProducts();

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

  mobileMenuBtn.addEventListener("click", () => {
    navContainer.classList.toggle("active");
    const menuIcon = mobileMenuBtn.querySelector("i");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navContainer.classList.remove("active");
      const menuIcon = mobileMenuBtn.querySelector("i");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

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
