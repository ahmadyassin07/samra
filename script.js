// ================= Disable Right-Click =================
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});



const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active'); // show/hide menu

    // toggle hamburger icon to X
    if (hamburger.classList.contains('bx-menu')) {
        hamburger.classList.remove('bx-menu');
        hamburger.classList.add('bx-x');
    } else {
        hamburger.classList.remove('bx-x');
        hamburger.classList.add('bx-menu');
    }
});








// ================= Scroll Top Button =================
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================= Fade In/Out Welcome Messages =================
const messages = document.querySelectorAll(".welcome-message");
let currentMessage = 0;

function showMessage(index) {
    messages.forEach((msg, i) => {
        if (i === index) {
            msg.style.opacity = "1";
            msg.style.transform = "translateY(0)";
            msg.style.transition = "opacity 1s ease, transform 1s ease";
        } else {
            msg.style.opacity = "0";
            msg.style.transform = "translateY(20px)";
            msg.style.transition = "opacity 1s ease, transform 1s ease";
        }
    });
}

showMessage(currentMessage);
setInterval(() => {
    currentMessage = (currentMessage + 1) % messages.length;
    showMessage(currentMessage);
}, 5000);

// ================= Smooth Scroll for Anchor Links =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ================= Dynamic Copyright Year =================
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
