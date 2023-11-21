interface Carro {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Carro;
//let chave: 'nome' | 'preco' | 'novo';

chave = 'nome';

function coordenadas(x: number, y: number){
  return {x, y};
}

let coord: typeof coordenadas;

coord = (x: number, y: number) => ({x, y});

document.querySelector('body');

interface Elementos {
  a: HTMLAnchorElement;
  button: HTMLButtonElement;
  div: HTMLDivElement;
  form: HTMLFormElement;
  h1: HTMLHeadingElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  label: HTMLLabelElement;
  select: HTMLSelectElement;
  span: HTMLSpanElement;
  textarea: HTMLTextAreaElement;
  ul: HTMLUListElement;
  li: HTMLLIElement;
  p: HTMLParagraphElement;
  table: HTMLTableElement;
  tr: HTMLTableRowElement;
  td: HTMLTableCellElement;
  video: HTMLVideoElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

let chaveEl: keyof Elementos;

function selecionar<Chave extends keyof Elementos>(seletor: Chave): Elementos[Chave] | null{
  return document.querySelector(seletor);
}

selecionar("a");

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livroo {
  nome: string;
  ano: number;
  autor: string;
  paginas: number
}

// Checkando interface de maneira genérica
function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === 'object' &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}

function checkInterfaceSimples<Interface>(
  obj: unknown,
  key: keyof Interface,
): obj is Interface {
  if (obj && typeof obj === 'object' && key in obj) {
    return true;
  } else {
    return false;
  }
}

async function fetchData<T>(url: string): Promise<T>{
  const base = 'https://api.origamid.dev/json';
  const response = await fetch(`${base}${url}`);
  return await response.json();
}

async function handleData(){
  const jogo = await fetchData<Jogo>('/jogo.json');
  if (checkInterface<Jogo>(jogo, 'desenvolvedora')){
    console.log(jogo.desenvolvedora.toLocaleLowerCase());
  }
  const livro = await fetchData<Livro>('/livro.json');
  if (checkInterface<Livro>(livro, 'autor')){
    console.log(livro.autor);
  }
}

handleData();