"use strict";
// Type assertion = como se fosse um cast - as
// Pode gerar erros no runtime
const video2 = document.querySelector('video');
video2.volume;
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return await response.json();
}
async function handleProd() {
    const produto = await fetchProduto();
    console.log(produto.nome);
    console.log(produto.preco);
}
handleProd();
// ! non-null operator
// Pode gerar erros no runtime
const video3 = document.querySelector('video');
console.log(video3.volume);
const video4 = document.querySelector('.player');
const video5 = document.querySelector('.player');
const video6 = document.querySelector('.player');
