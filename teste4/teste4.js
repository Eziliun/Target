var faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
var faturamentoTotal = Object.values(faturamentoEstados).reduce(function (total, valor) { return total + valor; }, 0);
var percentuais = {};
for (var estado in faturamentoEstados) {
    var estadoKey = estado;
    var percentual = (faturamentoEstados[estadoKey] / faturamentoTotal) * 100;
    percentuais[estadoKey] = "".concat(percentual.toFixed(2), "%");
}
console.log("Percentuais de Faturamento por Estado:");
for (var estado in percentuais) {
    var estadoKey = estado;
    console.log("".concat(estadoKey, ": ").concat(percentuais[estadoKey]));
}
