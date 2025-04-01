// Dados Primitivos (imutáveis) = string, number, boolean, undefined, null (bigint, symbol)
// Referênca mutável = array, object, function

// let a = [1, 2, 3, 4, 5];
// let b = a; //Vincula as duas variáveis
// // let b = [...a] Copia o valor de a para b
// let c = b;
// console.log(a, b);
//
// a.push(6);
// console.log(a, b);
//
// b.pop();
// console.log(a, b);
//
// a.push = 'Pedro';
// console.log(c);

const a = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
};
const b = a;

b.nome = 'Lucas';
console.log(a);
console.log(b);