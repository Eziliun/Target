function Fibonacci(limite) {
    var sequencia = [0, 1];
    var proxNumero = sequencia[0] + sequencia[1];
    while (proxNumero <= limite) {
        sequencia.push(proxNumero);
        var tamanho = sequencia.length;
        proxNumero = sequencia[tamanho - 1] + sequencia[tamanho - 2];
    }
    return sequencia;
}
function verificarFibonacci(numero, sequencia) {
    return sequencia.includes(numero)
        ? "O n\u00FAmero ".concat(numero, " pertence \u00E0 sequ\u00EAncia de Fibonacci.")
        : "O n\u00FAmero ".concat(numero, " N\u00C3O pertence \u00E0 sequ\u00EAncia de Fibonacci.");
}
var numeroParaVerificar = 39;
var sequenciaFibonacci = Fibonacci(numeroParaVerificar);
console.log("Sequência de Fibonacci gerada até o número:", numeroParaVerificar);
console.log(sequenciaFibonacci.join(", "));
console.log(verificarFibonacci(numeroParaVerificar, sequenciaFibonacci));
