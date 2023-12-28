export default function stringToDate(dataTexto) {
    const [data, tempo] = dataTexto.split(' ');
    const [dia, mes, ano] = data.split('/').map(Number);
    const [hora, minuto] = tempo.split(':').map(Number);
    return new Date(ano, mes - 1, dia, hora, minuto);
}
//# sourceMappingURL=stringToDate.js.map