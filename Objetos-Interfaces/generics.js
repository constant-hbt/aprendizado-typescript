"use strict";
// function retorno<T>(a: T): T{
//   return a;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
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
(_a = notNull('Algo')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
(_b = notNull(200)) === null || _b === void 0 ? void 0 : _b.toFixed(2);
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
const linkJquery = (_c = $('a')) === null || _c === void 0 ? void 0 : _c.href;
const linkNovo = document.querySelector('.link');
if (linkNovo instanceof HTMLAnchorElement) {
    console.log(linkNovo.href);
}
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData('https://api.origamid.dev/json/notebook.json');
        console.log(notebook.nome);
    });
}
handleData();
