/*
Obj: quando clicar no botão temos que 
mostrar a imagem de fundo correspondente.
Analisar e descrever o passo a passo de cada ação.
*/
// passo 01
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll(`.imagem`);

// passo 02 - pegar o click de cada botao

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        // passo 03 - desmarca o botao selecionado anterior

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 04 - marcar o botao clicando como se estivesse selecionado
        botao.classList.add('selecionado');

        // passo 05 - esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // passo 06 - fazer aparecer a img de fundo corresp. ao botao clicado
        imagens[indice].classList.add('ativa');


    })
})