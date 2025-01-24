// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Headphone",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1609255386725-b9b6a8ad829c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Headphone",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Wireless Headphone",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 5,
    name: "Wireless Headphones",
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
    id: 1,
    name: "Wireless Headphones",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1598900863662-da1c3e6dd9d9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Headphone",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1609255386725-b9b6a8ad829c?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Wireless Headphone",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Wireless Headphone",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1578517581165-61ec5ab27a19?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 5,
    name: "Wireless Headphones",
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
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Electronics",
  },

  {
    id: 9,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
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
                           border-radius: 5px; 
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
