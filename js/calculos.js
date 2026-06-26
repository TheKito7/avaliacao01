function calcularValorResi(qtd) {

    qtd = Number(qtd)
    return qtd * 220

}
export { calcularValorResi }


function calcularAdicional(qtd, valor) {

    valor = Number(valor);

    let taxa = 0;


    if (qtd <= 1000) {

        taxa = 0

    } else if (qtd > 1000 && qtd <= 10000) {

        taxa = 0.08

    } else if (qtd > 10000 && qtd <= 15000) {

        taxa = 0.10;

    } else if (qtd >= 15000 && qtd <= 25000) {

        taxa = 0.15;
    }
    else if (qtd > 25000) {

        taxa = 0.20;
    }

    return qtd * taxa;

}
export { calcularAdicional }