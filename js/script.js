let navList = document.getElementById('nav-list');
let navToggle = document.getElementById('nav-toggle');
let navToggleIcon = document.getElementById('nav-toggle-svg-path');
const closedPath = "M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z";
const openPath = "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
let navOpen = false;

// Navbar code
navToggle.addEventListener('click', () => {
    if (navOpen) {
        navList.classList.remove('navbar-list-shown');
        navToggleIcon.setAttribute('d', closedPath);
    } else {
        navList.classList.add('navbar-list-shown');
        navToggleIcon.setAttribute('d', openPath);
    }
    navOpen = !navOpen;
});