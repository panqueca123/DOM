document.getElementById("calcular").addEventListener("click", () => {
    let numerzito01 = parseFloat(document.getElementById("numerzito1").value);
    let numerzito02 = parseFloat(document.getElementById("numerzito2").value);

    const seleciona = document.getElementById("seleção").value;
    let calcular = document.getElementById("calcular");
    let calcula = document.getElementById("calcula");


    let resultado;
    switch (seleciona) {
        case 'bota':
            resultado = numerzito01 + numerzito02;
            break;
        case 'tira':
            resultado = numerzito01 - numerzito02;
            break;
        case 'multiplica':
            resultado = numerzito01 * numerzito02;
            break;
        case 'divide ae':
            if (numerzito02 === 0) {
                calcular.textContent = 'Não é possível dividir por zero.';
                return;
            }
            resultado = numerzito01 / numerzito02;
            break;
            default:
                return;
};

calcula.textContent = resultado
})