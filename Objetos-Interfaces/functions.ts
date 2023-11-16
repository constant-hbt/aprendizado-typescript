function somar(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}

somar(3, 4);

const subtrair = (a: number, b: number) => a - b;

subtrair(3, 4);

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string){
  document.body.style.backgroundColor = cor;
}

console.log(pintarTela('gray'));

// Não é possível fazer uma checagem booleana se a função retornar void
const btn = document.querySelector('button');

btn?.click();

// A partir do momento que haver qualquer tipo de retorno possível na função, ela não será mais void
function isString(value: any){
  if (typeof value === 'string'){
    return true;
  }
}

console.log(isString('Henrique'));
console.log(isString(3));

interface Quadrado{
  lado: number;
  perimetro(lado: number): number;
}

class FormaQuadrado implements Quadrado{
  lado: number;
  constructor(lado: number){
    this.lado = lado;
  };
  perimetro(lado: number): number {
    return lado * 4;
  };
}

function calcularPerimetro(forma: Quadrado): number{
  return forma.perimetro(forma.lado);
}

console.log (calcularPerimetro(new FormaQuadrado(4)));

// Function Overloading
function normalizarTexto(texto: string): string;
function normalizarTexto(texto: string[]): string[];
function normalizarTexto(texto: string | string[]): string | string[]{
  if (typeof texto === 'string'){
    return texto.trim().toLowerCase();
  }
  return texto.map((text) => text.trim().toLowerCase());
}

console.log(normalizarTexto(' Henrique '));
console.log(normalizarTexto([' Henrique ', ' Eduardo', ' João ']));

// A declaração precisa respeitar o tipo de retorno e os tipos dos argumentos
function $Jquery(seletor: 'a'): HTMLAnchorElement | null;
function $Jquery(seletor: 'video'): HTMLVideoElement | null;
function $Jquery(seletor: string): Element | null;
function $Jquery(seletor: string): Element | null {
  return document.querySelector(seletor);
}

$Jquery('a');
$Jquery('video')?.volume;
$Jquery('.item');

// Exercício
// Crie uma função que arredonda um valor passado para cima
// A função pode receber string ou number
// A função deve retornar o mesmo tipo que ela recebe
function arredondarValor(valor: string): string;
function arredondarValor(valor: number): number;
function arredondarValor(valor: number | string): number | string{
  if (typeof valor === 'number'){
    return Math.ceil(valor);
  }
  return Math.ceil(Number(valor)).toString();
}

console.log(arredondarValor(3.14));
console.log(arredondarValor('3.14'));

// Never, utilizado quando a função gera um erro
function abortar(mensagem: string): never{
  throw new Error(mensagem);
}

abortar('Erro');
console.log('Tente novamente');