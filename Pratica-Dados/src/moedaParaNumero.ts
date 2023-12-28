/**
 * Recebe string '1.000,00' e retorna number 1000.00 
 */
export default function moedaParaNumero(moeda: string): number | null {
  const result = Number(moeda.replaceAll("R$", "").replaceAll(".", "").replaceAll(",", ".").trim());
  return isNaN(result) ? null : result;
}