console.log(document.constructor);

// Modificadores de Acesso: public, private, protected, readonly

class Produto {
  readonly tipo = 'produto';
  private nome: string;
  protected preco?: number;
  constructor(nome: string, preco?: number) {
    this.nome = nome;
    this.preco = preco;
  }
  getNome() {
    return this.nome;
  };
  static transformarPreco(preco: number) {
    return `Preço: R$ ${(preco ?? 0).toFixed(2)}`;
  };
}

class Livro extends Produto {
  autor: string;
  constructor(autor: string, nome: string, preco?: number) {
    super(nome, preco);
    this.autor = autor;
  }
  getPreco() {
    return this.preco;
  }
}

const livro = new Produto('O senhor dos anéis', 300);
console.log(livro.tipo);
console.log(livro.getNome());
console.log(Livro.transformarPreco(300));

class Quadrado {
  readonly lados = 4;
  medida: number;
  constructor(medida: number) {
    this.medida = medida;
  }
  getPerimetro() {
    return this.medida * this.lados;
  }
  getArea() {
    return this.medida * this.medida;
  }
}

class Circulo {
  readonly PI = Math.PI;
  raio: number;
  constructor(raio: number) {
    this.raio = raio;
  }
  getPerimetro() {
    return Math.round(2 * this.PI * this.raio * 100) / 100;
  }
  getArea() {
    return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
  }
}

const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
  if (n < 15) {
    return new Quadrado(n);
  } else {
    return new Circulo(n);
  }
});

formas.forEach((forma) => {
  if (forma instanceof Quadrado) {
    console.log(forma.getArea());
  }
  if (forma instanceof Circulo) {
    console.log(forma.getPerimetro());
  }
});

const q1 = new Quadrado(10);

if (q1 instanceof Quadrado) {
  console.log(q1.getArea());
}
