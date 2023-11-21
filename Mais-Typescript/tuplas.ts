// Trabalhando com tuplas

const produto1 = ['Notebook', 2500];
const produto2: [string, number] = ['Notebook', 2500];

if (typeof produto1[0] === 'string'){
  console.log(produto1[0].toLowerCase());
}

console.log(produto2[0].toLowerCase());

const [nome, preco] = produto2;

console.log(nome.toUpperCase());
console.log(preco.toFixed(2));

// as const torna um dado readonly e infere o tipo de dado mais específico possível. 
// Em métodos que retornar array, as mesmas são transformadas em tuplas


// Pode utilizar a declaração da função como abaixo, ou utilizando o as const, que ele irá inferir
// function getText(selector: string): null | [HTMLElement, string]
function getText(selector: string){
  const el = document.querySelector<HTMLElement>(selector);
  if (el){
    return [el, el.innerText] as const;
  }

  return null;
}

const button = getText('button');
console.log(button);

if (button){
  console.log(button[0].classList);
}

interface ProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function isVenda(data: unknown): data is Venda {
  return (
    Array.isArray(data) &&
    data.length === 4 &&
    typeof data[0] === 'string' &&
    typeof data[1] === 'number' &&
    typeof data[2] === 'string' &&
    typeof data[3] === 'object' &&
    'cor' in data[3] &&
    'marca' in data[3]
  );
}

function somarVendas(vendas: Venda[]){
  return vendas.reduce((total, venda) => total + venda[1], 0);
}

async function getVendas(): Promise<unknown> {
  try{
    const res = await fetch('https://api.origamid.dev/json/vendas.json');
    return await res.json();
  } catch(e) {}

  return null;
}

async function handleVendas(){
  const vendas = await getVendas();
  if (vendas && Array.isArray(vendas)){
    vendas.filter(isVenda);
    console.log(`Total de Vendas: R$ ${somarVendas(vendas).toFixed(2)}`);
  }
}

handleVendas();

