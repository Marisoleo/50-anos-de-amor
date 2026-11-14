// Passe diese Texte später an eure eigenen Erinnerungen an.
const reasons = [
  "Dein Lachen","Dein Humor","Deine Stärke","Dein grosses Herz","Deine Umarmungen",
  "Deine Ehrlichkeit","Deine Geschichten","Deine Geduld","Deine Energie","Deine Art",
  "Wie du für uns da bist","Deine Spontanität","Dein Geschmack","Deine Musik","Dein Mut",
  "Deine Lebensfreude","Deine Ratschläge","Dein Durchhaltevermögen","Deine Wärme","Deine Verrücktheit",
  "Deine Kochkünste","Deine Kreativität","Deine Offenheit","Deine Abenteuerlust","Dein Optimismus",
  "Deine kleinen Macken","Deine Fürsorge","Deine Ideen","Dein Vertrauen","Deine Begeisterung",
  "Deine Erinnerungen","Dein Blick fürs Schöne","Deine Direktheit","Deine Grosszügigkeit","Dein Lächeln",
  "Deine Persönlichkeit","Deine Geschichten aus Mexiko","Deine Lebensweisheit","Dein Rhythmus","Deine Herzlichkeit",
  "Dein Stil","Dein Lieblingsessen","Deine Unterstützung","Dein Charakter","Deine Träume",
  "Deine Stärke in schwierigen Zeiten","Deine Nähe","Dein einzigartiger Blick auf die Welt","Einfach alles","Weil du du bist"
];
const grid = document.getElementById("reasonsGrid");
reasons.forEach((reason, i) => {
  const card = document.createElement("button");
  card.className = "reason-card";
  card.innerHTML = `<small>${String(i+1).padStart(2,"0")} / 50</small><span class="reason-title">${reason}</span><span class="reason-text">${reason} – und noch so vieles mehr. Hier kannst du einen persönlichen Satz ergänzen.</span>`;
  card.addEventListener("click", () => card.classList.toggle("open"));
  grid.appendChild(card);
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

// Photo lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (!img.complete || img.naturalWidth === 0) return;
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// Birthday surprise + confetti
document.getElementById("surpriseButton").addEventListener("click", () => {
  document.getElementById("surpriseMessage").classList.add("show");
  const layer = document.getElementById("confettiLayer");
  for (let i = 0; i < 85; i++) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 4500);
  }
});