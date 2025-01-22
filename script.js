// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
    
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {  
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Gaming Console",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Gaming",
  },

  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Gaming Console",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    category: "Gaming",
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
        width: 250px;
        transition: transform 0.3s ease;
        cursor: pointer;
    `;

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover;">
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

  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navContainer = document.querySelector('.nav-container');

  mobileMenuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    const menuIcon = mobileMenuBtn.querySelector('i');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      navContainer.classList.remove('active');
      const menuIcon = mobileMenuBtn.querySelector('i');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
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
