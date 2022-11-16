const hamburger = document.querySelector('.hamburger');
const navList = document.querySelectorAll('.nav-list');
const body = document.querySelector('');

let MobileNav = false;

function toggleNav() {
  if (MobileNav) {
    navList.classList.remove('df');
    MobileNav = false;
  } else {
    navList.classList.add('df');
    MobileNav = true;
  }
}

hamburger.addEventListener('click',toggleNav)