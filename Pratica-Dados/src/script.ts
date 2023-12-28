import Estatisticas from "./Estatisticas.js";
import { CountList } from "./countBy.js";
import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";

function preencherTabela(transacoes: Transacao[]): void {
  const tbody = document.getElementById("tbody-transactions");
  if (!tbody) return;

  tbody.innerHTML = "";
  transacoes.forEach((transacao) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${transacao.nome}</td>
      <td>${transacao.email}</td>
      <td>R$ ${transacao.moeda}</td>
      <td>${transacao.pagamento}</td>
      <td>${transacao.status}</td>
    `;
    tbody.appendChild(tr);
  });
}

function preencherLista(lista: CountList, containerId: string): void{
  const conatinerElement = document.getElementById(containerId);
  if (conatinerElement){
    Object.keys(lista).forEach((key) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = `${key}: ${lista[key]}`;
      conatinerElement.appendChild(paragraph);
    })
  }
}

function preencherEstatisticas(transacoes: Transacao[]): void {
  const data = new Estatisticas(transacoes); 
  console.log(data);

  const totalElement = document.querySelector("#total span");
  if(totalElement) totalElement.textContent = data.total.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

  const diaElement = document.querySelector("#dia span");
  if(diaElement) diaElement.textContent = data.melhorDia[0];

  preencherLista(data.pagamento, 'pagamento');
  preencherLista(data.status, 'status');
}

async function handleData(){
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json?");
  
  if (!data) return;
  
  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}

handleData();
