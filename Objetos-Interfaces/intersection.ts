// Intersection Type

type Produto2 = {
  preco: number;
}

type Carro2 = {
  rodas: number;
  portas: number;
}

type Livro2 = {
  paginas: number;
}

function handleProdutoCarro(dados: Produto2 & Carro2){
  console.log(dados.preco);
  console.log(dados.rodas);
  console.log(dados.portas);
}

handleProdutoCarro({preco: 1000, rodas: 4, portas: 2});

type TipoCarro = {
  rodas: number;
  portas: number;
}

type TipoCarroComPreco = TipoCarro & {
  preco: number;
};

// Não sobrescreve a interface, apenas adiciona a nova propriedade
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro){
  console.log(carro.preco);
}

interface Window {
  userId: number;
}

window.userId = 200;