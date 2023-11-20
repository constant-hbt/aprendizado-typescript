const { body } = document;

console.log(body);

function handleDataDestruct({nome, preco}: {nome: string; preco: number}) {
  nome.includes('BT');
  preco.toFixed(2);
}

handleDataDestruct({
  nome: 'Henrique',
  preco: 100,
});

function handleClick11({currentTarget, pageX}: {currentTarget: EventTarget | null; pageX: number;}) {
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget);
    console.log(pageX);
  }
}

function handleClick22({currentTarget, pageX}: MouseEvent) {
  if (currentTarget instanceof HTMLElement) {
    console.log(currentTarget);
    console.log(pageX);
  }
}

document.documentElement.addEventListener('click', handleClick11);

function comparar(tipo: string, ...numeros: (number | string)[]) {
  console.log(tipo);
  console.log(numeros);
}

function comparar3(tipo: 'menor' | 'maior', ...numeros: number[]) {
  if (tipo === 'menor') {
    return Math.min(...numeros);
  }
  if (tipo === 'maior') {
    return Math.min(...numeros);
  }
}

comparar3('menor', 1, 2, 3, 4, 20, 17, 14, 100);
comparar3("maior", 1, 2, 3, 4, 20, 17, 14, 100);