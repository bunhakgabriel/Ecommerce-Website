function calcularDescontoPercentual(valor: number, desconto: number): string{
    let percentual: number | string = ((valor - desconto) / valor * 100) - 100;  

    if (!Number.isInteger(percentual)) {
        percentual = percentual.toFixed(2);
    } else {
        percentual = percentual.toFixed(0);
    }

    return percentual + '%';
}

export default calcularDescontoPercentual