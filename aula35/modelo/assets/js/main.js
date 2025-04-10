document.addEventListener("DOMContentLoaded", function () {
    const frases = [
        {tag: 'p', texto: 'Adoro Red Dead Redemption 2'},
        {tag: 'div', texto: "Assassin's Creed já foi muito bom"},
        {tag: 'footer', texto: 'Quero muito jogar The Last of Us Part II, mas o port de PC tá uma merda'},
        {tag: 'section', texto: 'Será que o carro sai esse ano?'}
    ];

    function criaFrases(frases) {
        const container = document.querySelector('.container'); // Pega o primeiro elemento com a classe "container"

        for (let i = 0; i < frases.length; i++) {
            const elemento = document.createElement(frases[i].tag); // Cria o elemento HTML
            elemento.textContent = frases[i].texto; // Adiciona o texto
            container.appendChild(elemento); // Adiciona ao container
        }
    }

    criaFrases(frases);
});
