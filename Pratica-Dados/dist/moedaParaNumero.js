export default function moedaParaNumero(moeda) {
    const result = Number(moeda.replaceAll("R$", "").replaceAll(".", "").replaceAll(",", ".").trim());
    return isNaN(result) ? null : result;
}
//# sourceMappingURL=moedaParaNumero.js.map