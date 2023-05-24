const botoes = document.querySelectorAll('.btn')
//Pega todos os botões do documento (index.html)
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {

    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    //Pegando o valor da categoria do livro para poder filtrar
    let livrosFiltrados = categoria == 'disponivel' ?
     filtrarDisponibilidade() : filtrarCategoria(categoria)
     /*Basicamente faz um if(categoria == 'disponivel'){mostra os livros com o filtro de disponivel} 
     else {mostra os livros da categoria que voce clicou}*/
    exibirLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotLivrosDisp(valorTotal)
    }

}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotLivrosDisp(valorTotal){

    elementoValorTotLivrosDisp.innerHTML = 
    `<div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`

}