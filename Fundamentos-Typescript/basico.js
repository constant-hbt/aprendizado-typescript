"use strict";
var _a;
// Fundamentos
const total = 100;
function somar(a, b) {
    return a + b;
}
console.log(somar(5, 10));
// Inferência de tipo
//Não é necessário anotar nessas situações por causa da inferência.
//Os lugares interessantes de anotar seriam funções, etc
let produto = "Livro";
let preco = 200;
const carro = {
    marca: 'Audi',
    portas: 5
};
const carro2 = {
    marca: 'Volks',
    portas: 4,
};
//Inferência, onde pode ser mais de uma coisa, nesse caso boolean | string
const barato = preco < 400 ? true : 'produto caro';
//Sempre indicar nas funções, os parâmentros
// Porém, ele também consegue fazer a inferência no retorno
function multiplicar(a, b) {
    return `${a * b}`;
}
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
function transformPreco(produto) {
    produto.preco = `R$ ${produto.preco}`;
    return produto;
}
console.log(transformPreco(nintendo));
function normalizarTexto(texto) {
    return texto.trim().toLocaleLowerCase();
}
console.log(normalizarTexto(' EiTa '));
const input = document.querySelector('input');
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        const value = Number(input.value);
        window.localStorage.setItem('total', value.toString());
        calcularGanho(value);
    }
}
if (input !== null) {
    input.value = (_a = window.localStorage.getItem('total')) !== null && _a !== void 0 ? _a : '';
    input.addEventListener('keyup', totalMudou);
}
const frase = 'Front End';
const preco2 = 500;
const booleano = preco > 100;
// typeof proteção do tipo
console.log(typeof frase);
console.log(typeof preco2);
console.log(typeof booleano);
console.log(typeof document);
console.log(typeof []);
console.log(typeof null);
if (typeof frase === 'string') {
    console.log('Frase é uma string');
    frase.toLowerCase();
}
else {
    console.log('Frase não é uma string');
}
const frase1 = new String('Front End');
const frase2 = String('Front End');
const frase3 = 'Front End';
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
