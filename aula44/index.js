// As aulas 41, 42 e 43 foram exercícios

// try{
//     console.log(naoExisto);
// } catch (err) {
//     console.log('Eu realmente não existo')
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números');
    } else {
        return x + y;
    }
}

console.log(soma('5', 10));