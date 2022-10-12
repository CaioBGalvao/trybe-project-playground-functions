/* eslint-disable complexity */
// Desafio 11
function generatePhoneNumber(arrayPhone) {
  // Verificador de tamanho
  if (arrayPhone.lenght !== 11) {
    return 'Array com tamanho incorreto.';
  }
  // verificador de modal
  let contador = [];
  for (let indexFist = 0; indexFist < arrayPhone.length; indexFist += 1) {
    for (let indexSecond = 0; indexSecond < arrayPhone.length; indexSecond += 1) {
      if (arrayPhone[indexFist] === arrayPhone[indexSecond]) {
        contador += 1;
      } else if (contador >= 4) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  // gerador de número
  return contador;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
