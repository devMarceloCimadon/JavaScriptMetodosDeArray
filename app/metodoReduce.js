function calcularValorTotal(livros){

    return livros.reduce((acumulador, livro) => acumulador + livro.preco, 0).toFixed(2) //Fixa duas casas depois da virgula
    /*Soma o valor de todos os livros utilizando o metodo reduce,
    o acumulador guarda o valor dos livros ja somados e soma com o proximo valor do array.
    Começo a soma com o valor 0*/

}