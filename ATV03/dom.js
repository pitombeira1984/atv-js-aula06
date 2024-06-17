function ehPrimo(numero) {
    if (numero <= 1) return false; // Números menores ou iguais a 1 não são primos
    if (numero <= 3) return true; // 2 e 3 são primos

    if (numero % 2 === 0 || numero % 3 === 0) return false; // Elimina múltiplos de 2 e 3

    // Checa apenas até a raiz quadrada de numero
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function verificarPrimo() {
    const input = prompt("Digite um número para verificar se é primo:");
    const numero = parseInt(input);

    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
        return;
    }

    const resultado = ehPrimo(numero);
    if (resultado) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}

// Chama a função para verificar o número primo
verificarPrimo();

