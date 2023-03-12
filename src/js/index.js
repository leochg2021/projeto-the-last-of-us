/*
Obj: quando clicar no botão temos que 
mostrar a imagem de fundo correspondente.
Analisar e descrever o passo a passo de cada ação.
*/
// passo 01
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll(`.imagem`);

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        imagens[indice].classList.add('ativa');


    })
})