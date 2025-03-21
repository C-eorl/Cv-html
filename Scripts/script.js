document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".lien-nav");

    let currentIndex = 0;
    const totalSections = sections.length;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.toggle("actif", i === index);
        });

        navLinks.forEach((link, i) => {
            link.classList.toggle("actif", i === index);
        });

        currentIndex = index;
    }

    // Écouteur pour les clics sur la navbar
    navLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            showSection(index);
        });
    });

    // Défilement avec la molette
    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            currentIndex = (currentIndex + 1) % totalSections;
        } else {
            currentIndex = (currentIndex - 1 + totalSections) % totalSections;
        }
        showSection(currentIndex);
    });

});
