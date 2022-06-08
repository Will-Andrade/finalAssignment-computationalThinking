/**
 * Atividade final da disciplina Pensamento Computacional com valor máximo de 10pts e entrega 27/05/22 - 23:55
 
 * Solução desenvolvida na linguagem de programação Javascript pelo discente Willian Andrade, https://www.linkedin.com/in/will-andrad/.

 * Este arquivo pode ser aberto pelos seguintes métodos:
  - Utilizando o Visual Studio Code: https://www.youtube.com/watch?v=efWrIyjmCXg

  - Utilizando o navegador de seu computador: https://www.youtube.com/watch?v=WpBauFe597o

  - Utilizando uma extensão do VS Code chamada Code Runner: https://www.youtube.com/watch?v=WVyM-U3eu08
  
  - Copiar tudo, colar e rodar dentro de uma ferramenta de code sandbox como:
    -- Codesandbox.io, https://codesandbox.io/s/
    -- Codepen.io, https://codepen.io/
 
 * Segue o enunciado -->
 * Desenvolva uma Algoritmo que receba como entrada pelo usuário a idade e o
 * estado civil (c - casado, s - solteiro, v - viúvo e d – desquitado ou
 * separado) de 20 pessoas. O seu código ao final deve ser capaz de calcular e
 * imprimir as seguintes informações:
 
 * a)  a quantidade de pessoas casadas; ✅
 
 * b) a quantidade de pessoas solteiras; ✅
  
 * c) a média das idades das pessoas viúvas; ✅
  
 * d) a porcentagem de pessoas desquitadas ou separadas dentre todas as pessoas analisadas. ✅
*/

const groupOfPeople = [
  { age: 67, maritalStatus: "c" },
  { age: 50, maritalStatus: "c" },
  { age: 22, maritalStatus: "s" },
  { age: 18, maritalStatus: "s" },
  { age: 12, maritalStatus: "s" },
  { age: 19, maritalStatus: "c" },
  { age: 38, maritalStatus: "v" },
  { age: 56, maritalStatus: "d" },
  { age: 10, maritalStatus: "s" },
  { age: 8, maritalStatus: "s" },
  { age: 53, maritalStatus: "d" },
  { age: 45, maritalStatus: "c" },
  { age: 69, maritalStatus: "c" },
  { age: 90, maritalStatus: "c" },
  { age: 40, maritalStatus: "v" },
  { age: 48, maritalStatus: "d" },
  { age: 4, maritalStatus: "s" },
  { age: 27, maritalStatus: "c" },
  { age: 92, maritalStatus: "c" },
  { age: 81, maritalStatus: "v" }
];
  
// Obtendo e mostrando a quantidade total de pessoas casadas:
const amountOfMarriedPeople = groupOfPeople
  .filter((person) => person.maritalStatus === "c").length;
console.log('Amount of married people: ', amountOfMarriedPeople);

// Obtendo e mostrando a quantidade total de pessoas solteiras:
const amountOfSinglePeople = groupOfPeople
  .filter((person) => person.maritalStatus === "s").length;
console.log('Amount of single people: ', amountOfSinglePeople);

// Obtendo e mostrando a média de idades de pessoas viúvas
const ageOfWidowsSum = groupOfPeople
  .reduce((acc, person) => 
    person.maritalStatus === "v" ? acc += person.age : acc, 
  0);

const averageAgeOfWidows = ageOfWidowsSum / groupOfPeople.length;
console.log('Average age of widows: ', averageAgeOfWidows);

// Obtendo e mostrando a porcentagem de pessoas desquitadas ou separadas
const amountOfDivorcedPeople = groupOfPeople
  .filter((person) => person.maritalStatus === "d").length;

const totalPercentageOfDivorcedPeople = 
  `${(amountOfDivorcedPeople / 100) * 20}%`;
console.log(`The total percentage of divorced people is: ${totalPercentageOfDivorcedPeople}`);
