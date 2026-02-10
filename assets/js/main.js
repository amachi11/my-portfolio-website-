// Mobile menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("show"));
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form (frontend demo)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // For now, just show a message (no backend yet)
  formNote.textContent = "Saved! (Add your Python/Flask backend later to actually send messages.)";
  contactForm.reset();

  // If you connect Flask later, you’ll replace this with fetch("/api/contact", { ... })
});
