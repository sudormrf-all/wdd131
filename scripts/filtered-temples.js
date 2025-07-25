const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Additional temples for assignment
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-lds-1179151-wallpaper.jpg",
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41100,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome_italy_temple_daylight.jpg",
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52590,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo_japan_temple.jpg",
    },
];

// Render temple cards inside the gallery
function renderTemples(templeArray) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "<h2>Temple Gallery</h2>";

    templeArray.forEach((temple) => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
        <figcaption>${temple.templeName}</figcaption>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      `;
        gallery.appendChild(figure);
    });
}

// Filter temples based on nav item clicked
function filterTemples(filter) {
    let filtered;
    switch (filter.toLowerCase()) {
        case "old":
            filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) < 1900);
            break;
        case "new":
            filtered = temples.filter((t) => parseInt(t.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filtered = temples.filter((t) => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter((t) => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    renderTemples(filtered);
}

// Hamburger menu toggle and accessibility
function setupHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        const isOpen = navMenu.style.display === "flex";
        navMenu.style.display = isOpen ? "none" : "flex";
        hamburger.innerHTML = isOpen ? "&#9776;" : "&times;";
        hamburger.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        hamburger.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 800) {
            navMenu.style.display = "flex";
            hamburger.innerHTML = "&#9776;";
            hamburger.setAttribute("aria-label", "Open navigation menu");
            hamburger.setAttribute("aria-expanded", "false");
        } else {
            navMenu.style.display = "none";
            hamburger.innerHTML = "&#9776;";
            hamburger.setAttribute("aria-label", "Open navigation menu");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
}

// Footer info setup
function setupFooter() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
}

// Navbar (filter) setup
function setupNavFilters() {
    const navLinks = document.querySelectorAll("#nav-menu a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.textContent.trim();
            filterTemples(filter);
            // Close menu on mobile after clicking filter
            if (window.innerWidth < 800) {
                document.getElementById("nav-menu").style.display = "none";
                const hamburger = document.getElementById("hamburger");
                hamburger.innerHTML = "&#9776;";
                hamburger.setAttribute("aria-label", "Open navigation menu");
                hamburger.setAttribute("aria-expanded", "false");
            }
        });
    });
}

// On DOM load, set up everything
document.addEventListener("DOMContentLoaded", () => {
    renderTemples(temples);
    setupHamburger();
    setupFooter();
    setupNavFilters();
});
  