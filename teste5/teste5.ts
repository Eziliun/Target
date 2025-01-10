import * as readline from 'readline';

function inverterString(texto: string): string {
    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Digite uma string para inverter: ', (textoOriginal) => {
    const textoInvertido = inverterString(textoOriginal);

    console.log(`Texto original: ${textoOriginal}`);
    console.log(`Texto invertido: ${textoInvertido}`);

    rl.close();
});
