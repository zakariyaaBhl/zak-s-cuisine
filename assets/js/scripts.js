'use strict';

const navIconeEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');
const navLinks = document.querySelectorAll('.nav__link');


/**
 * ## Nav Toggle Event
 */

const navOpen = () => {
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style = `visibility: visible; height: 100vh; width: 100vw; overflow: hidden;`;
};

const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style = `visibility: visible; height: initial; width: 100%; overflow-x: clip;`;
};

navIconeEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);


navLinks.forEach((item) => {
    item.addEventListener('click', navClose);
    navBgOverlayEl.classList.remove('active');
    document.body.style = `visibility: visible; height: initial; width: 100%; overflow-x: clip;`;
});


/**
 * ## AOS Initialize
 */

AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom'
})
