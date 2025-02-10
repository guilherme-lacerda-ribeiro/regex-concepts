const dataString = "25/09/2023, 09/25/2023, 2023-09-25";

// Mês Invertido
const patternData = /(\d{2}\/\d{2}\/\d{4}|\d{2}\/\d{2}\/\d{4})/g;
const capturaDatas = dataString.match(patternData);
console.log('Formato Brasil e mês invertido', capturaDatas); //["25/09/2023","09/25/2023"]

// Brasil, mês invertido e ano invertido
const patternDataAmericano = /(\d{2}\/\d{2}\/\d{4}|\d{2}\/\d{2}\/\d{4}|(\d{4}-\d{2}-\d{2}))/g; //["25/09/2023","09/25/2023","2023-09-25"] 
const capturaDatasTodas = dataString.match(patternDataAmericano);
console.log('Todos os formatos', capturaDatasTodas);


// MAIOR LEGIBILIDADE

// Padrões para datas nos formatos "dd/mm/aaaa", "mm/dd/aaaa" e "aaaa-mm-dd"
const patternData1 = /(\d{2}\/\d{2}\/\d{4})/g; // dd/mm/aaaa
const patternData2 = /(\d{2}\/\d{2}\/\d{4})/g; // mm/dd/aaaa
const patternData3 = /(\d{4}-\d{2}-\d{2})/g; // aaaa-mm-dd

// Captura as datas na string usando os padrões
const capturaDatas1 = dataString.match(patternData1);
const capturaDatas2 = dataString.match(patternData2);
const capturaDatas3 = dataString.match(patternData3);

// Exibe as datas capturadas para cada padrão
console.log("Padrão 1 (dd/mm/aaaa):", capturaDatas1); //"Padrão 1 (dd/mm/aaaa):" ["25/09/2023","09/25/2023"]
console.log("Padrão 2 (mm/dd/aaaa):", capturaDatas2); //"Padrão 2 (mm/dd/aaaa):"["25/09/2023","09/25/2023"]
console.log("Padrão 3 (aaaa-mm-dd):", capturaDatas3); //"Padrão 3 (aaaa-mm-dd):" ["2023-09-25"]

console.log('NÃO ATENDE O REQUISITO')