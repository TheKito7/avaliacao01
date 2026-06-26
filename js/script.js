// criação do array vazio 
let empresas = []

// Função chamada ao clicar no botão "enviar"
function enviar() {

    // Capturando os dados digitados no formulário
    let empresa = document.getElementById("empresa").value
    let quantidade = document.getElementById("quantidade").value

    // Calculando o valor a receber, sendo o 220 dado na atividade
    let valorReceber = quantidade * 220


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

    // Calculando o valor final
    let valorFinal = valorReceber + premio

    let dados = { empresa: empresa, quantidade: quantidade, valorReceber: valorReceber, premio: premio, texto: texto,
        valorFinal: valorFinal
    }

    // adicionndo ao array
    empresas.push(dados)

   
    mostrar()

    // limpando o formulario
    document.getElementById("empresa").value = ""
    document.getElementById("quantidade").value = ""
}

// exibir todas as empresas cadastradas
function mostrar() {

    let saida = ""

    // estrutura de repetição, for 
    for (let i = 0; i < empresas.length; i++) {

        // contador
        saida += `
        <hr>

        <p>Empresa: ${empresas[i].empresa}</p>

        <p>Quantidade Recolhida: ${empresas[i].quantidade} toneladas</p>

        <p>Valor a Receber: R$ ${empresas[i].valorReceber.toFixed(2)}</p>

        <p>Premiação:
        ${empresas[i].premio > 0
            ? "R$ " + empresas[i].premio.toFixed(2)
            : empresas[i].texto}
        </p>

        <p>Valor Final: R$ ${empresas[i].valorFinal.toFixed(2)}</p>
        `
    }

    // mostrando o resultado final na div resutado  
    document.getElementById("resultado").innerHTML = saida
}