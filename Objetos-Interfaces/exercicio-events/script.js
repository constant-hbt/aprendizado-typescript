"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const buttonExercise = document.querySelector('button');
function handlePointerDown(event) {
    const button = event.currentTarget;
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        if (button) {
            button.setAttribute('aria-expanded', String(active));
            button.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');
        }
    }
}
buttonExercise?.addEventListener('pointerdown', handlePointerDown);
