"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const xml2js = __importStar(require("xml2js"));
function processarJSON(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    const dados = JSON.parse(conteudo);
    calcularFaturamento(dados);
}

function processarXML(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    xml2js.parseString(conteudo, (err, result) => {
        if (err)
            throw err;
        const dados = result.row.map((item) => ({
            dia: parseInt(item.dia[0], 10),
            valor: parseFloat(item.valor[0]),
        }));
        calcularFaturamento(dados);
    });
}
function calcularFaturamento(dados) {
    const faturamentosValidos = dados.filter(item => item.valor > 0);
    const menorValor = Math.min(...faturamentosValidos.map(item => item.valor));
    const maiorValor = Math.max(...faturamentosValidos.map(item => item.valor));
    const somaValores = faturamentosValidos.reduce((acc, item) => acc + item.valor, 0);
    const mediaMensal = somaValores / faturamentosValidos.length;
    const diasAcimaDaMedia = faturamentosValidos.filter(item => item.valor > mediaMensal).length;
    console.log('Menor valor de faturamento:', menorValor.toFixed(2));
    console.log('Maior valor de faturamento:', maiorValor.toFixed(2));
    console.log('Número de dias com faturamento acima da média:', diasAcimaDaMedia);
}
const tipoArquivo = "JSON"; 
if (tipoArquivo === "JSON") {
    
    processarJSON('./dados.json');
}
else if (tipoArquivo === "XML") {
    processarXML('./dados(2).xml');
}
else {
    console.log('Tipo de arquivo inválido!');
}
