"use strict";
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto('A Guerra dos Tronos', 200);
console.log(livro instanceof Produto);
class Livro extends Produto {
    constructor(nome, preco, autor) {
        super(nome, preco);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(nome, preco, jogadores) {
        super(nome, preco);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 49.99, 'J. R. R. Tolkien');
    }
    else if (busca === 'God of War') {
        return new Jogo('God of War', 59.99, 1);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
const produto2 = buscarProduto('God of War');
if (produto instanceof Livro) {
    console.log(produto.autor);
}
if (produto2 instanceof Produto) {
    console.log(produto2.precoReal());
}
const honda = {
    nome: 'Honda',
};
console.log(produto2);
console.log(honda);
console.log(honda instanceof Produto);
const anchor = document.getElementById('origamid');
console.dir(anchor);
if (anchor instanceof HTMLAnchorElement) {
    anchor.href = anchor.href.replace('http', 'https');
}
