"use strict";
// function retorno<T>(a: T): T{
//   return a;
// }
// console.log(retorno<string>('Algo'));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ['Banana', 'Maça', 'Uva', 'Laranja', 'Pera'];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros));
console.log(firstFive(frutas));
function notNull(arg) {
    if (arg !== null) {
        return arg;
    }
    return null;
}
notNull('Algo')?.toLowerCase();
notNull(200)?.toFixed(2);
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a,
    };
    console.log(resultado);
    return resultado;
}
tipoDado('Algo').dado;
tipoDado(true).tipo;
function extractText(el) {
    return {
        texto: el.innerText,
        el,
    };
}
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link).el.href);
}
function $(selector) {
    return document.querySelector(selector);
}
const linkJquery = $('a')?.href;
const linkNovo = document.querySelector('.link');
if (linkNovo instanceof HTMLAnchorElement) {
    console.log(linkNovo.href);
}
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
handleData();
