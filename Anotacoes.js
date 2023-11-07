function limparTexto(id) {
    var textarea = document.getElementById(id);
    if (textarea.value === "Digite suas anotações aqui." || textarea.value === "Digite a evolução aqui.") {
        textarea.value = "";
    }
}
