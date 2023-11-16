"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function typeGuard(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
const obj = {
    nome: 'Origamid',
};
if ('nome' in obj) {
    console.log('sim');
}
function handleProduto(data) {
    console.log(data);
    if ('preco' in data) {
        document.body.innerHTML = `
    <h2>${data.nome}</h2>
    <p>R$ ${data.preco + 100}</p>`;
    }
}
function fetchProd() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        handleProduto(json);
    });
}
fetchProd();
// Unknown - Permite passar qualquer tipo de dado, 
// porém para utilizá-lo precisa realizar o typeGuard para utilizá-lo
// Garantindo a type safety
function typeGuardUnknown(value) {
    if (typeof value === 'string') {
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
// Any permite que seja passado qualquer tipo de dado, e não precisa realizar o typeGuard para utilizá-lo
// Porém não tem nenhuma garantia de type safety
