function calcularValor() {
    // Obtém os valores dos campos de entrada do formulário
    var valorQuilo = parseFloat(document.getElementById('valor-quilo').value);
    var taraPrato = parseFloat(document.getElementById('tara-prato').value);
    var pesoPrato = parseFloat(document.getElementById('peso-prato').value);

    // Calcula o peso da refeição descontando a tara do prato
    var pesoRefeicao = pesoPrato - taraPrato;

    // Calcula o valor da refeição com base no valor do quilo e no peso da refeição
    var valorRefeicao = pesoRefeicao * (valorQuilo / 1000);

    // Converter o valor para string com a formatação correta
    var valorFormatado = valorRefeicao.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Cria a mensagem com o resultado formatado
    var mensagem = 'O prato de ' + pesoRefeicao + ' gramas custa: R$' + valorFormatado;

    // Exibe a mensagem no elemento de resultado e mostra o resultado
    document.getElementById('mensagem').textContent = mensagem;
    document.getElementById('resultado').style.display  =  'block';
}