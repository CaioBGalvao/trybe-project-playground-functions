// Desafio 1
function compareTrue(valor1, valor2) {
  const resultado = valor1 === true && valor2 === true;
  return resultado;
}

compareTrue(false, true);

// Desafio 2
function calcArea(base, height) {
  const resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3

function splitSentence(frase) {
  const fraseSeparada = frase.split(' ');
  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let newArray = [];
  newArray = array[0].concat(array[-1]);
  return newArray;
}

// Desafio 5
function footballPoints(win, ties) {
  const pontosTime = win * 3 + ties;
  return pontosTime;
}

// Desafio 6
// ref:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#retornando_o_maior_elemento_de_um_array
// Esse código recupera o maior número existente no array.
// De acordo com a documentação no site da mozilla:
// Uma variável é criada e nela é armazenada o maior número do array.
// Isso por que é aplicado ".reduce".
// ".reduce" funciona da seguinte maneira:
// Ele possui uma callback que é a nossa função local.
// Nessa função local se espera que um valor seja retornado.
// Esse valor retornado é encontrado pelo objeto "Math" com uma função de ".max".
// Esse valor será armazenado em "a" uma parâmetro da função local.
// Esse "a" será comparado com o outro valor "b"
// E caso "a" seja menor que "b" o valor de "a" se altera.
// Até que todo o array tenha terminado e o valor de "a" seja o maior de todos.
// Então "a" é armazenado na variável max.
function highestCount(arrayCount) {
  // implementado da Mozilla. Extrai o maior número.
  const max = arrayCount.reduce((a, b) => Math.max(a, b));
  // fim do código implementado
  // Compara o maior número enquanto adiciona +1 ao contador.
  let contador = 0;
  for (let index = 0; index < arrayCount.length; index += 1) {
    if (max === arrayCount[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Position = Math.abs(cat1 - mouse);
  const cat2Position = Math.abs(cat2 - mouse);
  if (cat1Position > cat2Position) {
    return 'cat2';
  }
  if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  const fizzBuzzes = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizzBuzzes.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      fizzBuzzes.push('fizz');
    } else if (array[index] % 5 === 0) {
      fizzBuzzes.push('buzz');
    } else {
      fizzBuzzes.push('bug!');
    }
  }
  return fizzBuzzes;
}

// Desafio 9
function encode(frase) {
  let fraseCodificada = '';
  fraseCodificada = frase.replace(/a/g, 1);
  fraseCodificada = frase.replace(/e/g, 2);
  fraseCodificada = frase.replace(/i/g, 3);
  fraseCodificada = frase.replace(/o/g, 4);
  fraseCodificada = frase.replace(/u/g, 5);
  return fraseCodificada;
}

function decode(frase) {
  let fraseDecodificada = '';
  fraseDecodificada = frase.replace(/1/g, 'a');
  fraseDecodificada = frase.replace(/2/g, 'e');
  fraseDecodificada = frase.replace(/3/g, 'i');
  fraseDecodificada = frase.replace(/4/g, 'o');
  fraseDecodificada = frase.replace(/5/g, 'u');
  return fraseDecodificada;
}

// Desafio 10
function techList(tech, name) {
  let objectTechName = {};
  const sortedTech = tech.sort();
  const listaTech = [];
  const nome = name;
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortedTech.length; index += 1) {
    objectTechName = {
      tech: sortedTech[index],
      name: nome,
    };
    listaTech[index] = objectTechName;
  }
  return listaTech;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
