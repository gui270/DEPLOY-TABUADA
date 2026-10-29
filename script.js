// Executa quando o botão "btn-gerar" é clicado.
function gerarTabuada() {
    // Obtém o valor informado no campo de entrada.
    const numeroInput = document.getElementById('numero-input');
    const numero = parseInt(numeroInput.value, 10);

    // Obtém o elemento onde a tabuada será exibida.
    const resultadoDiv = document.getElementById('resultado-aqui');

    // Limpa o resultado anterior e adiciona o título.
    resultadoDiv.innerHTML = '';
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // Gera a tabuada de 1 até 10.
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

// Associa o botão à função que gera a tabuada.
const btnGerar = document.getElementById('btn-gerar');
btnGerar.addEventListener('click', gerarTabuada);