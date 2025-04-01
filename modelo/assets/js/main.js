document.addEventListener("DOMContentLoaded", function () {
    function CalculaIMC() {
        const form = document.querySelector('.form');
        const resultadoDiv = document.querySelector('.resultado');

        function recebeEventoForm(evento) {
            evento.preventDefault();

            // Pegando os valores dos campos corretamente
            const peso = Number(document.querySelector('#peso').value);
            const altura = Number(document.querySelector('#altura').value);

            // Validando entrada
            if ( peso === '' || altura === '' || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                resultadoDiv.innerHTML = "<p>Por favor, informe valores válidos para peso e altura.</p>";
            } else {
                // Calculando o IMC
                const resultado = peso / (altura ** 2);

                // Exibindo o resultado corretamente
                resultadoDiv.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)}</p>`;
            }
        }

        // Adicionando o evento ao formulário
        form.addEventListener('submit', recebeEventoForm);
    }
    CalculaIMC();
});
