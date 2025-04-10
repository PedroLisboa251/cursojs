const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 8) {
        console.log(`Pulei o número ${numero}`)
        continue;
    }
    if (numero === 5) {
        console.log(`Parei no número ${numero - 1}`)
        break;
    }
    console.log(numero)
}