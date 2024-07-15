function formatarMoeda(campo) {
    let valor = campo.value;
    
    // Remove todos os caracteres que não são dígitos
    valor = valor.replace(/\D/g, "");
    
    // Adiciona a vírgula antes dos dois últimos dígitos
    valor = (valor / 100).toFixed(2) + "";
    
    // Separa os valores em milhares
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+,)/g, "$1.");
    
    // Atualiza o valor do campo com a formatação
    campo.value = valor;
}