import * as fs from 'fs';
import * as xml2js from 'xml2js';

function processarJSON(caminho: string) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    const dados = JSON.parse(conteudo);
    calcularFaturamento(dados);
}

function processarXML(caminho: string) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    xml2js.parseString(conteudo, (err, result) => {
        if (err) throw err;

        const dados = result.row.map((item: any) => ({
            dia: parseInt(item.dia[0], 10),
            valor: parseFloat(item.valor[0]),
        }));

        calcularFaturamento(dados);
    });
}

function calcularFaturamento(dados: { dia: number; valor: number }[]) {
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
} else if (tipoArquivo === "XML") {
    processarXML('./dados(2).xml');
} else {
    console.log('Tipo de arquivo inválido!');
}
