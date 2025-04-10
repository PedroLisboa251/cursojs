// const carros = ['Fox', 'Peugeot', 'Punto']
//
// for (let i = 0; i < carros.length; i++) {
//     console.log(carros[i]);
// }
//
// for (let i in carros) {
//     console.log(carros[i]);
// }

const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Lisboa',
    idade: 24,
    pet: 'gatos',
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}