export default async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error('Não foi possível obter os dados. Erro: ' + response.status);
        const data = await response.json();
        return data;
    }
    catch (error) {
        if (error instanceof Error)
            console.error(`fetchData error: ${error.message}`);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map