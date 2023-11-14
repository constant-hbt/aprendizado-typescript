"use strict";
function pintarCategorias(categoria) {
    if (categoria === 'computadores')
        console.log('Computadores');
    else
        console.log('Celulares');
}
pintarCategorias('computadores');
pintarCategorias('celulares');
/**
 * Renders the provided data on the webpage.
 *
 * @param {Object} dados - An object containing the data to be rendered.
 * @param {string} dados.nome - The name to be displayed.
 * @param {number} dados.preco - The price to be displayed.
 * @param {boolean} dados.hasKeyboard - Indicates if a keyboard is included.
 */
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.hasKeyboard ? 'Sim' : 'Não'}</p>
  </div>`;
}
preencherDados({
    nome: 'Computador',
    preco: 100,
    hasKeyboard: true,
});
function preencherDadosInterface(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.preco}</p>
    <p>Inclui teclado: ${dados.hasKeyboard ? 'Sim' : 'Não'}</p>
  </div>`;
}
preencherDadosInterface({
    nome: 'Computador Interface',
    preco: 100,
    hasKeyboard: true,
});
async function fetchProduct() {
    try {
        const response = await fetch('https://api.origamid.dev/json/notebook.json');
        if (response.ok)
            return await response.json();
    }
    catch (_a) { }
    return null;
}
function showObjectProperties(name, value, ignore, items) {
    items = items || [];
    if (ignore && ignore.includes(name))
        return items;
    if (typeof value === 'object') {
        items.push(`<h2>${name}</h2>`);
        Object.entries(value).forEach(([key, value]) => {
            showObjectProperties(key, value, ignore, items);
        });
    }
    else {
        items.push(`<p>${name}: ${value}</p>`);
    }
    return items;
}
async function showProduct() {
    var _a;
    const infos = await fetchProduct();
    if (!infos)
        return;
    const data = infos;
    const elementsToIgnore = [];
    const elements = showObjectProperties('Produto', data, elementsToIgnore);
    document.body.innerHTML = (_a = elements === null || elements === void 0 ? void 0 : elements.join("")) !== null && _a !== void 0 ? _a : '';
}
showProduct();
