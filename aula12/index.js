let varTrans1;
let varTrans2;
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
console.log('Variáveis originais:', varA, varB, varC);

varTrans1 = varB;
varB = null;
varB = varC;
varTrans2 = varA;
varA = null;
varA = varTrans1;
varC = varTrans2

console.log('Variáveis temporárias:', varTrans1, varTrans2);
console.log('Variáveis trocadas:', varA, varB, varC);