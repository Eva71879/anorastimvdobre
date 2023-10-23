const footer_hamburger = document.querySelector(".footer__hamburger");
const footer_menu = document.querySelector(".footer__mobile-menu");
const footer_mobile_menu_link = document.querySelectorAll(".footer__mobile-menu a");
console.log(footer_hamburger)
console.log(footer_menu)
console.log(footer_mobile_menu_link)


footer_hamburger.addEventListener("click", mobileMenu);
footer_mobile_menu_link.forEach((element) => { 
    element.addEventListener("click", mobileMenu);
});

function mobileMenu() {
    footer_hamburger.classList.toggle("active");
    footer_menu.classList.toggle("active");
}