// import { Produto, URL_BASE } from "./global.js";
// import pluginSlide from "./pluginSlide.js";

// declare global {
//   interface Carro {
//     nome: string;
//     preco: number;
//   }
// }

// pluginSlide('div');
// console.log(URL_BASE);

// const livro: Produto = {
//   nome: 'Livro',
//   preco: 100,
// }

// const celular: ProdutoUnidade = {
//   nome: 'Celular',
//   preco: 1000,
// }

const body = $('body');
console.log(body.addClass('ativo'));

console.log(_.difference([1, 2, 3], [1, 2, 3]));

declare const Vimeo: any;

const iframe = document.getElementById('video');
const player = new Vimeo.Player(iframe);

console.log(player);