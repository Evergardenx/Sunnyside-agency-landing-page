const $menuButton = document.querySelector(".menu-button");
const $mainNav = document.querySelector(".main-nav");

$menuButton.addEventListener("click", () => {
   $mainNav.classList.toggle("-active");
});