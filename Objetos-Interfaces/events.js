"use strict";
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
button === null || button === void 0 ? void 0 : button.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
document.body.style.height = 'calc(100vh + 100px)';
window.addEventListener('scroll', handleScroll);
function ativarMenu(event) {
    if (event instanceof MouseEvent) {
        event.preventDefault();
    }
    else if (event instanceof TouchEvent) {
        console.log(event.touches[0].pageX);
    }
    console.log(event);
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
const button2 = document.querySelector('button');
function handleClick2(event) {
    console.log(this);
    const element = event.currentTarget;
    console.log(event.currentTarget);
    if (element instanceof HTMLButtonElement) {
        console.dir(element);
    }
}
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener('click', handleClick2);
