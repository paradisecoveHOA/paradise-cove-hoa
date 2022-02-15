var mobile_menu_icon = document.getElementsByClassName('mobile-menu-icon')[0];
var mobile_menu_icon_bars = document.querySelectorAll('.mobile-menu-icon-bars');
var mobile_menu_links = document.querySelectorAll('.mobile-menu-link');
var mobile_menu = document.getElementsByClassName('mobile-menu')[0];
var nav_title = document.getElementsByClassName('nav-title')[0];

function animateHamburger() {
  mobile_menu_icon.classList.toggle('change');
}

function toggleOpenMobileMenu() {
  mobile_menu.classList.toggle('mobile-menu-visible');
}

mobile_menu_icon.addEventListener('click', function () {
  toggleOpenMobileMenu();
  animateHamburger();
});

mobile_menu_links.forEach(function (link) {
  link.addEventListener('click', function () {
    toggleOpenMobileMenu();
    animateHamburger();
  })
});
