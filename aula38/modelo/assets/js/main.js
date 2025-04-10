// const paragrafos = document.querySelector('.paragrafos');
const pNoBody = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor;
const corTexto = getComputedStyle(document.body)
let corUsada = '#FFFFFF' || corTexto.color
console.log(backgroundColorBody, corUsada)

for (let p of pNoBody) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = corUsada
}