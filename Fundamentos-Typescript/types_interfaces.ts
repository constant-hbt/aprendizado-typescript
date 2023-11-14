type Produto = {
  nome: string;
  preco: number;
  hasKeyboard: boolean;
};

type Categorias = 'computadores' | 'celulares';

function pintarCategorias(categoria: Categorias){
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
function preencherDados(dados: Produto){
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

interface InterfaceProduto {
  nome: string;
  preco: number;
  hasKeyboard: boolean;
}	

function preencherDadosInterface(dados: InterfaceProduto){
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

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}
/* Exercício */
interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

async function fetchProduct(): Promise<Product | null> {
  try {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    if (response.ok) return await response.json();
  } catch {}

  return null;
}

function showObjectProperties(name: string, value: any, ignore?: string[], items?: string[]): string[] {
  items = items || [];

  if (ignore && ignore.includes(name)) return items;

  if (typeof value === 'object') {
    items.push(`<h2>${name}</h2>`);
    Object.entries(value).forEach(([key, value]) => {
      showObjectProperties(key, value, ignore, items);
    });
  } else {
    items.push(`<p>${name}: ${value}</p>`);
  }

  return items;
}

async function showProduct() {
  const infos = await fetchProduct();
  if (!infos) return;

  const data = infos as any;
  const elementsToIgnore: string[] = [];

  const elements = showObjectProperties('Produto', data, elementsToIgnore);

  document.body.innerHTML = elements?.join("") ?? '';
}

showProduct();