// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + umDia + tresHoras);
// console.log(data.toString())

// const data = new Date(2025, 3, 1, 10, 35, 30); //a, m, d, h, M, s, ms
// const data = new Date()
// console.log(data.toString())

// const data = new Date()
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1)
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 = Domingo, 6 = Sábado
//
// console.log(data.toString())
// console.log(Date.now())

function zeroAEsquerda(num) {
    return num >= 10 ?  num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDay());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const horas = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${min}:${sec}`;
}
const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)
