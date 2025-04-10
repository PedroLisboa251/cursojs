// // Escreva uma função que receba dois números e retorne o maior deles
//
// function nMaior(x, y) {
//     return x > y ? x : y;
// }
//
// console.log(nMaior(1, 5));

// Escreva uma função chamada ePaisagem que recebe dois argumentos (largura e altura) de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

// const ePaisagem = (largura, altura) => largura > altura;
//
// console.log(ePaisagem(1920, 1080))

// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3: Fizz
// Número é divisível por 5: Buzz
// Número é divisível por 3 e por 5: FizzBuzz
// Número não é divisível por 3 e 5: Retorna o próprio número
// Checar se o número realmente é número: Retorna o próprio número
// Use a funcão com números de 0 a 100

function fizzBuzz(n) {
    if (isNaN(n)) {
        return `${n} não é um número`;
    }

    if (n >= 0 && n <= 100) {
        if (n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz';
        }
        if (n % 3 === 0) {
            return 'Fizz';
        }
        if (n % 5 === 0) {
            return 'Buzz';
        }
        return `${n} não é divisível por 3 e 5`;
    }

    return 'Fora do intervalo de 0 a 100';
}

console.log(fizzBuzz(101));

