// Restricoes : O total de resíduos recolhidos é calculado pelo valor
//da tonelada que corresponde a R$ 220,00.
import { calcularAdicional,calcularValorResi } from "./calculos.js"

// Pegando o forms
const formulario = document.getElementById("formulario")
// pegando a div resultado 
const resultados = document.getElementById("resultado")

// capturadno o clique
formulario.addEventListener("submit", function(event) {
// evitando apagar 
    event.preventDefault()
// pegando dados'

const desc = document.getElementById("descricao").value 
const qtd = document.getElementById("quantidade").value

//calculo  
const pValor = calcularValorResi(qtd)
const tValor = calcularAdicional(qtd)


    // Criando a lista na tela

    const lista = document.createElement("div");


    lista.innerHTML = `

        <h3>
            Empresa: ${desc} - 
        </h3>

         Adicional: R$ ${tValor}
        <p>
            R$ ${pValor.toFixed(2).replace(".",",")}
        </p>


        <hr>

    `



    resultados.appendChild(lista)


})