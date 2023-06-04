function contarLetras() {
    var input = document.getElementById("frase").value; // Obtém o valor do campo de entrada
    var count = 0; // Inicializa o contador

    for (var i = 0; i < input.length; i++) {
        var character = input[i];

        if (character.toLowerCase() === 'a' && !(/[áàãâäAÁÀÃÂÄ]/.test(character))) {
            count++; // Incrementa o contador se o caractere for 'a' minúscula e não acentuada
        }
    }

    document.getElementById("resultado").textContent = 'Quantidade de letas "a" minuscula: ' + count;
}