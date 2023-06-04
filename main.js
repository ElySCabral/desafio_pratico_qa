document.getElementById("gerarBtn").addEventListener("click", gerarVetor);

function gerarVetor() {
    var vetor = [];
    var vetorImpares = [];
    var vetorParesResto5 = [];

    for (var i = 0; i < 100; i++) {
        var numero = Math.floor(Math.random() * 100) + 1;
        vetor.push(numero);

        if (numero % 2 !== 0) {
            vetorImpares.push(numero);
        } else {
            vetorParesResto5.push(numero % 5);
        }
    }

    document.getElementById("vetorOriginal").innerHTML = "Vetor original: " + vetor.join(", ");
    document.getElementById("vetorImpares").innerHTML = "Vetor de números ímpares: " + vetorImpares.join(", ");
    document.getElementById("vetorParesResto5").innerHTML = "Vetor do resto da divisão por 5 dos números pares: " + vetorParesResto5.join(", ");
}