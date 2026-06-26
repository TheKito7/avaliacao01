// criação do array vazio 
let empresas = []

// Função chamada ao clicar no botão "enviar"
function enviar() {

    // Capturando os dados digitados no formulário
    let empresa = document.getElementById("empresa").value
    let quantidade = document.getElementById("quantidade").value

    // Calcula o valor a receber, sendo o 220 dado na atividade
    let valorReceber = quantidade * 220

    // Variáveis da premiação
    let premio = 0
    let texto = ''

    // comparacao com dados da questao
    if (valorReceber <= 1000) {
        texto = "Abaixo da Meta"
    } else if (valorReceber <= 10000) {
        premio = valorReceber * 0.08
    } else if (valorReceber <= 15000) {
        premio = valorReceber * 0.10
    } else if (valorReceber <= 25000) {
        premio = valorReceber * 0.15
    } else {
        premio = valorReceber * 0.20
    }

    // Calcula do valor final
    let valorFinal = valorReceber + premio

    let dados = { empresa: empresa, quantidade: quantidade, valorReceber: valorReceber, premio: premio, texto: texto,
        valorFinal: valorFinal
    }

    // Adiciona o objeto ao array
    empresas.push(dados);

    // Atualiza a lista na tela
    mostrar();

    // Limpa os campos do formulário
    document.getElementById("empresa").value = ""
    document.getElementById("quantidade").value = ""
}

// Função responsável por exibir todas as empresas cadastradas
function mostrar() {

    let saida = "";

    // Estrutura de repetição
    for (let i = 0; i < empresas.length; i++) {

        saida += `
        <hr>

        <p>Empresa: ${empresas[i].empresa}</p>

        <p>Quantidade Recolhida: ${empresas[i].quantidade} toneladas</p>

        <p><strong>Valor a Receber:</strong> R$ ${empresas[i].valorReceber.toFixed(2)}</p>

        <p><strong>Premiação:</strong>
        ${empresas[i].premio > 0
            ? "R$ " + empresas[i].premio.toFixed(2)
            : empresas[i].texto}
        </p>

        <p>Valor Final: R$ ${empresas[i].valorFinal.toFixed(2)}</p>
        `
    }

    // mostrar o resulado final 
    document.getElementById("resultado").innerHTML = saida
}