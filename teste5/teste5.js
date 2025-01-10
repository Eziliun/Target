"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function inverterString(texto) {
    var invertida = '';
    for (var i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Digite uma string para inverter: ', function (textoOriginal) {
    var textoInvertido = inverterString(textoOriginal);
    console.log("Texto original: ".concat(textoOriginal));
    console.log("Texto invertido: ".concat(textoInvertido));
    rl.close();
});
