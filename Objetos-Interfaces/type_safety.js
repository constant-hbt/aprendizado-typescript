"use strict";
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
async function fetchProd() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
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
