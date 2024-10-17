// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoresCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelector(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoresCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // - passo 3 - desmarcar o botão seleionado anterior
        desativarBotaoSelecionado();

        // - passo 4 - marcar o botão clicado como estivesse selecionado
        marcarBotaoSelecionado(botao);

        // - passo 5 - esconder a imagem anteriormento selecionada
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        mostrarImagemFundo(indice);

        // - passo 7 esoncer a informação do dragão anteriomente selecionado
        esconderInformacoesAtiva();

        // - passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indice);
    });
});


function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemFundo(indice) {
    const imagens = document.querySelectorAll(".imagem");
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

