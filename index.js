const menu1 = document.getElementById('menu-1');
const menu2 = document.getElementById('menu-2');
const menu3 = document.getElementById('menu-3');

const menuButton1 = document.getElementById('menu-1-button');
const menuButton2 = document.getElementById('menu-2-button');
const menuButton3 = document.getElementById('menu-3-button');

const sideMenu = document.getElementById('side-menu')


function menuOneShow(){
  menu1.classList.add('show');
  menu2.classList.remove('show');
  menu3.classList.remove('show');
}

/* Show second menu when your mouse enters the second button */
/* Hide tooltip 1 and 3 if they are open */
function menuTwoShow(){
  menu1.classList.remove('show');
  menu2.classList.add('show');
  menu3.classList.remove('show');
}

/* Show third menu when your mouse enters */ 
/* Hide tooltip 1 and 2 if they are open */
function menuThreeShow(){
  menu1.classList.remove('show');
  menu2.classList.remove('show');
  menu3.classList.add('show');
}

/* Just hides all the menus when user is through hovering on them */
function menusHide() {
  menu1.classList.remove('show');
  menu2.classList.remove('show');
  menu3.classList.remove('show');
}

/* Trigger hover event for each dropdown menu */
menuButton1.addEventListener('mouseover', menuOneShow);
menuButton2.addEventListener('mouseover', menuTwoShow);
menuButton3.addEventListener('mouseover', menuThreeShow);

/* Hides all menus by selecting all elements and listening to their hover states */
menu1.addEventListener('mouseleave', menusHide);
menu2.addEventListener('mouseleave', menusHide);
menu3.addEventListener('mouseleave', menusHide);


/*SIDE MENU*/
/*If somebody clicks on the menu icon, show menu*/
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);

// This adds a show-menu class from the CSS
function sideMenuAppears() {
  console.log('sideMenuAppears() is active');
  sideMenu.classList.add('show-menu');
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
  console.log('sideMenuDisappears() is active');
  sideMenu.classList.remove('show-menu');
}