"use strict";
function somar(a, b, c) {
    return a + b + (c ?? 0);
}
somar(3, 4);
const subtrair = (a, b) => a - b;
subtrair(3, 4);
function pintarTela(cor) {
    document.body.style.backgroundColor = cor;
}
console.log(pintarTela('gray'));
// Não é possível fazer uma checagem booleana se a função retornar void
const btn = document.querySelector('button');
btn?.click();
// A partir do momento que haver qualquer tipo de retorno possível na função, ela não será mais void
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('Henrique'));
console.log(isString(3));
class FormaQuadrado {
    lado;
    constructor(lado) {
        this.lado = lado;
    }
    ;
    perimetro(lado) {
        return lado * 4;
    }
    ;
}
function calcularPerimetro(forma) {
    return forma.perimetro(forma.lado);
}
console.log(calcularPerimetro(new FormaQuadrado(4)));
function normalizarTexto(texto) {
    if (typeof texto === 'string') {
        return texto.trim().toLowerCase();
    }
    return texto.map((text) => text.trim().toLowerCase());
}
console.log(normalizarTexto(' Henrique '));
console.log(normalizarTexto([' Henrique ', ' Eduardo', ' João ']));
function $Jquery(seletor) {
    return document.querySelector(seletor);
}
$Jquery('a');
$Jquery('video')?.volume;
$Jquery('.item');
function arredondarValor(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    return Math.ceil(Number(valor)).toString();
}
console.log(arredondarValor(3.14));
console.log(arredondarValor('3.14'));
// Never, utilizado quando a função gera um erro
function abortar(mensagem) {
    throw new Error(mensagem);
}
abortar('Erro');
console.log('Tente novamente');
