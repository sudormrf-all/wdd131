// Dynamic Footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;

    // Hamburger Menu Functionality
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        const isOpen = navMenu.style.display === "flex";
        navMenu.style.display = isOpen ? "none" : "flex";
        hamburger.innerHTML = isOpen ? "&#9776;" : "&times;";
        hamburger.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    });

    // Responsive nav display on window resize
    window.addEventListener("resize", function () {
        if (window.innerWidth >= 800) {
            navMenu.style.display = "flex";
            hamburger.innerHTML = "&#9776;";
        } else {
            navMenu.style.display = "none";
            hamburger.innerHTML = "&#9776;";
        }
    });
});
  