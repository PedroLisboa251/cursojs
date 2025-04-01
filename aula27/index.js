// OPERAÇÃO TERNÁRIA

// (condição) ? 'valor para verdadeiro' : 'valor para falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal'
console.log(nivelUsuario);

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Azul'
console.log(corPadrao)

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP')
// } else {
//     console.log('Usuário Normal')
// }