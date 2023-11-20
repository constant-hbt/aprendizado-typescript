// Type assertion = como se fosse um cast - as
// Pode gerar erros no runtime

const video2 = document.querySelector('video') as HTMLVideoElement;

video2.volume;

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return await response.json() as Produto;
}

async function handleProd(){
  const produto = await fetchProduto();
  console.log(produto.nome);
  console.log(produto.preco);
}

handleProd();

// ! non-null operator
// Pode gerar erros no runtime

const video3 = document.querySelector('video')!;
console.log(video3.volume);

const video4 = document.querySelector('.player') as HTMLVideoElement;
const video5 = <HTMLVideoElement>document.querySelector('.player');
const video6 = document.querySelector<HTMLVideoElement>('.player');