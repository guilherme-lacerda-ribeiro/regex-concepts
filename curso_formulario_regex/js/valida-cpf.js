 function removePontuacao(campo) {
    return campo.value.replace(/\D/g, ''); // 527.993.930-71 -> 52799393071
}


function todosDigitosIguais(cpf) {
    return ;
}



//Função que calcula o Dígito verificador do CPF
function calculaDigitoVerificador(cpf, multiplicadorInicial) {
    let soma = 0;
    let multiplicador = multiplicadorInicial;

    for (let tamanho = 0; tamanho < 9 + multiplicadorInicial; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    let resto = soma % 11;

    if (resto < 2) {
        return cpf[9 + multiplicadorInicial] === 0;
    } else {
        return cpf[9 + multiplicadorInicial] === 11 - resto;
    }
}

// Função principal para validar o CPF
export default function ehUmCPF(campo) {
    const cpfSemPontuacao = removePontuacao(campo);
    
    if (todosDigitosIguais(cpfSemPontuacao) || calculaDigitoVerificador(cpfSemPontuacao, 10) || calculaDigitoVerificador(cpfSemPontuacao, 11)) { 
        console.log("Dígitos iguais:",todosDigitosIguais(cpfSemPontuacao));
        console.log("CPF sem pontuação:", cpfSemPontuacao);
        campo.setCustomValidity('Esse CPF não é válido');
    }
}