// function retorno<T>(a: T): T{
//   return a;
// }

// console.log(retorno<string>('Algo'));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));

const numeros = [1,2,3,4,5,6,7,8,9,10];
const frutas: Array<string> = ['Banana', 'Maça', 'Uva', 'Laranja', 'Pera'];

function firstFive<T>(lista: T[]): T[]{
  return lista.slice(0,5);
}

console.log(firstFive<number>(numeros));
console.log(firstFive(frutas));

function notNull<T>(arg: T | null): T | null {
  if (arg !== null) {
    return arg;
  }
  return null;
}

notNull('Algo')?.toLowerCase();
notNull(200)?.toFixed(2);

function tipoDado<T>(a: T): {dado: T, tipo: string} {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado('Algo').dado;
tipoDado(true).tipo;

function extractText<T extends HTMLElement>(el: T): {texto: string; el: T} {
  return {
    texto: el.innerText,
    el,
  }
}

const link = document.querySelector('a');

if (link) {
  console.log(extractText(link).el.href);
}

function $<T extends Element>(selector: string): T | null{
  return document.querySelector(selector);
}

const linkJquery = $<HTMLAnchorElement>('a')?.href;

const linkNovo = document.querySelector<HTMLAnchorElement>('.link');
if (linkNovo instanceof HTMLAnchorElement) {
  console.log(linkNovo.href);
}

async function getData<T>(url: string): Promise<T>{
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string,
  preco: number,
}

async function handleData(){
  const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
  console.log(notebook.nome);
}

handleData();