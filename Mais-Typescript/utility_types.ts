interface Prod {
  nome: string
  quantidade: number
}

const produto3 = {
  nome: 'arroz',
  quantidade: 10,
  cor: 'branco',
}

const produto4 = {
  nome: 'Freezer',
  quantidade: 30,
  cheio: true,
}

const servico1 = {
  nome: 'Limpeza',
}

// Pode ter propriedades a mais, mas não a menos
function mostrarQuantidade(prod: Prod) {
  console.log(prod.quantidade + 20);
}

mostrarQuantidade(produto3);
mostrarQuantidade(produto4);
//mostrarQuantidade(servico1);

// Partial - Com o Partial<Tipo>, as propriedades da interface ficam opcionais 
function mostrarQuantidadePartial(prod: Partial<Prod>) {
  console.log(prod.quantidade ?? 0 + 20);
}

mostrarQuantidadePartial(produto3);
mostrarQuantidadePartial(produto4);
mostrarQuantidadePartial(servico1);

interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: 'Aprendendo HTML',
  visualizacoes: 20,
  tags: ['HTML', 'Front End'],
  autor: 'Henrique',
}

if (typeof artigo.autor === 'string') {
  console.log(artigo.autor);
}

artigo.autor;
artigo.descricao;

interface ObjetoLiteral {
  [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;
type ObjetoLiteral3 = Record<'titulo' | 'autor', string>;

// Para objetos literais
function mostrarTitulo(obj: ObjetoLiteral) {
  if (obj && typeof obj === 'object' && 'titulo' in obj){
    console.log(obj.titulo);
  }
}

// A mesma coisa, porém utilizando Record
function mostrarTitulo2(obj: ObjetoLiteral2) {
  if (obj && typeof obj === 'object' && 'titulo' in obj){
    console.log(obj.titulo);
  }
}

function mostrarTitulo3(obj: ObjetoLiteral3) {
  if (obj && typeof obj === 'object' && 'titulo' in obj){
    console.log(obj.titulo);
  }
}

mostrarTitulo({titulo: 'HTML e CSS'});
mostrarTitulo2({titulo: 'HTML5 e CSS3'});
//mostrarTitulo3({autor: 2023});