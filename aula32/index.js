// let a = 'A'
// let b = 'B'
// let c = 'C'
//
// const letras = [b, c, a];
// [a, b, c] = letras
//
// console.log(a, b, c)

// const numeros = [1, 2, 3, 4, 5]
// const [primeiroNumero, segundoNumero, ...resto] = numeros;
// console.log(primeiroNumero, segundoNumero);
// console.log(resto);

const numeros2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const [um, , tres, , cinco, ...resto2] = numeros2;
console.log(um, tres, cinco, ...resto2);
console.log(resto2);