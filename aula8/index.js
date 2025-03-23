// Pedro Henrique Lisboa tem 24 anos, pesa 80kg, tem 1,70m de altura e seu IMC é de 27,68.

const nome = 'Pedro Henrique';
const sobrenome = 'Lisboa';
const idade = 24;
const peso = 80;
const altura = 1.70;

let imc = peso / (altura ^ 2);
let anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'pesa', peso, 'kg', 'tem', altura, 'm', 'de altura e seu IMC é de', imc);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${imc}`);