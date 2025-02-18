document.getElementById('formAtleta').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const notas = document.getElementById('notas').value.split(',').map(nota => parseFloat(nota.trim()));

    // Função para calcular a categoria
    function calculaCategoria(idade) {
        if (idade >= 9 && idade <= 11) {
            return 'Infantil';
        } else if (idade === 12 || idade === 13) {
            return 'Juvenil';
        } else if (idade === 14 || idade === 15) {
            return 'Intermediário';
        } else if (idade >= 16 && idade <= 30) {
            return 'Adulto';
        } else {
            return 'Sem categoria';
        }
    }

    // Função para calcular o IMC
    function calculaIMC(peso, altura) {
        return peso / (altura * altura);
    }

    // Função para calcular a média válida
    function calculaMediaValida(notas) {
        const notasOrdenadas = [...notas].sort((a, b) => a - b);
        notasOrdenadas.shift(); // Remove a menor nota
        notasOrdenadas.pop();   // Remove a maior nota
        const soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasOrdenadas.length;
    }

    // Calculando os valores
    const categoria = calculaCategoria(idade);
    const imc = calculaIMC(peso, altura);
    const mediaValida = calculaMediaValida(notas);

    // Exibindo os resultados
    document.getElementById('resultadoNome').textContent = nome;
    document.getElementById('resultadoIdade').textContent = idade;
    document.getElementById('resultadoPeso').textContent = peso;
    document.getElementById('resultadoAltura').textContent = altura;
    document.getElementById('resultadoNotas').textContent = notas.join(', ');
    document.getElementById('resultadoCategoria').textContent = categoria;
    document.getElementById('resultadoIMC').textContent = imc.toFixed(2);
    document.getElementById('resultadoMedia').textContent = mediaValida.toFixed(2);
});
