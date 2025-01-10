function Fibonacci(limite: number): number[] {
    const sequencia: number[] = [0, 1];
    let proxNumero = sequencia[0] + sequencia[1];

    while (proxNumero <= limite) {
        sequencia.push(proxNumero);
        const tamanho = sequencia.length;
        proxNumero = sequencia[tamanho - 1] + sequencia[tamanho - 2];
    }

    return sequencia;
}


function verificarFibonacci(numero: number, sequencia: number[]): string {
    return sequencia.includes(numero)
        ? `O número ${numero} pertence à sequência de Fibonacci.`
        : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
}

const numeroParaVerificar: number = 39; 
const sequenciaFibonacci = Fibonacci(numeroParaVerificar);

console.log("Sequência de Fibonacci gerada até o número:", numeroParaVerificar);
console.log(sequenciaFibonacci.join(", "));
console.log(verificarFibonacci(numeroParaVerificar, sequenciaFibonacci));