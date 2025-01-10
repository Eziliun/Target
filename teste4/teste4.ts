const faturamentoEstados: Record<'SP' | 'RJ' | 'MG' | 'ES' | 'Outros', number> = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const faturamentoTotal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

const percentuais: Record<'SP' | 'RJ' | 'MG' | 'ES' | 'Outros', string> = {} as any;

for (const estado in faturamentoEstados) {
    const estadoKey = estado as keyof typeof faturamentoEstados; 
    const percentual = (faturamentoEstados[estadoKey] / faturamentoTotal) * 100;
    percentuais[estadoKey] = `${percentual.toFixed(2)}%`;
}

console.log("Percentuais de Faturamento por Estado:");
for (const estado in percentuais) {
    const estadoKey = estado as keyof typeof percentuais; 
    console.log(`${estadoKey}: ${percentuais[estadoKey]}`);
}
