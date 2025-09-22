// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Scroll top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade In/Out effect for welcome messages
const messages = document.querySelectorAll(".welcome-message");
let current = 0;

function showMessage(index) {
    messages.forEach((msg, i) => {
        msg.style.opacity = i === index ? "1" : "0";
        msg.style.transform = i === index ? "translateY(0)" : "translateY(20px)";
    });
}

// Initial message
showMessage(current);

// Change message every 4 seconds
setInterval(() => {
    current = (current + 1) % messages.length;
    showMessage(current);
}, 8000);


