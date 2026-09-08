
/* Favour Aero Tech Store – Product data & interactions */

const products = [
  {
    id: 1,
    name: "Brushless Motor 2207 2450KV",
    category: "motors",
    price: "₦28,500",
    desc: "High-torque motor ideal for 5–7 inch freestyle and racing drones.",
    icon: "⚙️",
    bestseller: true
  },
  {
    id: 2,
    name: "LiPo 4S 1500mAh 100C",
    category: "batteries",
    price: "₦22,000",
    desc: "Reliable high-discharge pack for aggressive flying sessions.",
    icon: "🔋",
    bestseller: true
  },
  {
    id: 3,
    name: "Carbon Fiber Airframe 5\"",
    category: "airframes",
    price: "₦45,000",
    desc: "Lightweight, rigid frame with excellent vibration damping.",
    icon: "✈️",
    bestseller: true
  },
  {
    id: 4,
    name: "Flight Controller F7 Dual Gyro",
    category: "electronics",
    price: "₦38,500",
    desc: "Modern F7 FC with dual gyros and onboard OSD.",
    icon: "📡",
    bestseller: true
  },
  {
    id: 5,
    name: "Propellers 5147 (Set of 8)",
    category: "props",
    price: "₦6,500",
    desc: "Balanced tri-blade props for smooth power delivery.",
    icon: "🌀",
    bestseller: true
  },
  {
    id: 6,
    name: "ESC 4-in-1 60A BLHeli_32",
    category: "electronics",
    price: "₦32,000",
    desc: "Compact 4-in-1 ESC with telemetry and current sensing.",
    icon: "🔌",
    bestseller: true
  },
  {
    id: 7,
    name: "Brushless Motor 2306 1750KV",
    category: "motors",
    price: "₦26,000",
    desc: "Efficient motor for long-range and cinematic builds.",
    icon: "⚙️",
    bestseller: false
  },
  {
    id: 8,
    name: "LiPo 6S 1300mAh 120C",
    category: "batteries",
    price: "₦31,500",
    desc: "High-voltage pack for maximum thrust and punch.",
    icon: "🔋",
    bestseller: false
  },
  {
    id: 9,
    name: "Fixed-Wing Trainer Kit",
    category: "airframes",
    price: "₦65,000",
    desc: "Durable foam trainer perfect for new pilots.",
    icon: "🛫",
    bestseller: false
  },
  {
    id: 10,
    name: "GPS Module M10",
    category: "electronics",
    price: "₦18,000",
    desc: "Fast-lock GPS for return-to-home and navigation.",
    icon: "🛰️",
    bestseller: false
  },
  {
    id: 11,
    name: "Carbon Props 6\" (Pair)",
    category: "props",
    price: "₦9,500",
    desc: "Stiff carbon props for efficient fixed-wing setups.",
    icon: "🌀",
    bestseller: false
  },
  {
    id: 12,
    name: "Servo Digital 9g Metal Gear",
    category: "electronics",
    price: "₦4,200",
    desc: "Precise metal-gear servo for control surfaces.",
    icon: "🎛️",
    bestseller: false
  },
  {
    id: 13,
    name: "Motor Mount Aluminum",
    category: "props",
    price: "₦3,800",
    desc: "CNC aluminum mount for secure motor installation.",
    icon: "🔧",
    bestseller: false
  },
  {
    id: 14,
    name: "Li-Ion 21700 Pack 4S",
    category: "batteries",
    price: "₦42,000",
    desc: "High-capacity cells for long endurance flights.",
    icon: "🔋",
    bestseller: false
  },
  {
    id: 15,
    name: "Racing Wing 700mm",
    category: "airframes",
    price: "₦55,000",
    desc: "Agile racing wing with pre-installed motor mounts.",
    icon: "✈️",
    bestseller: false
  }
];

function createProductCard(product) {
  return `
    <article class="product-card" data-category="${product.category}">
      <div class="product-image">${product.icon}</div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <button class="product-btn" data-id="${product.id}">Enquire</button>
        </div>
      </div>
    </article>
  `;
}

function renderBestsellers() {
  const grid = document.getElementById("bestsellersGrid");
  const bestsellers = products.filter(p => p.bestseller);
  grid.innerHTML = bestsellers.map(createProductCard).join("");
}

function renderCatalog(category = "all") {
  const grid = document.getElementById("catalogGrid");
  const filtered = category === "all"
    ? products
    : products.filter(p => p.category === category);
  grid.innerHTML = filtered.map(createProductCard).join("");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

// Category tabs
document.getElementById("categoryTabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab")) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  e.target.classList.add("active");
  renderCatalog(e.target.dataset.category);
});

// Enquire buttons (event delegation)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-btn")) {
    const id = e.target.dataset.id;
    const product = products.find(p => p.id === Number(id));
    showToast(`Enquiry noted for “${product.name}”. Contact us to order.`);
  }
});

// Custom form
document.getElementById("customForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  showToast(`Thanks ${name}! We’ll get back to you soon.`);
  e.target.reset();
});

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Highlight nav on scroll
const sections = ["home", "bestsellers", "catalog", "custom", "contact"];
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY + 100;
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  }
});

// Init
renderBestsellers();
renderCatalog();
