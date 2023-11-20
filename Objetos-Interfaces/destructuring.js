"use strict";
const { body } = document;
console.log(body);
function handleDataDestruct({ nome, preco }) {
    nome.includes('BT');
    preco.toFixed(2);
}
handleDataDestruct({
    nome: 'Henrique',
    preco: 100,
});
function handleClick11({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget);
        console.log(pageX);
    }
}
function handleClick22({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget);
        console.log(pageX);
    }
}
document.documentElement.addEventListener('click', handleClick11);
function comparar(tipo, ...numeros) {
    console.log(tipo);
    console.log(numeros);
}
function comparar3(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.min(...numeros);
    }
}
comparar3('menor', 1, 2, 3, 4, 20, 17, 14, 100);
comparar3("maior", 1, 2, 3, 4, 20, 17, 14, 100);
