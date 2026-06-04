console.log("Portfolio Loaded 🚀✨");

/* ================= TYPEWRITER (SMOOTH + CLEAN) ================= */
const typingElement = document.getElementById("typing-text");

const roles = [
    "B.Tech CSE (AI) Student",
    "Web Developer",
    "AI Enthusiast",
    "Robotics Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    if (!typingElement) return;

    const current = roles[roleIndex];

    typingElement.textContent = current.substring(0, charIndex);

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        speed = 1200;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }

    setTimeout(typeWriter, speed);
}

typeWriter();

/* ================= THEME SYSTEM ================= */
const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme) {
    document.body.classList.toggle("light-mode", theme === "light");
    if (themeBtn) {
        themeBtn.textContent = theme === "light" ? "☀️ Light" : "🌙 Dark";
    }
    localStorage.setItem("theme", theme);
}

applyTheme(localStorage.getItem("theme") || "dark");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("light-mode")
            ? "dark"
            : "light";
        applyTheme(newTheme);
    });
}

/* ================= CONTACT FORM ================= */
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const btn = form.querySelector("button");
        btn.textContent = "Sending... 🚀";

        setTimeout(() => {
            alert("Message sent successfully 🚀");
            form.reset();
            btn.textContent = "Send Message 🚀";
        }, 800);
    });
}

/* ================= SCROLL ANIMATIONS (IMPROVED) ================= */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});

/* ================= ACTIVE NAV HIGHLIGHT ================= */
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.clientHeight;

        if (pageYOffset >= top - height / 3) {
            current = sec.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

});

/* ================= BUTTON RIPPLE EFFECT ================= */
document.querySelectorAll("button, .resume-btn, .project-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/* ================= HERO PARALLAX EFFECT ================= */
window.addEventListener("scroll", () => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    let offset = window.scrollY;

    hero.style.transform = `translateY(${offset * 0.2}px)`;
});