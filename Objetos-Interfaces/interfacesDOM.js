"use strict";
const video = document.querySelector('#videoprincipal');
if (video instanceof HTMLVideoElement) {
    console.log(video?.volume);
}
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
});
const links2 = document.querySelectorAll('a');
links2.forEach((link) => {
    console.log(link.href);
});
const elements = document.querySelectorAll('.link');
function modificarElemento(element) {
    if (element instanceof HTMLElement) {
        element.style.color = 'red';
        element.style.border = '1px solid red';
    }
}
elements.forEach(modificarElemento);
