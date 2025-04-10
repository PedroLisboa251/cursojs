// For clássico - Geralmente com iteráveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou OBJETOS)
// For of - Retorna o valor em si (iteráveis = arrays ou strings.)


const pessoas = ['Pedro', 'João', 'Lucas']

for (let i in pessoas) {
    console.log(i, pessoas[i]);
}

for (let i of pessoas) {
        console.log(i, pessoas[i]);
}

pessoas.forEach(function (pessoa, indice, arrayCompleto) {
    console.log(pessoa, indice, arrayCompleto);
});