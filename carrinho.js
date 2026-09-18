function calcularTotal(itens, cupom) {

    let subtotal = 0;

    if (itens.length === 0) {
        throw new Error("Carrinho inválido");
    }

    for (let i = 0; i < itens.length; i++) {

        // BUG 1 corrigido: valida quantidade e preço
        if (itens[i].quantidade <= 0 || itens[i].preco < 0) {
            throw new Error("Carrinho inválido");
        }

        subtotal += itens[i].preco * itens[i].quantidade;
    }

    let desconto = 0;

    if (cupom === "PROMO10") {

        // BUG 2 corrigido: desconto de 10%
        desconto = subtotal * 0.10;
    }

    let frete = 15;

    // BUG 3 corrigido: R$ 100 também tem frete grátis
    if (subtotal >= 100) {
        frete = 0;
    }

    let total = subtotal - desconto + frete;

    // BUG 4 corrigido: duas casas decimais
    return Number(total.toFixed(2));
}

module.exports = { calcularTotal };