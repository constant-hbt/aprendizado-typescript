import _ from 'lodash';
import ClipboardJS from 'clipboard';

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: 'Livro',
}

console.log(_.difference([1, 2, 3], [1, 2, 3, 4, 6]));
const button = new ClipboardJS('button');

function handleCopy(event: ClipboardJS.Event){
  console.log(event.clearSelection);
}

button.on('success', handleCopy);