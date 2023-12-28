import countBy from "./countBy.js";
function filtrarValor(transacao) {
    return transacao.valor !== null;
}
export default class Estatisticas {
    transacoes;
    total;
    pagamento;
    status;
    semana;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
        this.melhorDia = this.setMelhorDia();
    }
    setTotal() {
        return this.transacoes.filter(filtrarValor).reduce((acc, transacao) => acc + transacao.valor, 0);
    }
    setPagamento() {
        return countBy(this.transacoes.map(({ pagamento }) => pagamento));
    }
    setStatus() {
        return countBy(this.transacoes.map(({ status }) => status));
    }
    setSemana() {
        const countSemana = {
            "Domingo": 0,
            "Segunda-feira": 0,
            "Terça-feira": 0,
            "Quarta-feira": 0,
            "Quinta-feira": 0,
            "Sexta-feira": 0,
            "Sábado": 0,
        };
        for (let i = 0; i < this.transacoes.length; i++) {
            const day = this.transacoes[i].data.getDay();
            switch (day) {
                case 0:
                    countSemana.Domingo++;
                    break;
                case 1:
                    countSemana["Segunda-feira"]++;
                    break;
                case 2:
                    countSemana["Terça-feira"]++;
                    break;
                case 3:
                    countSemana["Quarta-feira"]++;
                    break;
                case 4:
                    countSemana["Quinta-feira"]++;
                    break;
                case 5:
                    countSemana["Sexta-feira"]++;
                    break;
                case 6:
                    countSemana["Sábado"]++;
                    break;
            }
        }
        return countSemana;
    }
    setMelhorDia() {
        return Object.entries(this.semana).sort((a, b) => b[1] - a[1])[0];
    }
}
//# sourceMappingURL=Estatisticas.js.map