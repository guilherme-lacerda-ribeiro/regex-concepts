const enderecos = [
  "Rua das Flores, 123, CEP 60321-105",
  "Avenida Brasil, 456A, CEP 16945-017",
  "Travessa dos Santos, 101, CEP 12345-678",
  "Rua sem número 17845-698",
  "Rua dos Sonhos, 12B, CEP 1234567",
];

enderecos.forEach((endereco) => {
  const patternEndereco = /[\w ]*, ?\d+[A-Za-z]?, ?CEP ?\d{5}-\d{3}/i.test(endereco);

  if (patternEndereco) {
    console.log("VALIDO", patternEndereco, endereco);
    return;
  }

  console.log("INVALIDO", patternEndereco, endereco);
});

// root@PC-GUI:~/code-offline/regex-concepts# node node/valida_endereco.js
// VALIDO true Rua das Flores, 123, CEP 60321-105
// VALIDO true Avenida Brasil, 456A, CEP 16945-017
// VALIDO true Travessa dos Santos, 101, CEP 12345-678
// INVALIDO false Rua sem número 17845-698
// INVALIDO false Rua dos Sonhos, 12B, CEP 1234567
// root@PC-GUI:~/code-offline/regex-concepts#