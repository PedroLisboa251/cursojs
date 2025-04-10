function mostraHora() {
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
}

const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer)
    console.log('Aqui parou o timer')
}, 5000);

setTimeout(function () {
    console.log('Fim do processo')
}, 8000);