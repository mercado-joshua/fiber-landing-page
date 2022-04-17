
const navSection = () => {
    const openBtn = document.querySelector("[data-js-menu-btn]");
    const closeBtn = document.querySelector("[data-js-close-btn]");
    const navbar = document.querySelector("[data-js-nav-section]");

    openBtn.addEventListener("click", function () {
        navbar.classList.add("-active");
    });

    closeBtn.addEventListener("click", function () {
        navbar.classList.remove("-active");
    });
}

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') navSection();
});
