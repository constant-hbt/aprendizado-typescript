import countBy, { CountList } from "./countBy.js";

type TransacaoValor = Transacao & {
  valor: number;
}

function filtrarValor(transacao: Transacao): transacao is TransacaoValor{
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes: Transacao[];
  public total: number;
  public pagamento: CountList;
  public status: CountList;
  public semana: CountList;
  public melhorDia: [string, number];

  constructor(transacoes: Transacao[]){
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
  }

  private setTotal(): number{
    return this.transacoes.filter(filtrarValor).reduce((acc, transacao) => acc + transacao.valor, 0);
  }

  private setPagamento(): CountList{
    return countBy(this.transacoes.map(({pagamento}) => pagamento));
  }

  private setStatus(): CountList{
    return countBy(this.transacoes.map(({status}) => status));
  }

  private setSemana(): CountList{
    const countSemana = {
      "Domingo": 0,
      "Segunda-feira": 0,
      "Terça-feira": 0,
      "Quarta-feira": 0,
      "Quinta-feira": 0,
      "Sexta-feira": 0,
      "Sábado": 0,
    };

    for (let i = 0; i < this.transacoes.length; i++){
      const day = this.transacoes[i].data.getDay();
      switch(day){
        case 0: countSemana.Domingo++; break;
        case 1: countSemana["Segunda-feira"]++; break;
        case 2: countSemana["Terça-feira"]++; break;
        case 3: countSemana["Quarta-feira"]++; break;
        case 4: countSemana["Quinta-feira"]++; break;
        case 5: countSemana["Sexta-feira"]++; break;
        case 6: countSemana["Sábado"]++; break;
      }
    }

    return countSemana;
  }

  private setMelhorDia(): [string, number] {
    return Object.entries(this.semana).sort((a, b) => b[1] - a[1])[0];
  }
}