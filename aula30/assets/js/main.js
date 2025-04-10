const dataHtml = document.querySelector('.data');

function adicionaZero(data) {
    return data < 10 ? `0${data}` : `${data}`;
}

function getWeekDay(diaSemana) {

    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return dias[diaSemana]

    // OU

    // switch (diaSemana) {
    //     case 0:
    //         return 'Domingo';
    //     case 1:
    //         return 'Segunda-feira';
    //     case 2:
    //         return 'Terça-feira';
    //     case 3:
    //         return 'Quarta-feira';
    //     case 4:
    //         return 'Quinta-feira';
    //     case 5:
    //         return 'Sexta-feira';
    //     case 6:
    //         return 'Sábado';
    //     default:
    //         return 'Dia inválido';
    // }
}

function getMonth(mes) {

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes]

    // OU
    //
    // switch (mes) {
    //     case 0: return 'Janeiro';
    //     case 1: return 'Fevereiro';
    //     case 2: return 'Março';
    //     case 3: return 'Abril';
    //     case 4: return 'Maio';
    //     case 5: return 'Junho';
    //     case 6: return 'Julho';
    //     case 7: return 'Agosto';
    //     case 8: return 'Setembro';
    //     case 9: return 'Outubro';
    //     case 10: return 'Novembro';
    //     case 11: return 'Dezembro';
    //     default: return 'Dia inválido';
    // }
}

function mostraData() {
    const data = new Date();
    const diaSemana = getWeekDay(data.getDay());
    const diaMes = adicionaZero(data.getDate());
    const mes = getMonth(data.getMonth());
    const ano = data.getFullYear();
    const horas = adicionaZero(data.getHours());
    const min = adicionaZero(data.getMinutes());
    const sec = adicionaZero(data.getSeconds());

    dataHtml.innerText = `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${horas}:${min}:${sec}`;
}

// OU

// const dataHtml = document.querySelector('.data');
// const data = new Date();
// dataHtml.innerText = data2.toLocaleString('pt-br', {
//     dateStyle: 'full',
//     timeStyle: 'short'
// });


// Atualiza a cada segundo
setInterval(mostraData, 1000);

// Chamada inicial para evitar atraso na exibição
mostraData();
