// script.js
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const introText = document.getElementById("intro-text");
const title = document.getElementById("letter-title");
const buttons = document.getElementById("letter-buttons");
const yesBtn = document.querySelector(".yes-btn");
const finalText = document.getElementById("final-text");
const moodToggle = document.getElementById("mood-toggle");

const hour = new Date().getHours();
if (hour < 12) title.textContent = "Good morning, will you be my Valentine ☀️";
else if (hour < 18) title.textContent = "Hey you, will you be my Valentine? 💕";
else title.textContent = "Before the day ends…, will you be my Valentine? 🌙";

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);

  setTimeout(() => {
    introText.style.display = "none";
    title.style.display = "block";
    buttons.style.display = "flex";
  }, 2000);
});

// JS: small tweak in YES click to handle both cats
// ✅ REPLACE your YES click handler with this (FIX)
yesBtn.addEventListener("click", () => {
  title.textContent = "YAYYYY 💕";

  // make the currently visible cat dance
  if (currentMood === 0) {
    cats[0].src = "cat_dance.gif";
  }

  buttons.style.display = "none";   // THIS WILL NOW WORK
  finalText.style.display = "block";
  document.title = "💖 She Said YES 💖";
  startHeartRain();
});


function startHeartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }, 300);
}

const cats = document.querySelectorAll("#cat-wrapper .cat");
let currentMood = 0;

moodToggle.addEventListener("click", () => {
  document.body.classList.toggle("alt-mood");

  cats[currentMood].style.display = "none";
  currentMood = (currentMood + 1) % cats.length;
  cats[currentMood].style.display = "block";

  const icons = ["💖", "✨", "🌸", "🌙", "💫"];
  moodToggle.textContent = icons[currentMood % icons.length];
});

// JS: enhance easter egg (burst + secret line)
let catClickCount = 0;
const easterEgg = document.getElementById("easter-egg");
const eggSub = document.getElementById("egg-sub");
let eggUnlocked = false;

cats.forEach(cat => {
  cat.addEventListener("click", () => {
    catClickCount++;

    if (catClickCount === 5 && !eggUnlocked) {
      eggUnlocked = true;
      easterEgg.style.display = "block";
      easterEgg.classList.add("glow");
      burstHearts(20);
    } else if (eggUnlocked) {
      eggSub.textContent = "I’d still choose you. Every time. 💘";
      burstSparkles(12);
    }
  });
});

function burstHearts(n) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement("div");
    h.className = "floating-heart";
    h.textContent = "💖";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 2000);
  }
}

// JS: update sparkle creation to float sideways too
function burstSparkles(n) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.textContent = "✨";
    s.style.left = Math.random() * 100 + "vw";
    s.style.bottom = "40vh";
    s.style.setProperty("--drift", Math.random()); // sideways float
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1800);
  }
}


