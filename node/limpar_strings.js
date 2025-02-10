const input = "Oi, Estudante!";
const cleaned = input.replace(/[^A-Za-z0-9]/g, "");
console.log('original', input);
console.log('limpo', cleaned); // Isso resultará em "OiEstudante"