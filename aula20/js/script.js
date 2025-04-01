function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        // Pegando os valores dos campos
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        // Adicionando ao array de pessoas
        pessoas.push({ nome, sobrenome, peso, altura });

        // Exibindo os dados no HTML
        resultado.innerHTML += `<p>${nome} ${sobrenome} - Peso: ${peso}kg, Altura: ${altura}m</p>`;

        console.log(pessoas); // Para verificar se os dados estão sendo armazenados
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
