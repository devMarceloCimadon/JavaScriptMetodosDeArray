const btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', ordenarPreco)

function ordenarPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    //Ordenando os livros pelo valor, do menor ao maior
    exibirLivrosNaTela(livrosOrdenados)
}