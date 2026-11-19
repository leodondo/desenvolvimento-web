const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(evento){

    evento.preventDefault();
    const nome = campoNome.value.trim();
    mensagem.classList.remove("alert-danger","alert-success");
    mensagem.classList.add("alert");

    if (nome ===""){
        mensagem.textContent = "Por favor, digite o seu nome: ";
        mensagem.classList.add("alert-danger");
        campoNome.focus();
    } else {
        mensagem.textContent = `Olá Sr(a) ${nome}, sejam muito bem vindos :)`;
        mensagem.classList.add("alert-success");
    }

});
